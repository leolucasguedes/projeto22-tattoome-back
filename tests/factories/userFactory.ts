import { faker } from "@faker-js/faker"
import supertest from "supertest"
import app from "../../src/app"
import { LoginBody } from "../../src/schemas/authSchema";

const newUser = () => {
	return {
		name: "TestName",
		email: faker.internet.email(),
		password: "12345678",
		confirmPassword: "12345678"
	}
}

const newUserWithoutFields = () => {
	return {
		email: faker.internet.email(),
	}
}

const alreadyRegisteredUser = () => {
	return {
		name: "TestName",
		email: "admin@driven.com",
		password: "12345678",
		confirmPassword: "12345678"
	}
}

const wrongPassword = () => {
	return {
		email: "admin@driven.com",
		password: "a123456",
	}
}

const wrongEmail = () => {
	return {
		email: faker.internet.email(),
		password: faker.internet.password(),
	}
}

const dataWhithoutField = () => {
	return {
		email: "admin@driven.com",
	}
}

async function generateUserRegistered() {
    const user ={ 
		name: "TestName",
        email: faker.internet.email(), 
        password: "12345678",
        confirmPassword: "12345678"
    }
    await supertest(app).post("/signup").send(user)
    delete user.confirmPassword
    return user
}

async function generateLogin(user: LoginBody) {
    await supertest(app).post("/signin").send(user)
}

export {
	newUser,
	newUserWithoutFields,
	alreadyRegisteredUser,
	wrongPassword,
	wrongEmail,
	dataWhithoutField,
	generateUserRegistered,
	generateLogin
}