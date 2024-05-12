import * as S from "./styled";

export const Cards = ({ image, text }: { image: string; text: string }) => {
  return (
    <S.Container img={image}>
      {/* <S.CardImg src={image} /> */}
      <S.CardTextContainer>
        <p>{text}</p>
      </S.CardTextContainer>
    </S.Container>
  );
};
