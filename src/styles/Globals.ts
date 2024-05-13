import { createGlobalStyle } from "styled-components";

import fonts from "google-fonts";

fonts.add({
  Poppins: ["500", "700"],
  Montserrat: ["500", "700"],
});

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  :root {
  --primary: #6a59ff;
  --white: #ffffff;
  --bg: #f5f5f5;
}

  html {
    scrollbar-width: none;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  body {
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    outline: none;

  }

  p {
    font-size: clamp(.75rem, 3vw, 1.125rem);
    line-height: 20px;
    letter-spacing: 0.005em;
  }

  a,
  a:visited {
    font-family: ${({ theme }) => theme.FONTS[0]};
    color: white;
    text-decoration: none;
  }


  h2 {
    font-family: ${({ theme }) => theme.FONTS[2]};
    font-size: clamp(1.125rem, 5vw, 3.75rem);
  }

  botton, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9)
  }

  li {
    list-style: none;
  }
  
  .container {
  max-width: 124rem;
  padding: 4rem 1rem;
  margin: 0 auto;
  }

  .heading {
    padding: 1rem 0;
    font-size: 3.5rem;
    text-align: center;
  }

  .swiper_container {
    padding: 2rem 0;
    position: relative;
  }

  .swiper-slide {
    width: 20rem;
    height: 25rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    width: 20rem;
    height: 25rem;
    border-radius: 2rem;
    object-fit: cover;
  }

  @media (max-width: 700px) {
    .swiper_container {
      height: 19.5rem;
    }
    .swiper-slide {
      width: 9.5rem !important;
      height: 12.5rem !important;
    }
    .swiper-slide img {
      width: 9.5rem !important;
      height: 12.5rem !important;
    }
  }



  .swiper-slide-shadow-left,
  .swiper-slide-shadow-right {
    display: none;
  }

  .slider-controler {
    position: relative;
    bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    height: 80px;
  }



  .swiper-button-next {
      left: 62% !important;
      transform: translateX(-70%) !important;
    }
    .swiper-button-prev {
      left: 38% !important;
      transform: translateX(-30%) !important;
    }

  @media (max-width: 1050px) {
    .swiper-button-next {
      left: 70% !important;
      transform: translateX(-70%) !important;
    }
    .swiper-button-prev {
      left: 30% !important;
      transform: translateX(-30%) !important;
    }
  }

  @media (max-width: 450px) {
    .swiper-button-next {
      left: 80% !important;
      transform: translateX(-80%) !important;
    }
    .swiper-button-prev {
      left: 20% !important;
      transform: translateX(-20%) !important;
    }
  }




  .slider-arrow {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    left: 42%;
    transform: translateX(-42%);
    filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
  }

  .slider-arrow ion-icon {
    font-size: 2rem;
    color: #222224;
  }

  .slider-arrow::after {
    content: '';
  }

  .swiper-pagination {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem !important;
    margin-top: 25px;
  }

  .swiper-pagination .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    background-color: white;
  }

  .swiper-pagination .swiper-pagination-bullet-active {
    width: 20px;
    height: 20px;
    background: green;
    filter: drop-shadow(0px 0px 10px green);

  }
`;
