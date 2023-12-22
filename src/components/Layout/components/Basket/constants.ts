import {
  STANDART_SECTION_TEXT,
  STANDART_SUM,
} from 'components/sections/StandartSection/constants';

export const BASKET_TEXT = {
  title: 'Total package',
};

export const INITIAL_BASKET_ITEMS = [
  {
    id: '0',
    title: STANDART_SECTION_TEXT.title,
    price: STANDART_SUM.price,
    totalPrice: STANDART_SUM.price,
    hosting: STANDART_SUM.hosting,
    initialHosting: STANDART_SUM.hosting,
    quantity: 1,
  },
];

export const BASKET_FIELDS = {
  PRODUCT: 'PRODUCT',
  PRICE: 'PRICE',
  HOSTING: 'HOSTING',
  QUANTITY: 'QUANTITY',
};

export const TABLE_HEAD_TITLES = {
  PRODUCT: 'Product',
  PRICE: 'One-time',
  HOSTING: 'Hosting',
  QUANTITY: 'Qty',
};

export const X_CONTENT_SCROLL = 360;
export const Y_CONTENT_SCROLL = 'calc(100vh - 79px - 100px)';

export const INITIAL_BASKET_VALUES = {
  price: STANDART_SUM.price,
  hosting: STANDART_SUM.hosting,
};
