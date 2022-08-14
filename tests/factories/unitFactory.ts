import { faker } from "@faker-js/faker";
import supertest from "supertest";
import app from "../../src/app.js";

const newUser = () => {
  return {
    name: faker.name,
    email: faker.internet.email(),
    password: "12345678",
  };
};

export { newUser };
