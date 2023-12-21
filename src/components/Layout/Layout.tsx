import { FC } from 'react';
import { CartProvider } from 'react-use-cart';

import Header from 'components/Layout/components/Header/Header';
import StandartSection from 'components/StandartSection/StandartSection';
import ContentSection from 'components/ContentSection/ContentSection';
import AddOnsSection from 'components/AddOnsSection/AddOnsSection';

import { StyledContent, StyledLayout, StyledMainLayout } from './styled';
import Basket from './components/Basket/Basket';
import { INITIAL_BASKET_ITEMS } from './components/Basket/constants';

const Layout: FC = () => (
  <CartProvider defaultItems={INITIAL_BASKET_ITEMS}>
    <StyledMainLayout>
      <StyledLayout>
        <Header />
        <StyledContent>
          <StandartSection />
          <ContentSection />
          <AddOnsSection />
        </StyledContent>
      </StyledLayout>
    </StyledMainLayout>
    <Basket />
  </CartProvider>
);

export default Layout;
