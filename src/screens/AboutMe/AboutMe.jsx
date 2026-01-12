import React from "react";
import "./AboutMe.css";
import photo from "./photo.jpg";

export const AboutMe = () => {
  return (
    <>
      <div id="aboutme" className="aboutme-container">
        <img src={photo} alt="" />
        <div>
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur qui nemo rem voluptatem non pariatur quod vel eaque
            fuga culpa, ut porro. Ullam non magni porro perferendis praesentium
            ipsum dolore.
          </p>
        </div>
      </div>
    </>
  );
};
