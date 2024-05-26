import styled from "styled-components";
import { IoMdCloseCircleOutline as Icon } from "react-icons/io";


export const Container = styled.div``

type ImgModalShow = {
    showmodal: string;
  };

export const IoMdCloseCircleOutline = styled(Icon)`
font-size: 50px;
color: ${({theme}) =>theme.COLORS.GREEN};

`

export const PortfolioModal = styled.div<ImgModalShow>`
  position: fixed;
  display: ${({ showmodal }) => (showmodal == "show" ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
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

export const ImgWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 90vh;
    overflow-y: hidden;
    width: 90%;
    transition: translate 400ms ease-in-out;
    &::-webkit-scrollbar {
  display: none;
}
    @media (min-width: 600px) {
        width: 550px;
        height: 75vh;
        
    }
    @media (min-width: 1000px) {
        width:585px;
        height: 95vh;
    }


`

export const ModalImage = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  transition: translate 500ms ease-in-out;


`;

export const ModalCloseButton = styled.button`
  all: unset;
  position: absolute;

  top: 15px;
  right: 15px;
`;