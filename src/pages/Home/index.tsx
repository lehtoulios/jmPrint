import logo from "../../assets/Logo.svg";
import { register } from "swiper/element/bundle";

register();
// @ts-ignore
import useMedia from "../../hooks/useMedia";
import TumbUp from "../../assets/tumbUp.png";
import Excellence from "../../assets/Excellence.png";
import Happy from "../../assets/happy.png";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Mockup from "../../assets/Mockup.svg";
import Instagram from "../../assets/instagram.svg";
import Layer_1 from "../../assets/Layer_1.svg";
import Layer_2 from "../../assets/Layer_2.svg";
import Layer_3 from "../../assets/Layer_3.svg";
import WhatsIcon from "../../assets/WhatsIcon.svg";
import InstaIcon from "../../assets/InstaIcon.svg";
import btnLeft from "../../assets/arrow1.svg";
import Print from "../../assets/Print.svg";
import Design from "../../assets/Design.svg";
import Signage from "../../assets/Signage.svg";
import Copy from "../../assets/Copy.svg";
import btnRight from "../../assets/arrow2.svg";

import * as S from "./styled";
import Button from "../../components/Button";
import { Carrousel } from "../../components/Carrousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-scroll";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { dataImage, cardImage, portfolioImage } from "../../utils/imageArray";
import { SliderModal } from "../../components/SliderModal";

export const Home = () => {
  const desktop = useMedia("(min-width: 750px)");
  const [showNav, setShowNav] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState("");
  const [portfolioIndex, setPortfolioIndex] = useState(0);

  const form = useRef();

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
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

  const handleNavigation = (event: Event) => {
    event.preventDefault();
    setShowNav(false);
  };

  const handleModalOpen = (index: number) => {
    setShowModal("show");
    setPortfolioIndex(index);
  };

  return (
    <S.MainContainer>
      <S.Container>
        <S.NavBar>
          <S.LogoImage src={logo} />
          {desktop ? (
            <S.DeskNavBar>
              <S.AnimatedLink
                to="services"
                spy={true}
                smooth={true}
                onClick={() => handleNavigation(event as Event)}
              >
                <li>Services</li>
              </S.AnimatedLink>
              <S.AnimatedLink
                to="portifolio"
                spy={true}
                smooth={true}
                onClick={() => handleNavigation(event as Event)}
              >
                <li>Portfolio</li>
              </S.AnimatedLink>
              <S.AnimatedLink
                to="about"
                spy={true}
                smooth={true}
                onClick={() => handleNavigation(event as Event)}
              >
                <li>About us</li>
              </S.AnimatedLink>
              <S.AnimatedLink
                to="contact"
                spy={true}
                smooth={true}
                onClick={() => handleNavigation(event as Event)}
              >
                <li>Contact</li>
              </S.AnimatedLink>
            </S.DeskNavBar>
          ) : (
            <S.MenuBtn onClick={() => setShowNav((prev) => !prev)}>
              <S.GiHamburgerMenuImg />
              {showNav && (
                <S.NavContent>
                  <S.NatContentUl>
                    <Link
                      to="services"
                      spy={true}
                      smooth={true}
                      onClick={() => handleNavigation(event as Event)}
                    >
                      <li>Services</li>
                    </Link>
                    <Link
                      to="portifolio"
                      spy={true}
                      smooth={true}
                      onClick={() => handleNavigation(event as Event)}
                    >
                      <li>Portfolio</li>
                    </Link>
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      onClick={() => handleNavigation(event as Event)}
                    >
                      <li>About us</li>
                    </Link>
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      onClick={() => handleNavigation(event as Event)}
                    >
                      <li>Contact</li>
                    </Link>
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
        {/* ########## What we do. ############ */}
        <S.WeDeliverContainer>
          <S.WeDeliverTextContainer>
            <S.WedeliverText>What we do.</S.WedeliverText>
          </S.WeDeliverTextContainer>
       
          <S.WeDeliverImgContainer>
            <S.WeDeliverCardContainer>
              <S.SvgContainer>
                <S.SvgTitle>Print<S.TitleDot>.</S.TitleDot></S.SvgTitle>
                <S.PringSVG src={Print} alt="Print Icon" />
              </S.SvgContainer>
              <S.WeDeliverText>Digital printing, we are able to meet all your needs with printing from business cards, flyers, posters and large format printing.</S.WeDeliverText>
            </S.WeDeliverCardContainer>
            <S.WeDeliverCardContainer>
              <S.SvgContainer>
                <S.SvgTitle>Design<S.TitleDot>.</S.TitleDot></S.SvgTitle>
                <S.PringSVG src={Design} alt="Print Icon" />
              </S.SvgContainer>
              <S.WeDeliverText>Let us create and transform your ideas and bring them to life. Our design team always seeks to present the best for you!</S.WeDeliverText>
            </S.WeDeliverCardContainer>
            <S.WeDeliverCardContainer>
              <S.SvgContainer>
                <S.SvgTitle>Signage<S.TitleDot>.</S.TitleDot></S.SvgTitle>
                <S.PringSVG src={Signage} alt="Print Icon" />
              </S.SvgContainer>
              <S.WeDeliverText>We develop, manufacture and install custom signage, for internal or external use. In addition to developing and installing customization in your vehicle, be it a car or van.</S.WeDeliverText>
            </S.WeDeliverCardContainer>
            <S.WeDeliverCardContainer >
              <S.SvgContainer>
                <S.SvgTitle>Copy<S.TitleDot>.</S.TitleDot></S.SvgTitle>
                <S.PringSVG src={Copy} alt="Print Icon" />
              </S.SvgContainer>
              <S.WeDeliverText>At JM print & Sign we offer copying, laminating and binding services, with fair prices and quality service.</S.WeDeliverText>
            </S.WeDeliverCardContainer>
          </S.WeDeliverImgContainer>
          <S.BotttomContainer>

          <Button
            refLink="https://wa.me/3530874317979"
            text={"Make an order"}
            />
            </S.BotttomContainer>
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
          <S.PortifolioText>Portfolio</S.PortifolioText>
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
                  <S.ImageModalImg onClick={() => handleModalOpen(index)}>
                    <img src={img.image} alt="slide_image" />
                  </S.ImageModalImg>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <SliderModal showModal={showModal} portfolioIndex={portfolioIndex} portfolioImage={portfolioImage} setShowModal={setShowModal} />;
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
              The company was created in 2019 by a Brazilian couple passionate about the graphic world and entrepreneurship, thus creating JM Print & Sign.
              Offers printing, copying, lamination, binding and graphic design and large format printing, business cards, flyers, signs, vehicle graphics, T-shirts, promotional products and much more.
              Located in Gort, today its mission is to offer Quality Service, Printing, Agility and graphic solutions for its customers, from the designer to the printing and installation of their materials.
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
          <p style={{ color: "rgba(255,255,255,0.3)", marginTop: 50 }}>
            Copyright &copy; 2024 Notion Visual
          </p>
        </S.GetInTouchContainer>
      </S.Container>
    </S.MainContainer>
  );
};
