import { jest } from "@jest/globals";
import * as portfolioRepository from "../../src/repositories/portfolioRepository.js";
import * as portfolioService from "../../src/services/portfolioService.js";

beforeEach(() => {
  jest.resetAllMocks();
});

describe("Portfolio service suite", () => {
  it("should get portolio", async () => {
    jest
      .spyOn(portfolioRepository, "find")
      .mockImplementationOnce((): any => true);

    jest.spyOn(portfolioRepository, "find").mockResolvedValueOnce();

    const result = await portfolioService.getImages();
    expect(portfolioRepository.find).toBeCalledTimes(1);
  });

  it("should fail get", async () => {
    jest
      .spyOn(portfolioRepository, "find")
      .mockImplementationOnce((): any => false);

    jest.spyOn(portfolioRepository, "find").mockResolvedValueOnce();

    const result = await portfolioService.getImages();
    expect(result).rejects.toEqual({
      message: "Internal server error",
    });
    expect(portfolioRepository.find).toBeCalledTimes(1);
  });
});
