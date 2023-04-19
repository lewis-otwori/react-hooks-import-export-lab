import { username, city, image } from "../data/user";

test("username, city, and image are all exported", () => {
  expect ({username}).toEqual({username});
  expect({city}).toEqual({city});
  expect({image}).toEqual({image});
});

export default { username, city, image };
