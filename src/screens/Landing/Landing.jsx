import React from "react";
import "./Landing.css";
import { AnimatedBackground, Typewritter } from "../components";

let msgArray = [
  "Junior Developer",
  "Front-end developer",
  "Or!",
  "a Coder",
  " ",
];

export function Landing() {
  return (
    <AnimatedBackground>
      <div className="landing-type">
        <div>¿What am i?</div>
        <Typewritter data={msgArray} />
      </div>
    </AnimatedBackground>
  );
}
