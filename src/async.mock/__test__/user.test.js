import axios from "axios";
import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    axios.post.mockResolvedValue({ data: "success" });
    const result = register("user", "passwd");
    await expect(axios.post).toHaveBeenCalledTimes(1);
    await expect(result).resolves.toEqual("success");
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockReturnValue(false);
    const result = register("user", "passwd");
    await expect(result).rejects.toThrow("wrong username or password");
  });
});
