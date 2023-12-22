import { Table } from 'antd';
import { styled } from 'styled-components';

import { COLORS } from 'constants/colorPalette';

export const BasketWrapper = styled('div')({
  backgroundColor: 'white',
  height: '100vh',
  position: 'fixed',
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 1,
});

export const BasketTitleWrapper = styled('div')({
  height: '79px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const BasketTitle = styled('p')({
  fontWeight: 600,
  fontSize: '12px',
  textTransform: 'uppercase',
});

export const StyledTable = styled(Table)({
  maxWidth: '360px',
  '& .ant-table-cell::before': {
    display: 'none',
  },
  '& .ant-table-thead': {
    height: '16px',
    padding: '12px 12px 12px 24px',
  },
  '& .ant-table-thead>tr>th': {
    padding: '4px 0px',
  },
  '& .ant-table-thead>tr>th:first-child': {
    paddingLeft: '24px',
  },
  '& .ant-table-tbody>tr>td': {
    padding: '4px 0px',
    height: '28px',
    borderBottom: '1px dashed #DCE1EB',
  },
  '& .ant-table-tbody>tr>td:first-child': {
    paddingLeft: '24px',
  },
  '& .ant-table-tbody > tr:hover > td': {
    background: `${COLORS.lightBg} !important`,
  },
});

export const SumWrapper = styled('div')({
  position: 'absolute',
  bottom: 0,
  right: 0,
  borderTop: '1px solid #DCE1EB',
  width: '100%',
  height: '36px',
  padding: '32px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
});

export const TableText = styled('p')({
  fontFamily: 'Poppins, sans-serif',
  margin: 0,
  color: 'rgba(0, 0, 0, 0.50)',
  fontSize: '11px',
});

export const TableProduct = styled(TableText)({
  color: 'rgba(0, 0, 0, 0.9)',
});
