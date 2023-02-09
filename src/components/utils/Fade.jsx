import { useSpring, animated } from "react-spring";

export function Fade({ children }) {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      mass: 10,
      friction: 200,
      tension: 100,
    },
  });
  return <animated.div style={fade}>{children}</animated.div>;
}
