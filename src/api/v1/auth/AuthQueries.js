import api from "../../config/api";

const AuthService = {
  login: async (email, password) => {
    try {
      const result = await api.get("/login", { params: { email, password } });
      const token = result.data.token;
      localStorage.setItem("token", token);
      return token;
    } catch (error) {
      console.error("Fehler beim Einloggen:", error);
      throw error;
    }
  },

};
export default { AuthService };
