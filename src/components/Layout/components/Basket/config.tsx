import {
  BASKET_FIELDS,
  TABLE_HEAD_TITLES,
  X_CONTENT_SCROLL,
  Y_CONTENT_SCROLL,
} from './constants';
import { renderQuantity, renderMoneyDollars, renderProduct } from './renders';

export const COLUMNS_CONFIG = [
  {
    key: TABLE_HEAD_TITLES.PRODUCT,
    title: TABLE_HEAD_TITLES.PRODUCT,
    render: renderProduct,
    dataIndex: BASKET_FIELDS.TITLE,
    width: 120,
  },
  {
    key: TABLE_HEAD_TITLES.PRICE,
    title: TABLE_HEAD_TITLES.PRICE,
    dataIndex: BASKET_FIELDS.PRICE,
    align: 'right' as const,
    render: renderMoneyDollars,
    width: 52,
  },
  {
    key: TABLE_HEAD_TITLES.HOSTING,
    title: TABLE_HEAD_TITLES.HOSTING,
    dataIndex: BASKET_FIELDS.HOSTING,
    align: 'right' as const,
    render: renderMoneyDollars,
    width: 48,
  },
  {
    key: TABLE_HEAD_TITLES.QUANTITY,
    title: TABLE_HEAD_TITLES.QUANTITY,
    render: renderQuantity,
    align: 'center' as const,
    width: 58,
  },
];

export const TABLE_SCROLL_CONFIG = {
  x: X_CONTENT_SCROLL,
  y: Y_CONTENT_SCROLL,
};
