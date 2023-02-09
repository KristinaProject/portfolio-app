import { useSpring, animated } from "react-spring";
import { Words } from "./Words";

function Text({ children }) {
  const styles = useSpring({
    from: { x: 0, y: 0 },
    to: { x: 500, y: 420},
    config: {
      mass: 2, tension: 500, friction: 100,
    }
  });

  return <animated.div style={styles}>{children}</animated.div>;
}

export function Main() {
  return (
    <div className="bg">
      <div className="wrapper">
        <Words />
        <Text>
          <div className="text">
            <p>
              I say hello to the world! My name is Kristina Jachimovič. I am
              front end developer. Looking for a job in web development!
            </p>
          </div>
        </Text>
      </div>
    </div>
  );
}
