import App from "../App";
import List from "./ListView";
import { useRoutes } from "react-router-dom";

const Router = () => {
  const AppRoutes = [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/List",
      element: <List />,
    },
  ];
  let routs = useRoutes(AppRoutes);

  return routs;
};

export default Router;
