interface SearchBarProps {
    onSearch: (text: string) => void; // Funzione che riceve dal padre
}

export default function BarraDiRicerca({ onSearch }: SearchBarProps) {
    return (
        <div className="input-wrapper">
            <input
                id="search-input"
                type="search"
                placeholder="Cerca carta..."
                onChange={(e) => onSearch(e.target.value)} // Manda il testo su
            />
        </div>
    );
}