import prisma from "../../src/config/db";
import app from "../../src/app";
import supertest from "supertest";
import * as testFactory from "../factories/testsFactory";

describe("Depositions", () => {
  it("Try to create deposition with some field missing and return 422", async () => {
    const response = await supertest(app)
      .post("/deposition")
      .send(testFactory.newDepositionMissingFields());
    expect(response.status).toBe(422);
  });
});

describe("Budget", () => {
  it("Create budget and return status code 201", async () => {
    const response = await supertest(app)
      .post("/budget")
      .send(testFactory.newBudget());
    expect(response.status).toBe(201);
  });
  it("Try to create budget with some field missing and return 422", async () => {
    const response = await supertest(app)
      .post("/signup")
      .send(testFactory.newBudgetMissingFields());
    expect(response.status).toBe(422);
  });
});

describe("Portfolio", () => {
  it("Get empty portfolio and return status code 404", async () => {
    const response = await supertest(app).get("/images");
    expect(response.status).toBe(404);
  });
});
afterAll(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE depositions CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE users CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE budgets CASCADE`;
  await prisma.$disconnect();
});
