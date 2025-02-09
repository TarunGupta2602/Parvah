import { clerkClient } from "@clerk/nextjs/server";

export async function GET() {
  try {
    const users = await clerkClient.users.getUserList();
    return Response.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return Response.json([]); // Return empty array to prevent errors
  }
}
