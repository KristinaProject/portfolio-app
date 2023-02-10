import { useState } from "react";
import { Fade } from "./utils/Fade";

const works = [
  {
    id: 1,
    name: "Portfolio",
    description: "This is my portfolio.",
    tools: "react, html, sass, react-spring",
    image:
      "https://cdn.pixabay.com/photo/2023/01/13/15/47/flowers-7716360_960_720.jpg",
  },
  {
    id: 2,
    name: "example",
    description: "example description",
    tools: "example tools",
    image:
      "https://cdn.pixabay.com/photo/2022/11/03/03/05/apples-7566512_960_720.jpg",
  },
];

export function Work() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg">
      <div className="wrapper about">
        <Fade>
          <div className="cards-wrapper">
            {works.map((item) => (
              <div
                className="card"
                key={item.id}
                onMouseOver={() => setOpen(true)}
              >
                <div className="card__image">
                  <img src={item.image} alt={item.image} />
                </div>
                <div className="card__text">
                  <h2 className="card__text-title">{item.name}</h2>
                  {open ? (
                    <div>
                      <p className="card__text-description">
                        {item.description}
                      </p>
                      <p className="card__text-tools">{item.tools}</p>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
}
