import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import background from "../../assets/BrickBackground.png";
import backgroundJm from "../../assets/jml_brazilian.png";
import vanBackground from "../../assets/vanBranca.png";

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100vw;
  height: 100vh;
  margin: auto 0;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
`;

export const NavBar = styled.nav`
  display: flex;
  width: 100%;
  min-height: 100px;
  padding: 0 40px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  height: 15vw;
  max-height: 190px;
  min-height: 100px;
`;
export const DeskNavBar = styled.ul`
  width: 100%;
  display: flex;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  gap: 50px;
  color: white;
  @media (min-width: 850px) {
    gap: 100px;
  }
`;

export const LogoImage = styled.img`
  width: 7vw;
  aspect-ratio: 1;
  min-width: 50px;
  max-width: 100px;
`;

export const MenuBtn = styled.button`
  all: unset;
  position: relative;
  z-index: 100;
`;

export const GiHamburgerMenuImg = styled(GiHamburgerMenu)`
  width: 50px;
  height: 50px;
  color: ${({ theme }) => theme.COLORS.GREEN};
`;

export const NavContent = styled.div`
  background-color: white;
  width: 100px;
  height: 150px;
  position: absolute;
  left: -100px;
  border-radius: 20px 0 20px 20px;
  @media (min-width: 450px) {
    width: 200px;
    height: 250px;
    left: -200px;
  }
`;

export const NatContentUl = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    color: black;
  }
  a:visited {
    color: #000;
  }
  @media (min-width: 450px) {
    gap: 20px;
    li {
      font-size: 20px;
    }
  }
`;

export const NavText = styled.li`
  font-family: "Montserrat";
  color: white;
  font-size: 1.5rem;
`;

export const CarrocelImgContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 65vw;
  min-height: 210px;
  max-height: 900px;
`;

export const CarrouselTextContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  border-radius: 100px;
  background: rgba(0, 0, 0, 0.4);
`;

export const CarroucelText = styled.p`
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_WHITE};
  letter-spacing: 2px;
  display: inline-block;
`;

export const CarroucelServicesContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SliderText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  bottom: 0;
  text-align: center;
  font-size: 12px;
  border-radius: 0 0 20px 20px;
  height: 40px;
  @media (min-width: 700px) {
    font-size: 22px;
    height: 50px;
  }
`;
export const CarroucelTextBold = styled.span`
  font-weight: 700;
  margin-right: 15px;
`;

export const CarrocelImg = styled.div``;

export const SliderCardImgContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_ABOUT};
  width: 100%;
  padding: 50px 20px 0px;
`;

export const CardServicesText = styled.h3`
  font-size: 24px;
  position: relative;
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_WHITE};
  z-index: 1;
  &:before {
    content: "";
    position: absolute;
    transform: rotate(125deg);
    left: -15px;
    top: 5px;
    width: 40px;
    height: 8px;
    background-color: #17ff00;
    z-index: -1;
  }
  &:after {
    content: "";
    position: absolute;
    transform: rotate(125deg);
    left: -25px;
    top: 5px;
    width: 40px;
    height: 8px;
    background-color: #31b224;
    z-index: -1;
  }
  @media (min-width: 600px) {
    &:after {
      content: "";
      width: 60px;
      left: -10px;
      height: 12px;
      top: 25px;
    }
    &:before {
      content: "";
      top: 25px;
      left: -25px;
      width: 60px;
      height: 12px;
    }
    font-size: 50px;
  }
`;
export const NavTextContainer = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 140px;
  justify-content: center;
  gap: 120px;
  height: 186px;
  color: white;
`;

export const Logo = styled.img`
  margin-left: 160px;
  width: 104px;
`;

export const WeDeliverContainer = styled.div`
  width: 100%;
  display: flex;
  background-image: url(${background});
  background-size: contain;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 15px;
`;

export const WeDeliverImgContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const vanImg = styled.img`
  width: 45vw;
  max-width: 650px;
  min-width: 300px;
  margin-bottom: 90px;
  @media (min-width: 600px) {
    margin-bottom: 0;
  }
