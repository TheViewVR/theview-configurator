import { FC } from 'react';

import { standartSectionImage } from 'assets/images';
import Sum from 'components/Sum';

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
} from './styled';
import { LIST_ITEMS, STANDART_SECTION_TEXT, STANDART_SUM } from './constants';

const StandartSection: FC = () => (
  <StandartWrapper id='standart-package'>
    <SectionWrapper>
      <ImageSection>
        <SectionTitle>{STANDART_SECTION_TEXT.title}</SectionTitle>
        <img src={standartSectionImage} alt='standartSectionImage' />
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
