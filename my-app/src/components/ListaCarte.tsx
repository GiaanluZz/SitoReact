export interface CardImage {
  image_url: string;
  image_url_small: string;
}

export interface Card {
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

export interface ApiResponse {
  data: Card[];
}

