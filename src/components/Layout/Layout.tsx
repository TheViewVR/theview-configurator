import { FC, useRef } from 'react';
import { CartProvider } from 'react-use-cart';
import { Layout as AntLayout } from 'antd';

import Header from 'components/Layout/components/Header/Header';
import StandartSection from 'components/StandartSection/StandartSection';
import ContentSection from 'components/ContentSection/ContentSection';
import AddOnsSection from 'components/AddOnsSection/AddOnsSection';
import { COLORS } from 'constants/colorPalette';

import { StyledContent, StyledLayout, StyledMainLayout } from './styled';
import Basket from './components/Basket/Basket';
import { INITIAL_BASKET_ITEMS } from './components/Basket/constants';

const { Header: AntHeader, Sider } = AntLayout;

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
          <AntHeader
            ref={topRef}
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 0,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              height: '80px',
              padding: '24px 40px 25px 40px',
              background: COLORS.lightBg,
            }}
          >
            <Header />
          </AntHeader>
          <StyledContent id='scrollable'>
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
