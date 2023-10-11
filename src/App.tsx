import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Root from "./routes/Root";
import Projects from "./routes/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
