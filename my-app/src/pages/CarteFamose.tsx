import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface CardImage {
  image_url: string;
  image_url_small: string;
}

interface Card {
  id: number;
  name: string;
  type: string;
  desc: string;
  atk: number;
  def: number;
  level: number;
  attribute: string;
  card_images: CardImage[];
}

const famousCards = [
  "Blue-Eyes White Dragon",
  "Dark Magician",
  "Red-Eyes Black Dragon",
  "Blue-Eyes Ultimate Dragon",
  "Exodia the Forbidden One",
  "Summoned Skull",
  "Black Luster Soldier",
  "Blue-Eyes Toon Dragon",
  "Dark Magician Girl",
  "Stardust Dragon"
];

export default function About() {
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
        async function fetchTopCards() {
            try {
                const promises = famousCards.map(name =>
                    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(name)}`)
                        .then(res => res.json())
                        .then(data => data.data[0])
                );
                const fetchedCards = await Promise.all(promises);
                setCards(fetchedCards.filter(card => card));
            } catch (error) {
                console.error('Errore nel fetch delle carte:', error);
            }
        }
        fetchTopCards();
    }, []);

    return (
        <div className="list-container"> {/* Riutilizziamo il background scuro coerente */}
            <div id="carte-famose-header">
                <h1>Le Leggende del Duello</h1>
                <p>La classifica delle 10 carte più iconiche della storia di Yu-Gi-Oh.</p>
            </div>

            <div className="famous-cards-grid">
                {cards.map((card, index) => (
                    <Link 
                        key={card.id} 
                        to={`/list/${encodeURIComponent(card.name)}`} 
                        state={{ daLink: true, card: card }} 
                        className="famous-card-item"
                    >
                        <span className="card-rank">#{index + 1}</span>
                        
                        <img 
                            src={card.card_images[0]?.image_url} 
                            alt={card.name} 
                            className="famous-card-img" 
                        />

                        <div className="famous-card-info">
                            <h3>{card.name}</h3>
                            <div className="famous-stats-group">
                                <p><strong>ATK:</strong> {card.atk ?? "N/A"}</p>
                                <p><strong>DEF:</strong> {card.def ?? "N/A"}</p>
                                <p><strong>Livello:</strong> {card.level || "N/A"}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}