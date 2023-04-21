import React from "react";
import quote from "../../assets/svg/quote.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./testimonial.css";
import data from "../../assets/json/data.json";

export default function Testimonial() {
  return (
    <>
      <div className="testimonial-carousals">
        <Splide
          options={{
            rewind: true,
            drag: true,
            gap: "1rem",
            width: "90%",
            height: "100%",
          }}
          aria-label="My Favorite Images"
        >
          {data.testimonial.map((item, index) => {
            return (
              <SplideSlide key={index}>
                <div className="carousal">
                  <img src={quote} alt="" />
                  <div className="testimonial-text">
                    <span>" {item.testimonial} "</span>
                    <div className="carousal-image">
                      <img
                        src={require(`../../assets/png/${item.icon}`)}
                        alt=""
                        srcset=""
                      />
                    </div>
                    <h4>{item.name}</h4>
                    <h6>{item.position}</h6>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
}
