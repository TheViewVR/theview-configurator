import { FC, useRef } from 'react';
import { CartProvider } from 'react-use-cart';
import { Layout as AntLayout } from 'antd';

import Header from 'components/Layout/components/Header';
import StandartSection from 'components/sections/StandartSection';
import ContentSection from 'components/sections/ContentSection';
import AddOnsSection from 'components/sections/AddOnsSection';
import { SCROLLABLE_CONTAINER_ID } from 'constants/common';
import { COLORS } from 'constants/colorPalette';

import {
  StyledContent,
  StyledHeader,
  StyledLayout,
  StyledMainLayout,
} from './styled';
import Basket from './components/Basket';
import { INITIAL_BASKET_ITEMS } from './components/Basket/constants';

const { Sider } = AntLayout;

const Layout: FC = () => {
  const topRef = useRef<HTMLDivElement>(null);

  return (
    <CartProvider defaultItems={INITIAL_BASKET_ITEMS}>
      <StyledMainLayout hasSider>
        <Sider
          width={360}
          style={{
            height: '100vh',
            position: 'fixed',
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 1,
            backgroundColor: COLORS.white,
          }}
        >
          <Basket />
        </Sider>
        <StyledLayout>
          <StyledHeader ref={topRef}>
            <Header />
          </StyledHeader>
          <StyledContent id={SCROLLABLE_CONTAINER_ID}>
            <StandartSection />
            <ContentSection />
            <AddOnsSection />
          </StyledContent>
        </StyledLayout>
      </StyledMainLayout>
    </CartProvider>
  );
};

export default Layout;
