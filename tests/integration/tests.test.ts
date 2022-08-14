import prisma from "../../src/config/db.js";
import app from "../../src/app.js";
import supertest from "supertest";
import * as testFactory from "../factories/testsFactory.js";

describe("Depositions", () => {
  it("Create deposition and return status code 201", async () => {
    const response = await supertest(app)
      .post("/deposition")
      .send(testFactory.newDeposition());
    expect(response.status).toBe(201);
  });
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
  it("Get portfolio and return status code 200", async () => {
    const response = await supertest(app).get("/images");
    expect(response.status).toBe(200);
  });
});
afterAll(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE depositions`;
  await prisma.$executeRaw`TRUNCATE TABLE budgets`;
  await prisma.$disconnect();
});
