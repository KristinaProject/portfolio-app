import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { Main } from "./components/Main";
import { Work } from "./components/Work";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "work",
        element: <Work />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export { router };
