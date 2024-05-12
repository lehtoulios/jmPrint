import styled from "styled-components";

type imgProp = {
  img: string;
};

export const Container = styled.div<imgProp>`
  display: flex;
  margin: 0 5px;
  flex-direction: column;
  justify-content: end;
  background-image: url(${({ img }) => img});
  background-size: cover;
  width: 100%;
  width: 30%;
  height: 40vw;
  min-width: 150px;
  max-width: 290px;
  min-height: 200px;
  max-height: 420px;
`;

export const ImageContainer = styled.div`
  width: 100%;
`;

export const CardImg = styled.img`
  width: 100%;
`;

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 40px;
  background: ${({ theme }) => theme.COLORS.GREEN};
`;
