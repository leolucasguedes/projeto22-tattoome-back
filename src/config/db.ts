import { PrismaClient } from "@prisma/client";

import AppLog from './../events/AppLog';

const prisma = new PrismaClient();
exec();

export default prisma;

async function exec() {
    try {
      await prisma.$connect();
      AppLog('Server', 'Connected to database');
    } catch (error) {
      AppLog('Error', `Internal error while connecting to database | ${error}`);
    }
  }