import { jest } from "@jest/globals";
import { authRepository } from "../../src/repositories/authRepository";
import { authService } from "../../src/services/authService";
import * as userFactory from "./../factories/userFactory";

beforeEach(() => {
  jest.resetAllMocks();
});

describe("Auth service suite", () => {
  it("should create user", async () => {
    jest
      .spyOn(authRepository, "findByEmail")
      .mockImplementationOnce((): any => false);

    jest.spyOn(authRepository, "create").mockResolvedValueOnce();

    const userInfo = userFactory.newUser();
    const {
      name,
      email,
      password,
    }: { name: string; email: string; password: string } = userInfo;
    const userData = { name, email, password };
    const result = await authService.createUser(userData);
    expect(authRepository.findByEmail).toBeCalledTimes(1);
    expect(authRepository.create).toBeCalledTimes(1);
  });

  it("should fail cause already registered user", async () => {
    jest
      .spyOn(authRepository, "findByEmail")
      .mockImplementationOnce((): any => true);

    jest.spyOn(authRepository, "create").mockResolvedValueOnce();

    const userInfo = userFactory.newUser();
    const {
      name,
      email,
      password,
    }: { name: string; email: string; password: string } = userInfo;
    const userData = { name, email, password };
    const result = await authService.createUser(userData);
    expect(result).rejects.toEqual({
      message: "Email alrealdy registered",
      detail: "Ensure to provide a valid new email",
    });
    expect(authRepository.findByEmail).toBeCalledTimes(1);
    expect(authRepository.create).not.toBeCalled();
  });

  it("should login the user", async () => {
    jest
      .spyOn(authRepository, "findByEmail")
      .mockImplementationOnce((id): any => false);

    const loginUser = userFactory.wrongEmail();

    const result = authService.loginUser(loginUser);
    expect(authRepository.findByEmail).toBeCalledTimes(1);
  });

  it("should fail login cause user doesn't exist", async () => {
    jest
      .spyOn(authRepository, "findByEmail")
      .mockImplementationOnce((id): any => true);

    const loginUser = userFactory.wrongEmail();

    const result = authService.loginUser(loginUser);
    expect(result).rejects.toEqual({
      message: "Email not registered",
      detail: "Ensure to provide a registered email",
    });
    expect(authRepository.findByEmail).toBeCalledTimes(1);
  });
});
