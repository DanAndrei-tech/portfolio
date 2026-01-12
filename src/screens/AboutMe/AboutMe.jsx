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
            I am a junior web developer about to complete my formal training and
            actively looking for my first professional opportunity in the tech
            industry. I enjoy building practical, well-structured web
            applications and working with modern technologies such as HTML, CSS,
            TypeScript, React, SQL, Git, and PHP. I am motivated, eager to
            learn, and ready to grow as a developer in a real-world team
            environment.
          </p>
        </div>
      </div>
    </>
  );
};
