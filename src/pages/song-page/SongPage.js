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
    const [currentSongUrl, setCurrentSongUrl] = useState(""); // Zustand für das aktuelle Lied

    useEffect(() => {
        const getSongs = async () => {
            try {
                const fetchedSongs = await fetchAllSong();
                setSongs(fetchedSongs);
            } catch (err) {
                console.error("Fehler beim Abrufen der Songs:", err.message);
                setError(`Fehler: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };
    
        getSongs();
    }, []);

    // Funktion, um die MP3-URL im Player zu ändern
    const playSong = (url) => {
        setCurrentSongUrl(url);
    };

    return (
        <>
            {user ? <SidebarHome /> : <SidebarStart />}
            <div className={styles.mainContainer}>
                {loading && <p>Lade Songs...</p>}
                {error && <p>{error}</p>}
                <ul>
                    {songs.map((song) => (
                        <li key={song.SongID}>
                            <strong>{song.ArtistName}</strong> - {song.AlbumName}: 
                            {/* OnClick, um den Song im Player abzuspielen */}
                            <button onClick={() => playSong(song.S3Url)} className={styles.playButton}>
                                {song.FileName}
                            </button>
                        </li>
                    ))}
                </ul>
                {/* Audio Player, der die dynamische URL abspielt */}
                {currentSongUrl && (
                    <AudioPlayer
                        src={currentSongUrl}
                        onPlay={() => console.log("Lied wird abgespielt")}
                        autoPlay
                        controls
                    />
                )}
            </div>
        </>
    );
}

export default SongPage;
