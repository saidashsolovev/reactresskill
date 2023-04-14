import App from "../App";
import ListView from "./ListView";
import { useRoutes } from "react-router-dom";

const Router = () => {
  const AppRoutes = [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/List",
      element: <ListView />,
    },
  ];
  let routs = useRoutes(AppRoutes);

  return routs;
};

export default Router;
