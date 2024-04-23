import api from "../../config/api";

async function fetchAllRadiosender() {
  const result = await api.get("/radio/all");

  const radiosender = result.data;

  return radiosender;
}

async function fetchTRadiosenderById(id) {
  const result = await api.get("/radio/byid", { params: { id } });

  const radiosender = result.data.id;

  console.log("Das ist der Radiosender mit der /byid", radiosender);

  return radiosender;
}
async function fetchByUserId(userId) {
  const result = await api.get("/radio/byid", { params: { userId } });

  const user = result.data.userId;

  console.log("Mein user /byid", user);

  return user;
}



export default { fetchAllRadiosender, fetchTRadiosenderById,fetchByUserId };