`;

export const boxImg = styled.img`
  width: 45vw;
  min-width: 100px;
  max-width: 400px;
  margin-top: 130px;
  margin-left: -70px;
  @media (min-width: 600px) {
    margin-left: 0;
    margin-top: 0;
  }
`;
export const WeDeliverTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
`;
export const WedeliverText = styled.h1`
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_WHITE};
  font-size: 1.5rem;
  display: inline-block;
  height: fit-content;
  text-align: center;
  @media (min-width: 900px) {
    font-size: 80px;
  }
`;
export const WedeliverText2 = styled.h1`
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_WHITE};
  display: inline-block;
  font-size: 1rem;
  text-align: center;
  @media (min-width: 900px) {
    font-size: 60px;
    margin-bottom: 20px;
  }
`;

export const WhyChooseContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.FONT_COLOR_BLACK};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 65vw;
  max-height: 900px;
  min-height: 740px;
  @media (min-width: 900px) {
    background-image: url(${vanBackground});
    background-size: fill;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  }
`;

export const CardCotainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const WhyChooseCardContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55%;
  min-width: 170px;
  max-width: 350px;
`;

export const WhyChooseText = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_WHITE};
  position: relative;
  z-index: 2;
  &:before {
    content: "";
    position: absolute;
    transform: rotate(125deg);
    left: -15px;
    top: 5px;
    width: 40px;
    height: 8px;
    background-color: #17ff00;
    z-index: -1;
  }
  &:after {
    content: "";
    position: absolute;
    transform: rotate(125deg);
    left: -25px;
    top: 5px;
    width: 40px;
    height: 8px;
    background-color: #31b224;
    z-index: -1;
  }
  @media (min-width: 600px) {
    &:after {
      content: "";
      width: 60px;
      left: -10px;
      height: 12px;
      top: 25px;
    }
    &:before {
      content: "";
      top: 25px;
      left: -25px;
      width: 60px;
      height: 12px;
    }
    font-size: 50px;
  }
`;

export const WhyChooseTextContext = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_WHITE};
  margin: 20px 0;
  text-align: center;
`;

export const PortifolioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background-color: ${({ theme }) => theme.COLORS.COLOR_MENU};
`;

export const PortifolioCarrocelImgContainer = styled.div``;

export const PortifolioCarrocelImg = styled.img``;

export const PortifolioText = styled.h3`
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_WHITE};
  position: relative;
  z-index: 2;
  margin-bottom: 18px;
  margin-right: auto;
  font-size: 24px;
  &:before {
    content: "";
    position: absolute;
    transform: rotate(125deg);
    left: -15px;
    top: 5px;
    width: 40px;
    height: 8px;
    background-color: #17ff00;
    z-index: -1;
  }
  &:after {
    content: "";
    position: absolute;
    transform: rotate(125deg);
    left: -25px;
    top: 5px;
    width: 40px;
    height: 8px;
    background-color: #31b224;
    z-index: -1;
  }
  @media (min-width: 600px) {
    &:after {
      content: "";
      width: 60px;
      left: -10px;
      height: 12px;
      top: 25px;
    }
    &:before {
      content: "";
      top: 25px;
      left: -25px;
      width: 60px;
      height: 12px;
    }
    font-size: 50px;
  }
`;

export const AboutContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_ABOUT};
`;

export const AboutImgContainer = styled.div`
  display: flex;
  padding: 10px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundJm});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 58vw;
  min-height: 235px;
  max-height: 800px;

  @media (min-width: 800px) {
    background-attachment: fixed;
  }
`;

export const AboutText = styled.p`
  padding: 20px;
  text-align: justify;
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_WHITE};
  @media (min-width: 800px) {
    font-size: 24px;
    line-height: 40px;
    padding: 60px;
  }
`;

