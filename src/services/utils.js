const API_URL = "https://jsonplaceholder.typicode.com";

export async function getAllUsers() {
  try {
    const response = await fetch(`${API_URL}/users`);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export function deleteUser(users, id) {
  let array = users.filter((user) => user.id !== id);
  return array;
}
