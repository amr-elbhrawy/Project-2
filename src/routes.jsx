import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "./Components/MasterLayout/MasterLayout";
import NotFound from "./Components/NotFound/NotFound";
import Cars from "./Components/Cars/Cars";
import CarDetails from "./Components/CarDetails/CarDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "cars/:carId", element: <CarDetails /> },  
    ],
  },
]);

export default routes;
