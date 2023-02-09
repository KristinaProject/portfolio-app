import React from "react";
import { useState } from "react";
import { useSpring, animated, to } from "react-spring";
import { Trail } from "./utils/Trail";

const Hello = ["H", "e", "l", "l", "o"];
const World = ["W", "o", "r", "l", "d", "!"];

function Sqeez({ letter }) {
  const [state, toggle] = useState(false);
  const { x } = useSpring({
    from: { x: !state ? 1 : 0, y: !state ? 1 : 0 },
    to: { x: 1, y: 1 },
    config: { mass: 1, tension: 300, friction: 2, precision: 0.01 },
    reset: state,
  });

  return (
    <animated.div
      onMouseEnter={() => toggle(!state)}
      style={{
        transform: to(
          [
            x.to({
              range: [0, 0.3, 1],
              output: [1, 1.2, 1],
            }),
          ],
          (x) => `scale(${x})`
        ),
      }}
    >
      {letter}
    </animated.div>
  );
}

export function Words() {
  return (
    <div id="words">
      <Trail>
        {Hello.map((letter) => (
          <Sqeez className="letter" key={letter} letter={letter} />
        ))}&nbsp;&nbsp;
        {World.map((letter) => (
          <Sqeez className="letter" key={letter} letter={letter} />
        ))}
      </Trail>
    </div>
  );
}
