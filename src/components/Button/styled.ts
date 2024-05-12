import styled from "styled-components";

export const Container = styled.a`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_WHITE};
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px ${({ theme }) => theme.COLORS.GREEN};
  @media (min-width: 800px) {
    font-size: 30px;
    padding: 20px 40px;
  }
`;

export const BtnContainer = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_WHITE};
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px ${({ theme }) => theme.COLORS.GREEN};
  @media (min-width: 800px) {
    font-size: 30px;
    padding: 20px 40px;
  }
`;
