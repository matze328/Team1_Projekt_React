import api from "../../config/api";

async function fetchAllUser() {
  const result = await api.get("/user/all");

  const users = result.data;

  return users;
}

async function fetchUserById(userId) {
  const result = await api.get("/user/byid", { params: { userId } });

  const user = result.data.userId;

  console.log("Mein user /byid", user);

  return user;
}

export default { fetchAllUser, fetchUserById };
