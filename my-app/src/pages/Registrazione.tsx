import {useState} from "react";
import { Link, useNavigate } from "react-router-dom";


export default function FormRegistrazione(){

    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault(); //la pagina non viene ricaricata
        console.log(`Registrato ${nome} ${cognome} ${email} ${password}`);
        // Dopo registrazione, vai a login
        navigate("/login");
    };

    return(
        <div className="auth-container">
            <div className="auth-wrapper">
                <div className="auth-side">
                    <h2>Benvenuto nell'App Carte Yu-Gi-Oh</h2>
                    <p>Gestisci le tue carte, visualizza profili e molto altro!</p>
                </div>
                <form onSubmit={handleSubmit} className="auth-form">
                    <h2 className="auth-title">Modulo di Registrazione</h2>
                    <input 
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="auth-input"
                    />
                    <input 
                    type="text"
                    placeholder="Cognome"
                    value={cognome}
                    onChange={(e) => setCognome(e.target.value)}
                    className="auth-input"
                    />
                    <input 
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="auth-input"
                    />
                    <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="auth-input"
                    />
                    <div>
                        <button type="submit" className="auth-button">Invia</button>
                    </div>
                    <p>Sei già registrato?</p>
                    <Link to="/login" state={{ daLink: true }} className="auth-link">Vai al Login</Link>
                </form>
            </div>
        </div>
    );
}