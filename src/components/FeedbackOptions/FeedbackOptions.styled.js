import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  border: none;
  outline: none;
  border-radius: 20px;
  padding: ${({ theme }) => `${theme.spacing(2)}`};
  background-color: ${({ theme }) => `${theme.colors.background}`};
  color: ${({ theme }) => `${theme.colors.black}`};
  font-size: ${({ theme }) => `${theme.fontSizes[1]}px`};
  font-weight: 600;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1), 250ms;
  svg {
    margin-right: ${({ theme }) => `${theme.spacing(1)}`};
    width: 25px;
    height: 25px;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1), 250ms;
  }
  :hover {
    background-color: ${({ theme }) => `${theme.colors.hovbutton}`};
    svg {
      transform: scale(1.1);
    }
  }
`;
