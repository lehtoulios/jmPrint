import logo from "../../assets/Logo.svg";
import { register } from "swiper/element/bundle";

register();
// @ts-ignore
import useMedia from "../../hooks/useMedia";
import Caixas from "../../assets/Caixas.png";
import TumbUp from "../../assets/tumbUp.png";
import Excellence from "../../assets/Excellence.png";
import Happy from "../../assets/happy.png";
import DeliveryVan from "../../assets/car.svg";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Mockup from "../../assets/Mockup.svg";
import Instagram from "../../assets/instagram.svg";
import Layer_1 from "../../assets/Layer_1.svg";
import Layer_2 from "../../assets/Layer_2.svg";
import Layer_3 from "../../assets/Layer_3.svg";
import WhatsIcon from "../../assets/WhatsIcon.svg";
import InstaIcon from "../../assets/InstaIcon.svg";
import btnLeft from "../../assets/arrow1.svg";
import btnRight from "../../assets/arrow2.svg";

import * as S from "./styled";
import Button from "../../components/Button";
import { Carrousel } from "../../components/Carrousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { dataImage, cardImage, portfolioImage } from "../../utils/imageArray";

export const Home = () => {
  const desktop = useMedia("(min-width: 750px)");
  const [showNav, setSwoNav] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    emailjs
      // @ts-ignore
      .sendForm("service_2a3dtuo", "template_oz0qyo5", form.current, {
        publicKey: "xMTI5c9ER8TZMPXHD",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <S.MainContainer>
      <S.Container>
        <S.NavBar>
          <S.LogoImage src={logo} />
          {desktop ? (
            <S.DeskNavBar>
              <a href="#services">
                <li>Services</li>
              </a>
              <a href="#portifolio">
                <li>Portfolio</li>
              </a>
              <a href="#about">
                <li>About us</li>
              </a>
              <a href="#contatct">
                <li>Contact</li>
              </a>
            </S.DeskNavBar>
          ) : (
            <S.MenuBtn onClick={() => setSwoNav((prev) => !prev)}>
              <S.GiHamburgerMenuImg />
              {showNav && (
                <S.NavContent>
                  <S.NatContentUl>
                    <a href="#services">
                      <li>Services</li>
                    </a>
                    <a href="#portifolio">
                      <li>Portfolio</li>
                    </a>
                    <a href="#about">
                      <li>About us</li>
                    </a>
                    <a href="#contatct">
                      <li>Contact</li>
                    </a>
                  </S.NatContentUl>
                </S.NavContent>
              )}
            </S.MenuBtn>
          )}
        </S.NavBar>

        {/* ########## Image Carroucel ############ */}
        <S.CarrocelImgContainer>
          <Carrousel dataImage={dataImage} />
        </S.CarrocelImgContainer>
        {/* ########## Services ############ */}
        <S.SliderCardImgContainer id="services">
          <S.CardServicesText>Services</S.CardServicesText>
          <S.CarroucelServicesContainer>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              {cardImage.map((img, index) => (
                <SwiperSlide key={index.toString()}>
                  <img src={img.image} alt="slide_image" />
                  <S.SliderText>{img.text}</S.SliderText>
                </SwiperSlide>
              ))}

              <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                  <img src={btnLeft} />
                </div>
                <div className="swiper-button-next slider-arrow">
                  <img src={btnRight} />
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </S.CarroucelServicesContainer>
        </S.SliderCardImgContainer>
        {/* ########## We Deliver ############ */}
        <S.WeDeliverContainer>
          <S.WeDeliverTextContainer>
            <S.WedeliverText>We Deliver</S.WedeliverText>
            <S.WedeliverText2>to all EUROPE</S.WedeliverText2>
          </S.WeDeliverTextContainer>
          <S.WeDeliverImgContainer>
            <S.vanImg src={DeliveryVan} />
            <S.boxImg src={Caixas} />
          </S.WeDeliverImgContainer>
          <Button
            refLink="https://wa.me/3530874317979"
            text={"Make an order"}
          />
        </S.WeDeliverContainer>
        {/* ########## Why to choose us? ############ */}
        <S.WhyChooseContainer>
          <S.WhyChooseText>Why to choose us?</S.WhyChooseText>
          <S.CardCotainer>
            <S.WhyChooseCardContainer>
              <img src={Happy} />
              <S.WhyChooseTextContext>
                Our mission is to be faithfully committed to the quality of
                graphic printing, as we know that only by delivering a highly
                professional service will we be able to meet the increasingly
                demanding demands of our customers.
              </S.WhyChooseTextContext>
            </S.WhyChooseCardContainer>
            <S.WhyChooseCardContainer>
              <img src={TumbUp} />
              <S.WhyChooseTextContext>
                Through a highly qualified team, combined with a very modern
                graphics park, we are able to serve our customers quickly.
              </S.WhyChooseTextContext>
            </S.WhyChooseCardContainer>
            <S.WhyChooseCardContainer>
              <img src={Excellence} />
              <S.WhyChooseTextContext>
                We value excellence in service, as we believe in long-term
                relationships. ​
              </S.WhyChooseTextContext>
            </S.WhyChooseCardContainer>
          </S.CardCotainer>
        </S.WhyChooseContainer>
        {/* ########## Portfolio ############ */}
        <S.PortifolioContainer id="portifolio">
          <S.PortifolioText>Portifolio</S.PortifolioText>
          <div style={{ width: "100%" }}>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[EffectCoverflow, Navigation]}
              className="swiper_container"
            >
              {portfolioImage.map((img, index) => (
                <SwiperSlide key={index.toString()}>
                  <img src={img.image} alt="slide_image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </S.PortifolioContainer>
        {/* ########## About us ############ */}
        <S.AboutContainer id="about">
          <S.AboutImgContainer>
            <S.AboutTextHeader>About Us</S.AboutTextHeader>
            <Button refLink="https://wa.me/3530874317979" text={"Contact us"} />
          </S.AboutImgContainer>
          <div style={{ width: "100%" }}>
            <S.AboutText>
              For those who ask who are the faces behind JM Print & Sign, here
              we are, we are a Brazilian company, which has been in the market
              for 5 years and focused entirely on the graphics sector for 2
              years, always seeking to improve and bring quality to our
              materials.
            </S.AboutText>
            <S.AboutText>
              For those who ask who are the faces behind JM Print & Sign, here
              we are, we are a Brazilian company, which has been in the market
              for 5 years and focused entirely on the graphics sector for 2
              years, always seeking to improve and bring quality to our
              materials.
            </S.AboutText>
          </div>
        </S.AboutContainer>
        {/* ########## Follow us ############ */}
        <S.FollowContainer>
          <S.FollowImg src={Mockup} />
          <S.FollowBtn
            href="https://www.instagram.com/jmprintesign/"
            target="_blank"
          >
            <S.FollowImgInsta src={Instagram} width={20} height={20} />
            Follow us
          </S.FollowBtn>
        </S.FollowContainer>
        {/* ########## Get in touch ############ */}
        <S.GetInTouchContainer id="contact">
          <S.GetInTouchHeaderText>Get in touch</S.GetInTouchHeaderText>
          <S.GetInTouchCardContainer>
            <S.GetInTouchCardSVG src={Layer_3} />
            <S.GetInTouchCardText>Phone</S.GetInTouchCardText>
            <S.GetInTouchCardText>+353 (87) 431 7979</S.GetInTouchCardText>
            <S.GetInTouchCardLine />
          </S.GetInTouchCardContainer>
          <S.GetInTouchCardContainer>
            <S.GetInTouchCardSVG src={Layer_1} />
            <S.GetInTouchCardText>
              Montana house, Bridge Street - Gort
            </S.GetInTouchCardText>
            <S.GetInTouchCardText>co. Galway</S.GetInTouchCardText>
            <S.GetInTouchCardText>H91F6W6</S.GetInTouchCardText>
            <S.GetInTouchCardLine />
          </S.GetInTouchCardContainer>
          <S.GetInTouchCardContainer style={{ marginBottom: 50 }}>
            <S.GetInTouchCardSVG src={Layer_2} />
            <S.GetInTouchCardText>Email</S.GetInTouchCardText>
            <S.GetInTouchCardText>jmprintesign@gmail.com</S.GetInTouchCardText>
            <S.GetInTouchCardLine />
          </S.GetInTouchCardContainer>
          <S.GetInTouchText>If you got any questions</S.GetInTouchText>
          <S.GetInTouchText>
            Please do not hesitate to send us a message
          </S.GetInTouchText>
          {/* EmailJs was used limit 200 emails if needed you can subscribe to get more */}
          {/* @ts-ignore */}
          <S.GetInTouchForm onSubmit={sendEmail} ref={form}>
            <S.GetInTouchInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              name="to_name"
            />
            <S.GetInTouchInput
              value={email}
              placeholder="Email"
              name="from_name"
              onChange={(e) => setEmail(e.target.value)}
            />
            <S.GetInTouchInput
              value={phone}
              placeholder="Phone"
              name="from_cell"
              onChange={(e) => setPhone(e.target.value)}
            />
            <S.GetInTouchTextArea
              value={message}
              placeholder="Message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            />
            <S.BtnForm type="submit" value="Send" />
          </S.GetInTouchForm>
          <S.GetInTouchCardLine />
          <S.SocialContainer>
            <S.SocialBtn href="https://wa.me/3530874317979" target="_blanck">
              <S.SocialImg src={WhatsIcon} />
            </S.SocialBtn>
            <S.SocialBtn
              href="https://www.instagram.com/jmprintesign/"
              target="_blanck"
            >
              <S.SocialImg src={InstaIcon} />
            </S.SocialBtn>
          </S.SocialContainer>
        </S.GetInTouchContainer>
      </S.Container>
    </S.MainContainer>
  );
};
