import { jest } from "@jest/globals";
import * as budgetRepository from "../../src/repositories/budgetRepository.js";
import * as budgetService from "../../src/services/budgetService.js";
import * as testsFactory from "./../factories/testsFactory.js";

beforeEach(() => {
  jest.resetAllMocks();
});

describe("Budget service suite", () => {
  it("should create budget", async () => {
    jest
      .spyOn(budgetRepository, "create")
      .mockImplementationOnce((): any => true);

    jest.spyOn(budgetRepository, "create").mockResolvedValueOnce();

    const budgetInfo = testsFactory.newBudget();
    const result = await budgetService.createOneBudget(budgetInfo);
    expect(budgetRepository.create).toBeCalledTimes(1);
  });

  it("should fail create budget", async () => {
    jest
      .spyOn(budgetRepository, "create")
      .mockImplementationOnce((): any => false);

    jest.spyOn(budgetRepository, "create").mockResolvedValueOnce();

    const budgetInfo = testsFactory.newBudget();
    const result = await budgetService.createOneBudget(budgetInfo);
    expect(result).rejects.toEqual({
      message: "Internal server error",
    });
    expect(budgetRepository.create).toBeCalledTimes(1);
  });
});
