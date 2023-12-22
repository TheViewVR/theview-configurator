import { TABLE_HEAD_TITLES, X_CONTENT_SCROLL } from './constants';
import { renderActions, renderMoneyDollars, renderProduct } from './renders';

export const COLUMNS_CONFIG = [
  {
    key: TABLE_HEAD_TITLES.PRODUCT,
    title: TABLE_HEAD_TITLES.PRODUCT,
    render: renderProduct,
    dataIndex: 'title',
    width: 120,
  },
  {
    key: TABLE_HEAD_TITLES.PRICE,
    title: TABLE_HEAD_TITLES.PRICE,
    dataIndex: 'totalPrice',
    render: renderMoneyDollars,
    width: 58,
  },
  {
    key: TABLE_HEAD_TITLES.HOSTING,
    title: TABLE_HEAD_TITLES.HOSTING,
    dataIndex: 'hosting',
    render: renderMoneyDollars,
    width: 58,
  },
  {
    key: TABLE_HEAD_TITLES.QUANTITY,
    title: TABLE_HEAD_TITLES.QUANTITY,
    render: renderActions,
    className: 'actions',
    width: 58,
  },
];

export const TABLE_SCROLL_CONFIG = {
  x: X_CONTENT_SCROLL,
  y: 450,
};
