import { useState } from "react";
import { Fade } from "./utils/Fade";
import { WorkShow } from "./WorkShow";

const works = [
  {
    id: 1,
    name: "Portfolio",
    description: "This is my portfolio.",
    tools: "react, html, sass, react-spring",
    image:
      "https://cdn.pixabay.com/photo/2023/01/13/15/47/flowers-7716360_960_720.jpg",
    live: "",
    code: "https://github.com/KristinaProject/portfolio-app",
  },
  {
    id: 2,
    name: "Loading...",
    description: "Loading...",
    tools: "",
    image:
      "https://cdn.pixabay.com/photo/2022/11/03/03/05/apples-7566512_960_720.jpg",
    live: '',
    code: '',
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
