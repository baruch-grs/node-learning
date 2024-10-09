import { http } from "winston";
import { httpClientPlugin } from "../../src/plugins/http-client.plugin";

describe("Plugin/httpClientPlugin", () => {
  test("httpClientPlugin should return a string", async () => {
    const data = await httpClientPlugin.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: expect.any(Boolean),
    });
  });

  test("httpClientPlugin should have POST, PUT and DELETE methods", () => {
    const postMethod = httpClientPlugin.post;
    const putMethod = httpClientPlugin.put;
    const deleteMethod = httpClientPlugin.delete;

    expect(typeof postMethod).toBe("function");
    expect(typeof putMethod).toBe("function");
    expect(typeof deleteMethod).toBe("function");
  });
});
