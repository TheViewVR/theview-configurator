import { FC } from 'react';

import Card from 'components/Card';
import { ICardContent } from 'components/Card/types';
import { ANCHOR_ID } from 'constants/common';

import { CardsWrapper, SectionTitle, StyledSectionWrapper } from './styled';
import { CARDS_CONTENT, CONTENT_SECTION_TITLE } from './constants';

const ContentSection: FC = () => (
  <StyledSectionWrapper id={ANCHOR_ID.CONTENT_PACKS}>
    <SectionTitle>{CONTENT_SECTION_TITLE}</SectionTitle>
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