export const AboutTextHeader = styled.h3`
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_WHITE};
  position: relative;
  margin-right: auto;
  margin-bottom: auto;
  padding: 10px 20px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.4);
  font-size: 24px;
  z-index: 2;
  &:before {
    content: "";
    position: absolute;
    transform: rotate(125deg);
    left: -15px;
    top: 5px;
    width: 40px;
    height: 8px;
    background-color: #17ff00;
    z-index: -1;
  }
  &:after {
    content: "";
    position: absolute;
    transform: rotate(125deg);
    left: -25px;
    top: 5px;
    width: 40px;
    height: 8px;
    background-color: #31b224;
    z-index: -1;
  }
  @media (min-width: 600px) {
    &:after {
      content: "";
      width: 60px;
      left: 5px;
      height: 12px;
      top: 30px;
    }
    &:before {
      content: "";
      top: 30px;
      left: -8px;
      width: 60px;
      height: 12px;
    }
    font-size: 50px;
  }
`;

export const FollowContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.GREEN};
`;

export const FollowImg = styled.img`
  width: 50vw;
  max-width: 700px;
  min-width: 290px;
`;

export const FollowImgInsta = styled.img`
  width: 20px;
  height: 20px;
  @media (min-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;

export const FollowBtn = styled.a`
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: rgba(0, 0, 0, 0.4);
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  @media (min-width: 600px) {
    font-size: 30px;
  }
`;

export const GetInTouchContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.FOOTER_BACKGROUND};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 30px;
`;

export const GetInTouchHeaderText = styled.h3`
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_WHITE};
  position: relative;
  z-index: 2;
  font-size: 20px;
  margin: 10px auto 20px 10px;
  font-size: 24px;
  &:before {
    content: "";
    position: absolute;
    transform: rotate(125deg);
    left: -15px;
    top: 5px;
    width: 40px;
    height: 8px;
    background-color: #17ff00;
    z-index: -1;
  }
  &:after {
    content: "";
    position: absolute;
    transform: rotate(125deg);
    left: -25px;
    top: 5px;
    width: 40px;
    height: 8px;
    background-color: #31b224;
    z-index: -1;
  }
  @media (min-width: 600px) {
    &:after {
      content: "";
      width: 60px;
      left: -10px;
      height: 12px;
      top: 25px;
    }
    &:before {
      content: "";
      top: 25px;
      left: -25px;
      width: 60px;
      height: 12px;
    }
    font-size: 50px;
  }
`;

export const GetInTouchCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
  min-width: 230px;
`;
export const GetInTouchCardSVG = styled.img``;
export const GetInTouchCardText = styled.p`
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_WHITE};
  text-align: center;
`;

export const GetInTouchCardLine = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GREEN};
`;

export const GetInTouchText = styled.p`
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_WHITE};
`;
export const GetInTouchForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 40px 0;
  width: 50vw;
  min-width: 300px;
  max-width: 720px;
`;

export const GetInTouchInput = styled.input`
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_WHITE};
  border: none;
  background-color: ${({ theme }) => theme.COLORS.CONTACT_FORM};
  height: 35px;
  width: 100%;
  font-size: 14px;
  padding: 10px;

  @media (min-width: 500px) {
    height: 55px;
    font-size: 20px;
    padding: 20px;
  }
`;
export const GetInTouchTextArea = styled.textarea`
  color: ${({ theme }) => theme.COLORS.FONT_COLOR_WHITE};
  background-color: ${({ theme }) => theme.COLORS.CONTACT_FORM};
  border: none;
  width: 100%;
  height: 160px;
  margin-bottom: 20px;
  font-size: 14px;
  padding: 10px;

  @media (min-width: 500px) {
    height: 215px;
    margin-bottom: 40px;
    font-size: 20px;
    padding: 20px;
  }
`;

export const BtnForm = styled.input`
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
export const SocialContainer = styled.div`
  display: flex;
  gap: 35px;
  margin-top: 20px;
`;
export const SocialBtn = styled.a`
  width: 35px;
  height: 35px;
`;
export const SocialImg = styled.img`
  width: 35px;
  height: 35px;
`;
