import About from "../pages/About/About";

import Facility from "../pages/Facility/Facility";
import Home from "../pages/home/Home";
import Room from "../pages/room/Room";

// ================rout data===================  //

export const privateRoutes = [
  
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/about",
        element:<About />,
    },
    {
        path: "/room",
        element:<Room />,
    },
    {
        path: "/facility",
        element:<Facility />,
    },
]

