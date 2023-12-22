import {
  TABLE_HEAD_TITLES,
  X_CONTENT_SCROLL,
  Y_CONTENT_SCROLL,
} from './constants';
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
    align: 'right' as const,
    render: renderMoneyDollars,
    width: 52,
  },
  {
    key: TABLE_HEAD_TITLES.HOSTING,
    title: TABLE_HEAD_TITLES.HOSTING,
    dataIndex: 'hosting',
    align: 'right' as const,
    render: renderMoneyDollars,
    width: 48,
  },
  {
    key: TABLE_HEAD_TITLES.QUANTITY,
    title: TABLE_HEAD_TITLES.QUANTITY,
    render: renderActions,
    align: 'center' as const,
    className: 'actions',
    width: 58,
  },
];

export const TABLE_SCROLL_CONFIG = {
  x: X_CONTENT_SCROLL,
  y: Y_CONTENT_SCROLL,
};
