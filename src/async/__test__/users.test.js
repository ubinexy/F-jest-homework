import mockAxios from "axios";
import getUsers from "../users";

jest.mock("axios");

beforeEach(() => {
  mockAxios.mockClear();
});

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    mockAxios.get.mockImplementation(() =>
      Promise.resolve({
        data: { name: "anna" },
      })
    );

    const data = getUsers();

    await expect(data).resolves.toEqual({ name: "anna" });
  });
});
