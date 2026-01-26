import { useEffect, useState } from "react";
import type { IPost, TPosts } from "../core/Carte"; // Assicurati che l'estensione .ts non serva nell'import
import { Link } from "react-router-dom";
import SearchBar from "./BarraDiRicerca"; // <--- 1. IMPORTA IL COMPONENTE (Assicurati che il percorso sia giusto)

export default function PostList() {
    // DATI (Tutti i dati scaricati)
    const [posts, setPosts] = useState<TPosts>([]);
    // RICERCA (Quello che scrive l'utente)
    const [searchTerm, setSearchTerm] = useState(""); // <--- 2. NUOVO STATO

    // ERRORI
    const [error, setError] = useState<string | undefined>();
    // LOADING
    const [loading, setLoading] = useState(false);

    async function getPosts() {
        setLoading(true);
        setError(undefined);
        try {
            const res = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=2000-01-01&enddate=2002-08-23&dateregion=tcg');

            if (!res.ok) {
                throw new Error("Errore nel recupero dei post");
            }

            const jsonResponse = await res.json();
            const allCards: TPosts = jsonResponse.data;

            // Filtro hardcoded per prova (come da tuo codice)
            const temp = allCards.slice(0, 242);
            setPosts(temp);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    // 3. LOGICA DI FILTRAGGIO (Avviene in tempo reale)
    // Se searchTerm è vuoto, mostra tutto. Altrimenti filtra.
    const filteredPosts = posts.filter((post) =>
        post.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <h3>Caricamento in corso...</h3>
    if (error) return <h3>Si è verificato un errore: {error}</h3>

    return (
        <div className="list-container">
            <div className="cards-list-header">
                <h1>Archivio delle Carte</h1>
                <p>Collezione ufficiale dal 2000 al 2002</p>

                <div className="cards-search-wrapper">
                    <SearchBar onSearch={(text) => setSearchTerm(text)} />
                </div>
            </div>


            {/*<div id="button-div">
                <button className="list-reload-button" onClick={getPosts}>Ricarica post</button>
            </div>*/}
            {/* Usiamo filteredPosts invece di posts per il controllo lunghezza */}
            {filteredPosts.length === 0 && !loading && <p>Nessuna carta trovata.</p>}

            <div className="div-list">
                <ul>
                    {/* 5. IMPORTANTISSIMO: Mappa su filteredPosts, non su posts */}
                    {
                        filteredPosts.map((post: IPost) => {
                            return (
                                <Link
                                    to={`/list/${encodeURIComponent(post.name)}`}
                                    state={{ daLink: true, card: post }}
                                    key={post.id}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    <div className="card-item">
                                        <h3>{post.name}</h3>
                                        <img
                                            src={post.card_images[0].image_url}
                                            alt={"Idk, It should be a " + post.name + " img"}
                                            style={{ width: '150px' }}
                                        />
                                    </div>
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}