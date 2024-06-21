import React from "react";
import ReactDOM from "react-dom/client";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const Submit = () => {
  // const [disabled, setDisabled] = useState(!true);
  // useEffect(() => {
  //   if (Date.now() % 2 == 0) setDisabled(!false);
  // }, []);

  return (
    <div className="grid place-items-center">
      <Link
        to={"/form"}
        className="bg-purple-500 capitalize text-white p-2 min-w-36 text-center rounded-sm shadow"
      >
        <button type="submit">
          submit
        </button>
      </Link>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Submit />,
  },
  {
    path: "/form",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
