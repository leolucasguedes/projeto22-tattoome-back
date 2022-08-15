import { jest } from "@jest/globals";
import { portfolioRepository } from "../../src/repositories/portfolioRepository";
import { portfolioService } from "../../src/services/portfolioService";

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
