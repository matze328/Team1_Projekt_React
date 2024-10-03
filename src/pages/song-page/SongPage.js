import styles from "./SongPage.module.css";
import SidebarStart from "../../components/layout/sidebar-start";
import UserContext from "../../components/common/userContext/UserContext";
import { useContext, useEffect, useState } from "react";
import SidebarHome from "../../components/layout/sidebar-home";
import {
    fetchAllArtists,
    fetchAlbumsByArtist,
    fetchSongsByAlbumAndArtist,
} from "../../api/v1/song/SongQueries"; // Importiere die neuen Funktionen
import AudioPlayer from "react-h5-audio-player";

function SongPage() {
    const { user } = useContext(UserContext);
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentSongUrl, setCurrentSongUrl] = useState("");
    const [selectedArtist, setSelectedArtist] = useState(null); // Zustand für den ausgewählten Künstler
    const [selectedAlbum, setSelectedAlbum] = useState(null); // Zustand für das ausgewählte Album

    // Effekt zum Abrufen der Künstler
    useEffect(() => {
        const getArtists = async () => {
            try {
                const fetchedArtists = await fetchAllArtists(); // Hole alle Künstler
                setArtists(fetchedArtists);
            } catch (err) {
                console.error("Fehler beim Abrufen der Künstler:", err.message);
                setError(`Fehler: ${err.message}`);
            } finally {
                setLoading(false); // Ladezustand zurücksetzen
            }
        };

        getArtists();
    }, []);

    // Funktion zum Abrufen der Alben eines bestimmten Künstlers
    const handleArtistClick = async (artist) => {
        try {
            const fetchedAlbums = await fetchAlbumsByArtist(artist); // Hole Alben des ausgewählten Künstlers
            setAlbums(fetchedAlbums);
            setSelectedArtist(artist); // Setze den ausgewählten Künstler
            setSongs([]); // Zurücksetzen der Songs
            setSelectedAlbum(null); // Zurücksetzen des ausgewählten Albums
        } catch (err) {
            console.error("Fehler beim Abrufen der Alben:", err.message);
            setError(`Fehler: ${err.message}`);
        }
    };

    // Funktion zum Abrufen der Songs eines bestimmten Albums eines Künstlers
    const handleAlbumClick = async (album) => {
        try {
            if (selectedArtist) { // Sicherstellen, dass ein Künstler ausgewählt ist
                const fetchedSongs = await fetchSongsByAlbumAndArtist(selectedArtist, album); // Hole Songs des ausgewählten Albums
                setSongs(fetchedSongs);
                setSelectedAlbum(album); // Setze das ausgewählte Album
                setCurrentSongUrl(""); // Zurücksetzen der aktuellen Song-URL
            }
        } catch (err) {
            console.error("Fehler beim Abrufen der Songs:", err.message);
            setError(`Fehler: ${err.message}`);
        }
    };

    // Funktion zum Abspielen eines Songs
    const playSong = (url) => {
        console.log("Versuche abzuspielen:", url);
        setCurrentSongUrl(url); // Setze die URL des aktuellen Songs
    };

    return (
        <>
            {user ? <SidebarHome /> : <SidebarStart />}
            <div className={styles.mainContainer}>
                {loading && <p>Lade Daten...</p>}
                {error && <p>{error}</p>}

                {/* Anzeige der Künstler */}
                {!selectedArtist && !selectedAlbum && (
                    <div>
                        <h2>Künstler</h2>
                        <ul>
                            {artists.map((artist) => (
                                <li key={artist} onClick={() => handleArtistClick(artist)} className={styles.artistItem}>
                                    {artist}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Anzeige der Alben eines bestimmten Künstlers */}
                {selectedArtist && !selectedAlbum && (
                    <div>
                        <h2>Alben von {selectedArtist}</h2>
                        <ul>
                            {albums.map((album) => (
                                <li key={album} onClick={() => handleAlbumClick(album)} className={styles.albumItem}>
                                    {album}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Anzeige der Songs eines bestimmten Albums */}
                {selectedAlbum && (
                    <div>
                        <h2>Songs aus dem Album "{selectedAlbum}" von {selectedArtist}</h2>
                        <ul>
                            {songs.map((song) => (
                                <li key={song.SongID}>
                                    <strong>{song.FileName}</strong> 
                                    {/* OnClick, um den Song im Player abzuspielen */}
                                    <button onClick={() => playSong(song.S3Url)} className={styles.playButton}>
                                        Abspielen
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* Audio Player für den aktuellen Song */}
                        {currentSongUrl && (
                            <AudioPlayer
                                src={currentSongUrl}
                                onPlay={() => console.log("Lied wird abgespielt")}
                                onError={(e) => {
                                    console.error("Fehler beim Abspielen:", e);
                                    alert("Fehler beim Laden des Songs.");
                                }}
                                autoPlay
                                controls
                            />
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

export default SongPage;