import linkedin from "../image/linkedin-logo.png";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Fade } from "./utils/Fade";

export function Contact() {
  return (
    <div className="bg">
      <div className="wrapper cont">
        <Fade>
          <h1>You can contact me:</h1>
          <ul>
            <li>
              <div className="img">
                <img src={linkedin} alt="linkedin logo" className="img" />
              </div>
              <a
                href="www.linkedin.com/in/kristina-jachimovič-a683b3237"
                className="text-span"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <span className="img">
                <BsTelephone />
              </span>
              <span className="text-span">+37064529169</span>
            </li>
            <li>
              <span className="img">
                <AiOutlineMail />
              </span>
              <span className="text-span">kristtule@gmail.com</span>
            </li>
          </ul>
        </Fade>
      </div>
    </div>
  );
}
