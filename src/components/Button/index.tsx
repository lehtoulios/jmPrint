import * as S from "./styled";

type ButtonProps = {
  text: string;
  refLink?: string;
  noLink?: boolean;
  // Define any additional props here
};

const Button = ({ refLink, text, noLink = true, ...rest }: ButtonProps) => {
  return (
    <>
      {noLink ? (
        <S.Container href={refLink} target="_blank" {...rest}>
          {text}
        </S.Container>
      ) : (
        <S.BtnContainer {...rest}>{text}</S.BtnContainer>
      )}
    </>
  );
};

export default Button;
