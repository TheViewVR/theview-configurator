import { ANCHOR_ID } from 'constants/common';

export const MENU_ITEMS = {
  standart: 'Standart package',
  content: 'Content Packs',
  addOns: 'Preconstruction Add-ons',
};

export const ANCHOR_ITEMS = [
  {
    key: ANCHOR_ID.STANDART_PACKAGE,
    href: '#standart-package',
    title: MENU_ITEMS.standart,
  },
  {
    key: ANCHOR_ID.CONTENT_PACKS,
    href: '#content-packs',
    title: MENU_ITEMS.content,
  },
  {
    key: ANCHOR_ID.PRECONSTRUCTION_ADDNONS,
    href: '#preconstruction-addons',
    title: MENU_ITEMS.addOns,
  },
];
