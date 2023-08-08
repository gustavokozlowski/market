// import { useState } from "react";
import { useState, useEffect } from "react";
import dataSlider from "../../utils/data-slider";
import { SliderContainer, SliderContent, SliderImg } from "./styles";

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 3000);
  }, [nextSlide, slideIndex]);

  return (
    <SliderContainer>
      {dataSlider.map((obj) => {
        return (
          <SliderContent key={obj.id}>
            <SliderImg src={`/slide-img/slides=slide${slideIndex}.png`} />
          </SliderContent>
        );
      })}
    </SliderContainer>
  );
};
