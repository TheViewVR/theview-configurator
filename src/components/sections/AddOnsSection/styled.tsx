import { styled } from 'styled-components';

import { StyledSectionWrapper } from '../ContentSection/styled';

export const SectionWrapper = styled(StyledSectionWrapper)({
  marginTop: '40px',
  fontFamily: 'Poppins, sans-serif',
  '@media (min-width: 1920px)': {
    marginBottom: '120px',
  },
});
