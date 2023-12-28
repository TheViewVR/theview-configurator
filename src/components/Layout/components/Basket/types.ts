import { Item } from 'react-use-cart';

export interface IBasket {
  totalHosting: number;
  cartTotal: number;
  items: Item[];
  handleDownloadPdf: (Component: HTMLDivElement) => Promise<void>;
}
