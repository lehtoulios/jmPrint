import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const imgContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`;

export const GroupContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 0;
  position: relative;
`;

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
  flex-shrink: 0;
  flex-grow: 0;
  transition: translate 500ms ease-in-out;
`;

export const SliderTextConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: visible;
  position: absolute;
  transform: translateY(50%);
  transition: translate 500ms ease-in-out;
`;

export const SliderTextBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px 40px;
  border-radius: 40px;
  transform: translateY(-50%);
  @media (min-width: 800px) {
    border-radius: 60px;
    height: 110px;
  }
`;

export const SliderText = styled.p`
  color: white;
  text-align: center;
  font-size: 24px;
  letter-spacing: 3px;
  @media (min-width: 800px) {
    border-radius: 50%;

    font-size: 80px;
  }
`;

export const NextPrevImg = styled.img`
  margin: 0 15px;
  width: 20px;
  @media (min-width: 800px) {
    width: 50px;
  }
`;

export const BtnPrevNext = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  height: 100%;
  padding: 0 5px;
  position: absolute;
  top: 0;
  @media (min-width: 750px) {
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;

type contadorProps = {
  selecionado: number;
};

export const Contador = styled.button<contadorProps>`
  all: unset;
  background-color: white;
  padding: 3px;
  border-radius: 50%;
  transition: scale 400ms ease-in-out;
  background-color: ${({ selecionado, theme }) =>
    selecionado ? theme.COLORS.GREEN : theme.COLORS.WHITE};
  scale: ${({ selecionado }) => (selecionado ? 1.5 : 1)};
`;
