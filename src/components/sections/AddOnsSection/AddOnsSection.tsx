import { FC } from 'react';

import { Card } from 'components';
import { ICardContent } from 'components/Card/types';
import {
  CardsWrapper,
  SectionTitle,
  StyledSectionWrapper,
} from 'components/sections/ContentSection/styled';
import { ANCHOR_ID } from 'constants/common';

import { CARDS_CONTENT, SECTION_TITLE } from './constants';

const AddOnsSection: FC = () => (
  <StyledSectionWrapper id={ANCHOR_ID.PRECONSTRUCTION_ADDNONS}>
    <SectionTitle>{SECTION_TITLE}</SectionTitle>
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
