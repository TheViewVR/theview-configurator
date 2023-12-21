import { FC } from 'react';

import {
  CardsWrapper,
  StyledSectionWrapper,
} from 'components/ContentSection/styled';
import { SectionTitle } from 'components/StandartSection/styled';

import Card, { ICardContent } from '../Card/Card';
import { CARDS_CONTENT } from './constants';

const AddOnsSection: FC = () => (
  <StyledSectionWrapper id='preconstruction-addons'>
    <SectionTitle>Preconstruction Add-ons</SectionTitle>
    <CardsWrapper>
      {CARDS_CONTENT.map((cardContent: ICardContent) => (
        <Card
          key={cardContent.id}
          cardContent={cardContent}
          isCardView={true}
        />
      ))}
    </CardsWrapper>
  </StyledSectionWrapper>
);

export default AddOnsSection;
