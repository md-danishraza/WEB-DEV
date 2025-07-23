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

export const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile("users.json", JSON.stringify(users));
};
export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile("users.json", { encoding: "utf8" });
  const users = result ? JSON.parse(result) : [];
  return users;
};

export const deleteUser = async (prevState: any, formData: FormData) => {
  const id = formData.get("id");
  const users = await fetchUsers();
  const newUsers = users.filter((u) => u.id !== id);
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await writeFile("users.json", JSON.stringify(newUsers));
    revalidatePath("/action");
    return "user deleted successfully...";
  } catch (error) {
    console.log(error);
    return "there was an error...";
  }
};

export const removeUser = async (
  id: string,
  prevState: any,
  formData: FormData
) => {
  console.log(id);
  const users = await fetchUsers();
  const newUsers = users.filter((u) => u.id !== id);
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await writeFile("users.json", JSON.stringify(newUsers));
    revalidatePath("/action");
    return "user deleted successfully...";
  } catch (error) {
    console.log(error);
    return "there was an error...";
  }
};
