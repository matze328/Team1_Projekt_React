import api from "../../config/api";

export async function fetchAllUser() {
  const result = await api.get("/user/all");

  const users = result.data;

  return users;
}

export async function fetchUserById(userId) {
  const result = await api.get("/user/byid", { params: { userId } });

  const reponse = result.data;

  console.log("Mein user /byid", reponse);

  return reponse;
}

export default { fetchAllUser, fetchUserById };
