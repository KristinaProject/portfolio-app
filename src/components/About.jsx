import htmlsvg from "../image/html-logo-vector.svg";
import csssvg from "../image/css3-logo-vector.svg";
import javascriptsvg from "../image/javascript-logo-vector.svg";
import reactsvg from "../image/react-logo-vector-1.svg";
import bootstrapsvg from "../image/bootstrap-logo-vector.svg";
import sasspng from "../image/pngegg.png";
import { Trail } from "./Trail";
import { useSpring, animated } from "react-spring";

export function About() {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      mass: 10,
      friction: 200,
      tension: 100,
    },
  });

  return (
    <div className="bg">
      <div className="wrapper about">
        <div className="text">
          <h1>When dreams come true.</h1>
          <animated.div style={fade}>
            <p>
              I got interested in IT several years ago, and as there are many
              strands of IT I decided to start with the front end in December
              2021. This is how I ended up on a course for working people in
              April 2022. I finished a front-end course at CodeAcademy 480 h in
              December. The course was a good start, I got a good foundation and
              was more motivated to keep going in this direction. Now that the
              course is over I am looking my dream job. I think the first job in
              the field grows the employee, I suggest you develop a loyal
              employee and in the future have a colleague who will help you on
              the job. I don't have high requirements for the job. Flexibility
              of working hours is important to me, because I want to combine
              work and family, but I don't like unfinished work. Because of
              covid I've been working from home for more than two years and I've
              realized that it's actually easier to combine work and family, so
              I'd like to continue working from home, but I can come to the
              office several times a week. As for salary, I think it rises with
              competence in the job. Maybe it's you who will offer the dream
              job?
            </p>
          </animated.div>
        </div>
        <div className="tools">
          <h2>What I know</h2>
          <ul>
            <Trail>
              <li>
                <img src={htmlsvg} alt="html logo" className="logo" />
              </li>
              <li>
                <img src={csssvg} alt="css logo" className="logo" />
              </li>
              <li>
                <img
                  src={javascriptsvg}
                  alt="javascript logo"
                  className="logo"
                />
              </li>
              <li>
                <img src={reactsvg} alt="react logo" className="logo" />
              </li>
              <li>
                <img src={bootstrapsvg} alt="bootstrap logo" className="logo" />
              </li>
              <li>
                <img src={sasspng} alt="sass logo" className="logo" />
              </li>
            </Trail>
          </ul>
        </div>
      </div>
    </div>
  );
}
