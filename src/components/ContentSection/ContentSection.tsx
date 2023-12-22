import { FC } from 'react';

import { CardsWrapper, SectionTitle, StyledSectionWrapper } from './styled';
import Card, { ICardContent } from '../Card/Card';
import { CARDS_CONTENT } from './constants';

const ContentSection: FC = () => (
  <StyledSectionWrapper id='content-packs'>
    <SectionTitle>Content Packs</SectionTitle>
    <CardsWrapper>
      {CARDS_CONTENT.map((cardContent: ICardContent) => (
        <Card
          cardContent={cardContent}
          key={cardContent.id}
          isCardView={true}
        />
      ))}
    </CardsWrapper>
  </StyledSectionWrapper>
);

export default ContentSection;
