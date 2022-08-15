import prisma from "../../src/config/db"
import app from "../../src/app"
import supertest from "supertest"
import * as userFactory from "../factories/userFactory"

beforeAll(async () => {
  const data = {
	name: "admin",
    email: "admin@driven.com",
    password: "12345678",
    confirmPassword: "12345678",
  };
  await supertest(app).post("/signup").send(data);
});

describe("SignUp", () => {
	it("Create user and return status code 201", async () => {
		const response = await supertest(app)
			.post("/signup")
			.send(userFactory.newUser())
		expect(response.status).toBe(201)
	})
	it("Try to create user with some field missing and return 422", async () => {
		const response = await supertest(app)
			.post("/signup")
			.send(userFactory.newUserWithoutFields())
		expect(response.status).toBe(422)
	})
	it("Try create user with already existing email and return 409", async () => {
		const response = await supertest(app)
			.post("/signup")
			.send(userFactory.alreadyRegisteredUser())
		expect(response.status).toBe(409)
	})
})

describe("SignIn", () => {
	it("Sign in with valid credentials and return token and status code 200", async () => {
		const userData = await userFactory.generateUserRegistered()
		const user = {email: userData.email, password: userData.password}
		const response = await supertest(app)
			.post("/signin")
			.send(user)
		expect(response.status).toBe(200)
		expect(response.body.token).toBeDefined()
	})
	it("Sign in with wrong password and return status code 401", async () => {
		const userData = await userFactory.generateUserRegistered()
		const user = {email: userData.email, password: "123456789"}
		const response = await supertest(app)
			.post("/signin")
			.send(user)
		expect(response.status).toBe(401)
	})
	it("Sign in with wrong email and return status code 404", async () => {
		const response = await supertest(app)
			.post("/signin")
			.send(userFactory.wrongEmail())
		expect(response.status).toBe(404)
	})
	it("Sign in with credentials without fields and return status code 422", async () => {
		const response = await supertest(app)
			.post("/signin")
			.send(userFactory.dataWhithoutField())
		expect(response.status).toBe(422)
	})
})
afterAll(async () => {
	await prisma.$executeRaw`TRUNCATE TABLE depositions CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE users CASCADE`
	await prisma.$disconnect();
  });