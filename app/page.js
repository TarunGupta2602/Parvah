"use client";
import { useEffect, useState, useRef } from "react";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { io } from "socket.io-client";

const socket = io("https://your-websocket-server.com"); // Replace with your WebSocket server URL

export default function Home() {
  const { isSignedIn, user } = useUser();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [callActive, setCallActive] = useState(false);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnection = useRef(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/getUsers");
        const data = await res.json();

        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error("Unexpected API response:", data);
          setUsers([]);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const startCall = async (remoteUserId) => {
    setCallActive(true);

    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    if (localVideoRef.current) {
      localVideoRef.current.srcObject = stream;
    }

    peerConnection.current = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    stream.getTracks().forEach((track) => peerConnection.current.addTrack(track, stream));

    peerConnection.current.ontrack = (event) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0];
      }
    };

    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("ice-candidate", { candidate: event.candidate, to: remoteUserId });
      }
    };

    const offer = await peerConnection.current.createOffer();
    await peerConnection.current.setLocalDescription(offer);

    socket.emit("call-user", { offer, to: remoteUserId });
  };

  useEffect(() => {
    socket.on("call-received", async ({ offer, from }) => {
      setCallActive(true);

      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      peerConnection.current = new RTCPeerConnection({
        iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
      });

      stream.getTracks().forEach((track) => peerConnection.current.addTrack(track, stream));

      peerConnection.current.ontrack = (event) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = event.streams[0];
        }
      };

      peerConnection.current.onicecandidate = (event) => {
        if (event.candidate) {
          socket.emit("ice-candidate", { candidate: event.candidate, to: from });
        }
      };

      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peerConnection.current.createAnswer();
      await peerConnection.current.setLocalDescription(answer);

      socket.emit("answer-call", { answer, to: from });
    });

    socket.on("call-answered", async ({ answer }) => {
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
    });

    socket.on("ice-candidate-received", async ({ candidate }) => {
      if (peerConnection.current) {
        await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
      }
    });

    return () => {
      socket.off("call-received");
      socket.off("call-answered");
      socket.off("ice-candidate-received");
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-lg text-center">
        {isSignedIn ? (
          <>
            <h1 className="text-2xl font-bold">Welcome, {user.fullName} 👋</h1>
            <img
              src={user.imageUrl}
              alt="Profile"
              className="w-20 h-20 rounded-full mx-auto mt-4 shadow-lg"
            />
            <SignOutButton className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition" />

            <h2 className="mt-6 text-xl font-semibold">All Users:</h2>

            {loading ? (
              <p className="text-gray-500 mt-2">Loading users...</p>
            ) : users.length > 0 ? (
              <ul className="mt-4 space-y-3">
                {users.map((u) => (
                  <li
                    key={u.id}
                    className="flex items-center gap-4 bg-gray-100 p-3 rounded-lg shadow-md hover:shadow-lg transition"
                  >
                    <img
                      src={u.imageUrl}
                      alt="User"
                      className="w-12 h-12 rounded-full"
                    />
                    <p className="text-lg font-medium">{u.fullName || "No Name"}</p>
                    <button
                      className="ml-auto bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg transition"
                      onClick={() => startCall(u.id)}
                    >
                      📞 Video Call
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 mt-2">No users found.</p>
            )}
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold">Welcome to VideoChat 🎥</h1>
            <p className="text-gray-600 mt-2">Sign in to start connecting with people.</p>
            <SignInButton className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg transition" />
          </>
        )}
      </div>

      {callActive && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Video Call</h2>
            <video ref={localVideoRef} autoPlay muted className="w-60 h-40 bg-gray-300 rounded-md" />
            <video ref={remoteVideoRef} autoPlay className="w-60 h-40 bg-gray-300 rounded-md mt-4" />
            <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg" onClick={() => setCallActive(false)}>
              End Call
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
