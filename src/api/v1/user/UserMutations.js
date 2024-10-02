import api from "../../config/api";

async function updateUser(userName, vorName, nachName, email, password) {
  try {
    const result = await api.put("/user/update", { userName, vorName, nachName, email, password });
    const updatedProfile = result.data.updatedProfile;
    return updatedProfile;
  } catch (error) {
    console.error("Fehler beim Aktualisieren des Benutzerprofils:", error);
    throw error;
  }
}

async function deleteUser(userId) {
  try {
    const result = await api.delete("/user/delete", { data: { userId } });
    const deletedUserId = result.data.deletedUserId;
    return deletedUserId;
  } catch (error) {
    console.error("Fehler beim Löschen des Benutzerprofils:", error);
    throw error;
  }
}

export default { updateUser, deleteUser };