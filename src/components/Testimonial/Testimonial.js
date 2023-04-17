import React from "react";
import quote from "../../assets/svg/quote.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./testimonial.css";

export default function Testimonial() {
  return (
    <>
      <div className="testimonial-carousals">
        <Splide
          options={{
            rewind: true,
            gap: "1rem",
            width: "100%",
            height: "20rem",
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <div className="carousal">
              <img src={quote} alt="" />
              <h4>Title</h4>
              <h6>Position</h6>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="carousal">
              <img src={quote} alt="" />
              <h4>Title</h4>
              <h6>Position</h6>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="carousal">
              <img src={quote} alt="" />
              <h4>Title</h4>
              <h6>Position</h6>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
}
