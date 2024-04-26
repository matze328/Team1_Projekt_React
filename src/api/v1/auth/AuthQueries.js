import api from "../../config/api";

async function loginUser(email, password) {
  try {
    const result = await api.get("/auth/login", {
      params: { email, password },
    });
    const data = result.data;

    return data;
  } catch (error) {
    console.error("Fehler beim Einloggen:", error);
    throw error;
  }
}

export default { loginUser };
