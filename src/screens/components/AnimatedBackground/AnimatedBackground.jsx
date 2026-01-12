import React from "react";
import Keyboard from "./svg/keyboard.svg?react";
import Code from "./svg/code.svg?react";
import JS from "./svg/js.svg?react";
import ReactSVG from "./svg/react.svg?react";
import Git from "./svg/git.svg?react";
import Sql from "./svg/sql.svg?react";
import Html from "./svg/html.svg?react";
import Battery from "./svg/battery.svg?react";
import Time from "./svg/time.svg?react";
import Flask from "./svg/flask.svg?react";
import Paper from "./svg/paper.svg?react";
import Coffee from "./svg/coffee.svg?react";
import Web from "./svg/web.svg?react";
import Home from "./svg/home.svg?react";
import Bike from "./svg/bike.svg?react";
import Weight from "./svg/weight.svg?react";
import Heart from "./svg/heart.svg?react";
import Game from "./svg/game.svg?react";
import Cloud from "./svg/cloud.svg?react";
import Mic from "./svg/mic.svg?react";

import "./AnimatedBackground.css";

export const AnimatedBackground = ({ children }) => {
  let arr = [];
  let quantity = 15;

  for (let i = 0; i < quantity; i++) {
    arr.push(i);
  }

  const layers = arr.map((i) => {
    return (
      <>
        <div key={`row-1-${i}`} className="animated-row">
          <div>
            <Keyboard />
            <Code />
            <JS />
            <ReactSVG />
            <Git />
            <Sql />
            <Html />
            <Battery />
            <Time />
            <Flask />
            <Paper />
            <Coffee />
            <Web />
            <Home />
            <Bike />
            <Weight />
            <Heart />
            <Game />
            <Cloud />
            <Mic />
          </div>
        </div>

        <div key={`row-2-${i}`} className="animated-row">
          <div>
            <Keyboard />
            <Code />
            <JS />
            <ReactSVG />
            <Git />
            <Sql />
            <Html />
            <Battery />
            <Time />
            <Flask />
            <Paper />
            <Coffee />
            <Web />
            <Home />
            <Bike />
            <Weight />
            <Heart />
            <Game />
            <Cloud />
            <Mic />
          </div>
        </div>
      </>
    );
  });

  return (
    <section className="animated-section">
      {layers}
      {children}
    </section>
  );
};
