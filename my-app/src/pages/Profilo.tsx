import { useParams, useNavigate } from "react-router-dom";

export function Profilo(){
    const {nome} = useParams<{nome: string}>();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("loggedUser");
        navigate("/");
    };

    return (
        <div>
            <h2>Profilo di {nome}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}