// Type for an array of cards
export type TCard = ICard[];

// Interface for a single card object
export interface ICard {
    id: number;
    name: string;
    attribute: string;
    type: string;
    typing: string;
    typings: string;
    archetype: string;
    atk: number;
    def: number;
    level: number;
    image_url: string;
    desc: string;

    // Array of card images (from API)
    card_images: {
        id: number;
        image_url: string;
        image_url_small: string;
        image_url_cropped: string;
    }[];

    // Array of card prices (from API)
    card_prices: {
        cardmarket_price: string;
        tcgplayer_price: string;
        ebay_price: string;
        amazon_price: string;
        coolstuffinc_price: string;
    }[];

    typeline?: string[];
}
