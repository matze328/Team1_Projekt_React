import api from "../../config/api";

async function fetchlogin(email, password)  {
    try {
      const result = await api.get("/login", { params: { email, password } });
      const token = result.data.token;
      localStorage.setItem("token", token);
      return token;
    } catch (error) {
      console.error("Fehler beim Einloggen:", error);
      throw error;
    }
  };

export default { fetchlogin };
