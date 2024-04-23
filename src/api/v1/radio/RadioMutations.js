import api from "../../config/api";

async function createRadiosender(newRadiosender, newIsDone, newId, newUserId) {
  try {
    const result = await api.post("/radio/create", { newRadiosender, newIsDone, newId, newUserId });
    const profile = result.data.profile;
    return profile;
  } catch (error) {
    console.error("Fehler beim hinzufügen des Radiosender:", error);
    throw error;
  }
};

async function markRadiosender(id, isDone) {
  const result = await api.put("/radio/mark", {
    id: id,
    newIsDone: isDone,
  });

  const radio = result.data.updatedRadioId;

  return radio;
}

async function deleteRadiosender(id) {
  try {
    const result = await api.delete("/radio/delete", { data: { id } });
    const deleteId = result.data.deletedId;
    return deleteId;
  } catch (error) {
    console.error("Fehler beim Löschen des Benutzerprofils:", error);
    throw error;
  }
}

export default { deleteRadiosender,createRadiosender,markRadiosender };
