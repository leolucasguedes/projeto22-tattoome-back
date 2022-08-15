import { jest } from "@jest/globals";
import { depositionRepository } from "../../src/repositories/depositionRepository";
import { depositionService } from "../../src/services/depositionService";
import * as testsFactory from "./../factories/testsFactory";

beforeEach(() => {
  jest.resetAllMocks();
});

describe("Deposition service suite", () => {
  it("should create deposition", async () => {
    jest
      .spyOn(depositionRepository, "create")
      .mockImplementationOnce((): any => true);

    jest.spyOn(depositionRepository, "create").mockResolvedValueOnce();

    const depositionInfo = testsFactory.newDeposition();
    const depositionData = { ...depositionInfo, userId: 1 };
    const result = await depositionService.createOneTestimonial(depositionData);
    expect(depositionRepository.create).toBeCalledTimes(1);
  });

  it("should fail create deposition", async () => {
    jest
      .spyOn(depositionRepository, "create")
      .mockImplementationOnce((): any => false);

    jest.spyOn(depositionRepository, "create").mockResolvedValueOnce();

    const depositionInfo = testsFactory.newDeposition();
    const depositionData = { ...depositionInfo, userId: 1 };
    const result = await depositionService.createOneTestimonial(depositionData);
    expect(result).rejects.toEqual({
      message: "Internal server error",
    });
    expect(depositionRepository.create).toBeCalledTimes(1);
  });
});
