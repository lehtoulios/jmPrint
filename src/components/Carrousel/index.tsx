import { useState } from "react";
import arrow1 from "../../assets/arrow1.svg";
import arrow2 from "../../assets/arrow2.svg";

import * as S from "./styled";

type ImageSlidreProps = {
  dataImage: {
    id: string;
    image: string;
    textbold: string;
    text: string;
  }[];
};

export const Carrousel = ({ dataImage }: ImageSlidreProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  function shoNextImagge() {
    setImageIndex((index: any) => {
      if (index === dataImage.length - 1) return 0;
      return index + 1;
    });
  }
  function shoPrevImagge() {
    setImageIndex((index: any) => {
      if (index === 0) return dataImage.length - 1;
      return index - 1;
    });
  }

  return (
    <S.Container>
      <S.imgContainer>
        {dataImage.map((url, index) => {
          return (
            <S.GroupContainer key={index.toString()}>
              <S.Img
                key={url.id}
                src={url.image}
                style={{ translate: `${-100 * imageIndex}%` }}
              />
              <S.SliderTextConatiner
                style={{ translate: `${-100 * imageIndex}%` }}
              >
                <S.SliderTextBackground>
                  <S.SliderText>
                    {url.textbold} <strong>{url.text}</strong>
                  </S.SliderText>
                </S.SliderTextBackground>
              </S.SliderTextConatiner>
            </S.GroupContainer>
          );
        })}
      </S.imgContainer>
      <S.BtnPrevNext onClick={shoPrevImagge}>
        <S.NextPrevImg src={arrow1} />
      </S.BtnPrevNext>
      <S.BtnPrevNext onClick={shoNextImagge} style={{ right: 0 }}>
        <S.NextPrevImg src={arrow2} />
      </S.BtnPrevNext>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".35rem",
        }}
      >
        {dataImage.map((_, index) => {
          let selecionado;
          if (index == imageIndex) {
            selecionado = 1;
          } else {
            selecionado = 0;
          }
          return (
            <S.Contador
              key={index.toString()}
              // @ts-ignore
              selecionado={selecionado}
              onClick={() => setImageIndex(index)}
            ></S.Contador>
          );
        })}
      </div>
    </S.Container>
  );
};
