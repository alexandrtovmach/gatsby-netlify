/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import CarouselCard from './CarouselCard';

const NextArrow = styled.div`
  position: absolute;
  top: 0%;
  left: 95%;
  padding: 0.2rem 1.1rem;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 0px 21px -4px rgba(34, 60, 80, 0.2);
  color: black;
  font-size: 40px;
  cursor: pointer;
  transition: 300ms;
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
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <PrevArrow onClick={onClick}>&lsaquo;</PrevArrow>
  );
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
