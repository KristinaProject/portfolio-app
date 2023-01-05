import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { About } from "./components/About";
import { Error } from "./components/Error";
import { Main } from "./components/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: 'about',
        element: <About />
      }
    ],
  },
]);

export { router };
