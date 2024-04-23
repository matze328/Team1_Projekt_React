import api from "../../config/api";

async function fetchCreateUser(newUserName, newVorName, newNachName, newEmail, newPassword) {
  try {
    const result = await api.post("/signup", { newUserName, newVorName, newNachName, newEmail, newPassword });
    const profile = result.data.profile;
    return profile;
  } catch (error) {
    console.error("Fehler beim Registrieren:", error);
    throw error;
  }
};

async function fetchLogout() {
  try {
    await api.delete("/logout");
    localStorage.removeItem("token");
  } catch (error) {
    console.error("Fehler beim Abmelden:", error);
    throw error;
  }
}


export default { fetchCreateUser,fetchLogout};
