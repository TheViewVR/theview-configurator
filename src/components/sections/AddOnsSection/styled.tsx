import { styled } from 'styled-components';

import { StyledSectionWrapper } from '../ContentSection/styled';

export const SectionWrapper = styled(StyledSectionWrapper)({
  marginTop: '40px',
  '@media (min-width: 1520px)': {
    width: '70vw',
  },
});
