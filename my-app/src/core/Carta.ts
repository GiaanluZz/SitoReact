export type TPosts = IPost[];

export interface IPost {
    id: number; //dovrei mettere qualcos'altro ma lo farò dopo
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

    card_images:{
        id: number;
        image_url: string;
        image_url_small: string;
        image_url_cropped: string;
    }[]; //viene dichiarato come array di oggetti

    card_prices:{
        cardmarket_price: string;
        tcgplayer_price: string;
        ebay_price: string;
        amazon_price: string;
        coolstuffinc_price: string;
    }[]; //Sono array per una scelta dei dev dell'API

   typeline?: string[];

}