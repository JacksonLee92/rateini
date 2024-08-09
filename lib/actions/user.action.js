import { connectToDB } from "../mongoose";
import User from "@/lib/models/user.model";

export async function createUser(user) {
  try {
    await connectToDB();
    const newUser = await User.create(user);
  } catch (error) {
              console.log(error)
  }
}
