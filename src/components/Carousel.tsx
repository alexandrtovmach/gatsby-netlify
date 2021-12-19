/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselCard from './CarouselCard';

interface Item {
  title: string;
  text: string;
  icon: string;
}
interface CarouselProps {
  items: Item[];
}

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        width: `49px`,
        height: `49px`,
        borderRadius: `5px`,
        top: 0,
        background: `#13273f`,
      }}
      onClick={onClick}
    />
  );
};
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  console.log(props);
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={className}
      style={{
        ...style,
        width: `49px`,
        height: `49px`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        borderRadius: `5px`,
        top: 0,
        left: `90%`,
        background: `#13273f`,
      }}
      onClick={onClick}
    />
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
          cardImgSrc={item.icon}
        />
      ))}
    </Slider>
  );
};

export default Carousel;
