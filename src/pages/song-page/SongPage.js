import styles from "./SongPage.module.css";
import SidebarStart from "../../components/layout/sidebar-start";
import UserContext from "../../components/common/userContext/UserContext";
import { useContext, useEffect, useState } from "react";
import SidebarHome from "../../components/layout/sidebar-home";
import { fetchAllSong } from "../../api/v1/song/SongQueries";
import AudioPlayer from "react-h5-audio-player";

function SongPage() {
    const { user } = useContext(UserContext);
    const [songs, setSongs] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const getSongs = async () => {
            try {
                const fetchedSongs = await fetchAllSong();
                setSongs(fetchedSongs);
            } catch (err) {
                console.error("Fehler beim Abrufen der Songs:", err.message); // Detaillierte Fehlermeldung
                setError(`Fehler: ${err.message}`); // Setze die Fehlermeldung für die Anzeige
            } finally {
                setLoading(false);
            }
        };
    
        getSongs();
    }, []);

    return (
        <>
            {user ? <SidebarHome /> : <SidebarStart />}
            <div className={styles.mainContainer}>
                {loading && <p>Lade Songs...</p>}
                {error && <p>{error}</p>}
                <ul>
                    {songs.map((song) => (
                         <li key={song.SongID}> {/* Verwende hier das richtige Attribut für den Schlüssel */}
                         <strong>{song.ArtistName}</strong> - {song.AlbumName}: 
                         <a href={song.S3Url} target="_blank" rel="noopener noreferrer"> {song.FileName}</a>
                     </li>
                    ))}
                </ul>
                <AudioPlayer/>
            </div>
          
        </>
    );
}

export default SongPage;
