import { useState } from "react";
import type { ICard, TCard } from "../core/Carte";
import { Link } from "react-router-dom";
import BarraDiRicerca from "./BarraDiRicerca";
import { useQuery } from "@tanstack/react-query";

// List of all cards page
export default function CardList() {
    // State for search input
    const [searchTerm, setSearchTerm] = useState("");

    // Fetch cards from API using React Query
    const { data, isLoading, error } = useQuery<TCard, Error>({
        queryKey: ["cards", "2000-2002"],
        queryFn: async () => {
            const res = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=2000-01-01&enddate=2002-08-23&dateregion=tcg');
            if (!res.ok) throw new Error("Error fetching cards");
            const jsonResponse = await res.json();
            // Only first 242 cards for demo
            return jsonResponse.data.slice(0, 242);
        }
    });

    // Filter cards by search term
    const filteredCards = (data ?? []).filter((carta: { name: string; }) =>
        carta.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (isLoading) return <h3>Loading...</h3>;
    if (error) return <h3>Error: {error.message}</h3>;

    return (
        <div className="list-container">
            <div className="cards-list-header">
                <h1>Card Archive</h1>
                <p>Official collection from 2000 to 2002</p>

                <div className="cards-search-wrapper">
                    {/* Search bar for filtering cards */}
                    <BarraDiRicerca onSearch={(text) => setSearchTerm(text)} />
                </div>
            </div>

            {/* Show message if no cards found */}
            {filteredCards.length === 0 && !isLoading && <p>No cards found.</p>}

            <div className="div-list">
                <ul>
                    {/* Map over filtered cards and render each as a link */}
                    {
                        filteredCards.map((card: ICard) => {
                            return (
                                <Link
                                    to={`/list/${encodeURIComponent(card.name)}`}
                                    state={{ fromLink: true, card: card }}
                                    key={card.id}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    <div className="card-item">
                                        <h3>{card.name}</h3>
                                        <img
                                            src={card.card_images[0].image_url}
                                            alt={"Card image: " + card.name}
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