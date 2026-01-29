import { Link} from "react-router-dom";

export default function Home() {
    return (
            <div className="home-page-wrapper">
            <div className="home-container">
            <h1 className="home-title">
                Benvenuto su Yu-Gi-Oh Card Explorer!
            </h1>
            <div className="home-content">
                <img 
                    src="https://images.ygoprodeck.com/images/cards/46986414.jpg" 
                    alt="Dark Magician" 
                    className="home-image"
                />
                <div className="home-description-container">
                   
                    <p className="home-description">
                        Scopri le carte rilasciate dal 2000 al 2002, registrati per personalizzare la tua esperienza e salva i tuoi duelisti preferiti.
                    </p>
                    
                    <div className="home-buttons">
                        <Link 
                            to="/list" 
                            className="home-button"
                        >
                            Esplora le Carte
                        </Link>
                        <a 
                            href="https://img.konami.com/yugioh/worldchampionship/2025/data/tournamentpolicy-tcg.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="home-button secondary"
                        >
                           Esplora il regolamento
                        </a>
                        <Link 
                            to="/about" 
                            className="home-button"
                        >
                            Carte più famose
                        </Link>
                        <a 
                            href="https://www.konami.com/yugioh/masterduel/eu/it/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="home-button secondary"
                        >
                           Scarica il gioco ufficiale
                        </a>
                    </div>
                </div>
                <img 
                    src="https://images.ygoprodeck.com/images/cards/89631139.jpg" 
                    alt="Blue-Eyes White Dragon" 
                    className="home-image"
                />
            </div>
            <footer className="home-footer">
                <hr />
                <p>&copy; 2024 Yu-Gi-Oh Card Explorer. Tutti i diritti riservati.</p>
                <p>Seguimi su social media!</p>
                <div className="home-social-links">
                    <a href="https://www.facebook.com/profile.php?id=61559053678687" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
                    </a>
                    <a href="https://x.com/GiaanluZzZ" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="X (Twitter)" />
                    </a>
                    <a href="https://www.instagram.com/gianluz_vivaldi/" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
                    </a>
                </div>
            </footer>
        </div> 
        </div>
    );
}