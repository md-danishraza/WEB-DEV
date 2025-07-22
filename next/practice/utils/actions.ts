"use server";
// async fs
import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (prevState: any, formData: FormData) => {
  // current state of the form
  console.log(prevState);
  const data = Object.fromEntries(formData.entries());

  const newUser: User = {
    id: Date.now().toString(),
    firstName: data.firstName as string,
    lastName: data.lastName as string,
  };

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await saveUser(newUser);
    revalidatePath("/action");
    return "user created successfully...";
  } catch (error) {
    console.log(error);
    return "there was an error...";
  }
};

const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile("users.json", JSON.stringify(users));
};
export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile("users.json", { encoding: "utf8" });
  const users = result ? JSON.parse(result) : [];
  return users;
};
