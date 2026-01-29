import type { ICard } from "../core/Carte";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

// Card detail page
export default function CardDetail() {
    // Get card name from URL params
    const { name } = useParams<{ name: string }>();
    // Get card data from navigation state (if available)
    const location = useLocation();

    // State for card data and loading
    const [card, setCard] = useState<ICard | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // If card data is passed via navigation, use it
        if (location.state?.card) {
            setCard(location.state.card);
            setLoading(false);
            return;
        }

        // Otherwise, fetch card data from API
        async function fetchCard() {
            try {
                const res = await fetch(
                    `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(name || "")}`
                );
                const data = await res.json();
                setCard(data.data?.[0] ?? null);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchCard();
    }, [name, location.state]);

    if (loading) return <h2>Loading...</h2>;
    if (!card) return <h2>Card not found</h2>;

    // Check if card is a monster (not spell/trap)
    const isMonster = !["Spell Card", "Trap Card"].includes(card.type);

    return (
        <div className="card-container">
            <div className="card-detail">
                {/* Card image */}
                <img src={card.card_images[0].image_url} alt={card.name} />

                <div className="card-info">
                    <h2>{card.name}</h2>

                    <div className="card-stats">
                        <div className="card-stat">Type: {card.type}</div>

                        {/* Show monster stats if applicable */}
                        {isMonster && card.attribute && (
                            <div className="card-stat">Attribute: {card.attribute}</div>
                        )}

                        {isMonster && card.level && (
                            <div className="card-stat">Level: {card.level}</div>
                        )}

                        {isMonster && card.atk !== undefined && card.atk !== -1 && (
                            <div className="card-stat">ATK: {card.atk}</div>
                        )}

                        {isMonster && card.def !== undefined && card.def !== -1 && (
                            <div className="card-stat">DEF: {card.def}</div>
                        )}

                        {/* Show typeline if present */}
                        {card.typeline && (
                            <div className="card-stat">
                                {card.typeline.join(" / ")}
                            </div>
                        )}
                    </div>

                    {/* Card description */}
                    <div className="card-desc">
                        {card.desc}
                    </div>
                </div>
            </div>
        </div>
    );
}
