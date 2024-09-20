import api from "../../config/api";

export async function fetchAllSong() {
  const result = await api.get("/song/all");

  const songs = result.data;

  return songs;
}

export async function fetchBySongId() {
  const result = await api.get("/song/songid");

  const reponse = result.data;

  console.log("Mein Song By ID:", reponse);

  return reponse;
}

export default { fetchAllSong, fetchBySongId };
