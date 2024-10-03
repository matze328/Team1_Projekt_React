import api from "../../config/api";

// Funktion zum Abrufen aller Songs
export async function fetchAllSong() {
    const result = await api.get("/song/all");
    const songs = result.data;
    return songs;
}

// Funktion zum Abrufen eines Songs anhand der SongID
export async function fetchBySongId(songId) {
    const result = await api.get(`/song/songid/${songId}`);
    const response = result.data;
    console.log("Mein Song By ID:", response);
    return response;
}

// Funktion zum Abrufen aller Künstler
export async function fetchAllArtists() {
    const result = await api.get("/song/artists");
    const artists = result.data;
    return artists;
}

// Funktion zum Abrufen aller Alben eines bestimmten Künstlers
export async function fetchAlbumsByArtist(artist) {
    const result = await api.get(`/song/albums/${artist}`);
    const albums = result.data;
    return albums;
}

// Funktion zum Abrufen aller Songs eines bestimmten Albums eines Künstlers
export async function fetchSongsByAlbumAndArtist(artist, album) {
    const result = await api.get(`/song/songs/${artist}/${album}`);
    const songs = result.data;
    return songs;
}

export default {
    fetchAllSong,
    fetchBySongId,
    fetchAllArtists,
    fetchAlbumsByArtist,
    fetchSongsByAlbumAndArtist,
};