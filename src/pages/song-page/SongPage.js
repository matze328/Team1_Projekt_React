import styles from "./SongPage.module.css";
import SidebarStart from "../../components/layout/sidebar-start";
import UserContext from "../../components/common/userContext/UserContext";
import { useContext, useEffect, useState } from "react";
import SidebarHome from "../../components/layout/sidebar-home";
import { fetchAllSong } from "../../api/v1/song/SongQueries";


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
                console.error("Fehler beim Abrufen der Songs:", err);
                setError("Fehler beim Abrufen der Songs");
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
                        <li key={song.id}>{song.title}</li> // Ersetze song.id und song.title durch die tatsächlichen Attribute deiner Song-Daten
                    ))}
                </ul>
            </div>
        </>
    );
}

export default SongPage;
