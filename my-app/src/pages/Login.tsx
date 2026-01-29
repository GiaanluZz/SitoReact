import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { utenti } from "../core/TUtenti";


export default function FormRegistrazione() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const user = utenti.find(u => u.name === nome && u.email === email && u.password === password);
        if (user) {
            localStorage.setItem("loggedUser", user.name);
            navigate("/home");
        } else {
            setError("Credenziali non valide");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-wrapper">
                <form onSubmit={handleSubmit} className="auth-form">
                    <h2 className="auth-title">Login</h2>
                    {error && <p style={{color: 'red'}}>{error}</p>}
                    <input
                        type="text"
                        placeholder="Nome utente"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
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
                    <button type="submit" className="auth-button">Accedi</button>
                </form>
                 <div className="auth-side">
                    <h2>Bentornato nell'App Carte Yu-Gi-Oh</h2>
                    <p>Gestisci le tue carte, visualizza profili e molto altro!</p>
                </div>
            </div>
        </div>
    );
}