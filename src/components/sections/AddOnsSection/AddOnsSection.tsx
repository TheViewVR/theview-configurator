import { FC } from 'react';

import { ICardContent } from 'components/Card/types';
import Card from 'components/Card';

import {
  CardsWrapper,
  SectionTitle,
} from 'components/sections/ContentSection/styled';
import { ANCHOR_ID } from 'constants/common';

import { CARDS_CONTENT, SECTION_TITLE } from './constants';
import { SectionWrapper } from './styled';

const AddOnsSection: FC = () => (
  <SectionWrapper id={ANCHOR_ID.PRECONSTRUCTION_ADDNONS}>
    <SectionTitle>{SECTION_TITLE}</SectionTitle>
    <CardsWrapper>
      {CARDS_CONTENT.map((cardContent: ICardContent) => (
        <Card
          key={cardContent?.id}
          cardContent={cardContent}
          isCardView={true}
        />
      ))}
    </CardsWrapper>
  </SectionWrapper>
);

export default AddOnsSection;
