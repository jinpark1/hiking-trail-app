import { fetchTest } from "../lib/data";
import { createTestUser } from "../lib/actions";

export default async function Page() {
  const test = await fetchTest();
  console.log("test--", test);

  return (
    <div>
      {test.map((user, id) => {
        return (
          <div key={id}>
            {user.first_name} {user.last_name}
          </div>
        );
      })}
      <form action={createTestUser}>
        <input type="text" name="first_name" />
        <input type="text" name="last_name" />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}
