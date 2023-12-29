import { FC } from 'react';

import { standartSectionImage } from 'assets/images';
import Sum from 'components/Sum';
import { ANCHOR_ID } from 'constants/common';

import {
  ImageSection,
  InfoBadge,
  InfoSection,
  ListItem,
  ListItemTitle,
  ListWrapper,
  SectionTitle,
  SectionWrapper,
  StandartWrapper,
  StyledImage,
} from './styled';
import { LIST_ITEMS, STANDART_SECTION_TEXT, STANDART_SUM } from './constants';

const StandartSection: FC = () => (
  <StandartWrapper id={ANCHOR_ID.STANDART_PACKAGE}>
    <SectionWrapper>
      <ImageSection>
        <SectionTitle>{STANDART_SECTION_TEXT.title}</SectionTitle>
        <StyledImage src={standartSectionImage} alt='standartSectionImage' />
      </ImageSection>
      <InfoSection>
        <ListWrapper>
          {LIST_ITEMS.map((listItem) => (
            <ListItem key={listItem.title}>
              {listItem.image}
              <ListItemTitle>{listItem.title}</ListItemTitle>
            </ListItem>
          ))}
        </ListWrapper>
        <InfoBadge>{STANDART_SECTION_TEXT.badge}</InfoBadge>
        <Sum
          price={STANDART_SUM.price}
          hosting={STANDART_SUM.hosting}
          isCardView={false}
        />
      </InfoSection>
    </SectionWrapper>
  </StandartWrapper>
);

export default StandartSection;
