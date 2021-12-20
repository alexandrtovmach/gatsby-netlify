import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import CarouselCard from './CarouselCard';

const NextArrow = styled.button`
  position: absolute;
  top: 0%;
  left: 95%;
  padding: 0.1rem 1rem 0.2rem 1rem;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 4px 30px rgba(129, 129, 165, 0.35);
  color: black;
  font-size: 40px;
  border: none;
  cursor: pointer;
  transition: 300ms;
  z-index: 5;
  &:hover {
    background-color: #13273f;
    color: white;
  }
`;

const PrevArrow = styled(NextArrow)`
  top: 0;
  left: 90%;
  transition: 300ms;
  &:hover {
    background-color: #13273f;
    color: white;
  }
`;

interface Item {
  title: string;
  text: string;
  image: string;
}
interface CarouselProps {
  items: Item[];
}

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return <NextArrow onClick={onClick}>&rsaquo;</NextArrow>;
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return <PrevArrow onClick={onClick}>&lsaquo;</PrevArrow>;
};

const Carousel: React.FunctionComponent<CarouselProps> = ({ items }) => {
  const settings = {
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      {items.map((item) => (
        <CarouselCard
          title={item.title}
          text={item.text}
          cardImgSrc={item.image}
        />
      ))}
    </Slider>
  );
};

export default Carousel;
