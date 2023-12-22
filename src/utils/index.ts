import {
  EMPTY_STRING_WITH_WHITESPACE,
  MAX_UNFORMATTED_VALUE,
} from 'constants/common';

const REPLACE_PATTERN = /\B(?=(\d{3})+(?!\d))/g;

export const formatNumberWithSpaces = (value: number): number | string =>
  value > MAX_UNFORMATTED_VALUE
    ? value.toString().replace(REPLACE_PATTERN, EMPTY_STRING_WITH_WHITESPACE)
    : value;
