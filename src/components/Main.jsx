import { useSpring, animated } from "react-spring";

export function Main() {
  const anim = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: {duration: 1500}
  });
  return (
    <animated.div style={anim} id="main">
      <div ></div>
    </animated.div>
  );
}
