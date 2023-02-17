import { useState } from "react";
import { Fade } from "./utils/Fade";
import { WorkShow } from "./WorkShow";
import picture from "../image/diego-ph-fIq0tET6llw-unsplash.jpg";
import app from "../image/Portfolio-App.png";

const works = [
  {
    id: 1,
    name: "Portfolio",
    description: "This is my portfolio.",
    tools: "react, html, sass, react-spring",
    image: app,
    code: "https://github.com/KristinaProject/portfolio-app",
  },
  {
    id: 2,
    name: "Loading...",
    description: "Loading...",
    image: picture,
  },
];

export function Work() {
  const [open, setOpen] = useState(false);
  const [workItem, setWorkItem] = useState("");

  function showModal(id) {
    setOpen(true);
    const finded = works.find((item) => item.id === id);
    setWorkItem(finded);
  }

  return (
    <div className="bg">
      <div className="wrapper">
        <Fade>
          <div id="work-text">
            <p>
              My first project is a portfolio. It is my first self-work. I have
              other project ideas that I will take on to add to my portfolio.
              Small works and task can be found on my&nbsp;
            </p>
            <a href={"https://github.com/KristinaProject"}>GitHub</a>
          </div>
          <div className="cards-wrapper">
            {works.map((item) => (
              <div
                className="card"
                key={item.id}
                onClick={() => showModal(item.id)}
              >
                <div className="card__image">
                  <img src={item.image} alt={item.image} />
                </div>
                <div className="card__text">
                  <h2 className="card__text-title">{item.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
      {open ? (
        <WorkShow setOpen={setOpen} item={workItem} setWorkItem={setWorkItem} />
      ) : (
        <></>
      )}
    </div>
  );
}
