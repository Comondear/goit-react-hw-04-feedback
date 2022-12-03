import styled from 'styled-components';

export const SectionStyled = styled.section`
  padding-top: ${({ pt, theme }) => (pt ? pt + 'px' : `${theme.spacing(2)}`)};
  padding-bottom: ${({ pb, theme }) =>
    pb ? pb + 'px' : `${theme.spacing(2)}`};
`;

export const Title = styled.h2`
  font-family: 'Franklin Gothic Medium', Arial, sans-serif;
  color: ${({ theme }) => `${theme.colors.black}`};
  margin-bottom: ${({ theme }) => `${theme.spacing(3)}`};
`;
