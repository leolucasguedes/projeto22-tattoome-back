import prisma from "../config/db.js";
import { CreateUserData } from "../schemas/authSchema.js";

export async function createUser(user: CreateUserData) {
  await prisma.user.create({ data: user });
}

export async function findByEmail(email: string) {
  return prisma.user.findFirst({ where: { email } });
}

export function findUser(id:number) {
  return prisma.user.findUnique({where:{id}})
}