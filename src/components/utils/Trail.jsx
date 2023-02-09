import React from "react";
import { useTrail, animated, to } from "react-spring";

export function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 10, tension: 1500, friction: 235 },
    opacity: 1,
    x: 1,
    y: 1,

    from: {
      opacity: 0,
      x: 0,
      y: 0,
    },
  });
  return (
    <>
      {trail.map(({ x, y, ...style }, index) => (
        <animated.div
          key={items[index]}
          className="trails-text"
          style={{
            ...style,
            transform: to(
              [
                x.to({ range: [0, 0.9, 1], output: [0, 1.2, 1] }),
                y.to({
                  range: [0, 0.9, 1],
                  output: [0, 0.8, 1],
                }),
              ],
              (x, y) => `scale(${x},${y})`
            ),
          }}
        >
          {items[index]}
        </animated.div>
      ))}
    </>
  );
}