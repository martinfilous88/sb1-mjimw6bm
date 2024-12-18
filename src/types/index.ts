export interface Game {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
}

export interface CartItem extends Game {
  quantity: number;
}