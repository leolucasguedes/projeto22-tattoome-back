import { faker } from "@faker-js/faker"
import supertest from "supertest"
import app from "../../src/app.js"

const newUser = () => {
	return {
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
		email: "admin@driven.com",
		password: "12345678",
		confirmPassword: "12345678"
	}
}

const alreadyRegisteredData = () => {
	return {
		email: "admin@driven.com",
		password: "123456",
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
        email: faker.internet.email(), 
        password: "12345678",
        confirmPassword: "12345678"
    }
    await supertest(app).post("/signup").send(user)
    delete user.confirmPassword
    return user
}

export {
	newUser,
	newUserWithoutFields,
	alreadyRegisteredUser,
	alreadyRegisteredData,
	wrongPassword,
	wrongEmail,
	dataWhithoutField,
	generateUserRegistered
}