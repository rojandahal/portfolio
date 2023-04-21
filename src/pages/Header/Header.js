import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./header.css";
import data from "../../assets/json/data.json";
import ContactIcons from "../../components/ContactIcons/ContactIcons";
import myImage from "../../assets/png/me.jpg";

export default function Header() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i>I am</i> a programmer.",
        "Developer",
        "Designer",
        "I am Rojan Dahal",
      ],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="header-container">
        <div className="header-grid">
          <div className="text-container">
            <div className="header-animation">
              <div className="type-animation" ref={el}></div>
            </div>

            <div className="header-text">
              <span>
                As a computer engineering student, I have developed a strong
                skill set in full-stack development using the MERN stack and
                Java. With proficiency in MongoDB, Express, React, and Node.js,
                I am able to create dynamic and interactive web applications.
                Additionally, I have experience in Android app development,
                allowing me to design and build applications for mobile devices.
                Throughout my studies, I have acquired a solid understanding of
                programming languages, software development, and computer
                hardware. This has enabled me to tackle complex projects with
                confidence and precision. With a passion for technology and a
                desire to continuously learn and improve, I am committed to
                staying up-to-date with the latest advancements in the field of
                computer engineering
              </span>

              <div className="contact-icons">
                {data.contacts.map((item, index) => {
                  return (
                    <ContactIcons
                      key={index}
                      id={item.id}
                      link={item.link}
                      icon={item.icon}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="image-container">
            <img src={myImage} alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
}
