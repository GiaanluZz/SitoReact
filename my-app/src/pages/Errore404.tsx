import { Link } from "react-router-dom";

export default function Error() {

    return (
        <div>
            <h1>Error 404</h1>
            <h2>Page not found</h2>
            <Link to="/home">
            <button>Torna alla home</button>
            </Link>
            <p>Guarda l'anime nell'attesa che la pagina venga creata</p>
            <Link target="_blank" to="https://www.crunchyroll.com/it/series/G6P8DV7V6/yu-gi-oh?utm_campaign=media_actions&utm_medium=deep_link&utm_source=google">
                <button>Crunchyroll</button>
            </Link>
        </div>
    );
}
