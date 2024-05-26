import React, { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

import * as S from "./styled";
import arrow1 from "../../assets/arrow1.svg";
import arrow2 from "../../assets/arrow2.svg";

interface PortfolioImage {
    id: string;
    image: string;
  }

interface SliderModalProps {
  showModal: string;
  portfolioIndex: number;
  portfolioImage: PortfolioImage[];
  setShowModal: (value: React.SetStateAction<string>) => void;
}



export const SliderModal: React.FC<SliderModalProps> = ({ showModal, portfolioIndex, portfolioImage, setShowModal }) => {
    const [imageIndex, setImageIndex] = useState<number>(0)
    const [buffer, setBuffer] = useState(false);
    useEffect(() => {
        setImageIndex(portfolioIndex)
    },[portfolioIndex])
    function shoNextImagge() {
        setBuffer(true);
        setInterval(() => {
          setBuffer(false);
        }, 5000);
        setImageIndex((index: any) => {
          if (index === portfolioImage.length - 1) return 0;
          return index + 1;
        });
      }
      function shoPrevImagge() {
        setBuffer(true);
        setInterval(() => {
          setBuffer(false);
        }, 5000);
        setImageIndex((index: any) => {
          if (index === 0) return portfolioImage.length - 1;
          return index - 1;
        });
      }
  return (
    <S.PortfolioModal showmodal={showModal}>
        <S.BtnPrevNext onClick={shoPrevImagge} style={{left: 0}}>
            <S.NextPrevImg src={arrow1} />
        </S.BtnPrevNext>
        <S.BtnPrevNext onClick={shoNextImagge} style={{right: 0}}>
            <S.NextPrevImg src={arrow2} />
        </S.BtnPrevNext>
        <S.ImgWrapper>
        {portfolioImage.map((img) => {
            return(
                <S.ModalImage src={img.image} style={{ translate: `${-100 * imageIndex}%` }}/>
            )
        })}
        </S.ImgWrapper>
      <S.ModalCloseButton onClick={() => setShowModal("")} ><S.IoMdCloseCircleOutline /></S.ModalCloseButton>
    </S.PortfolioModal>
  );
};

