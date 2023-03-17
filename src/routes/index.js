import { Routes, Route } from "react-router-dom";
// import Footer from "../component/Facility/GetInTouch";
import Footer from "../component/footer/Footer";
import Index from "../component/footer/Index";
import Header from "../component/navbar/Navbar";
import { privateRoutes } from "./routesData";

const Routing = () => {
    return (
        <>
       {/* ================routing===================  */}

            <Header/>
            <Routes>
                {
                 privateRoutes.map((route, index) => (
                     <Route
                         key={index}
                         path={route.path}
                         element={route.element}>
                        </Route>
                    ))
                   }
            </Routes>
            {/* <Footer/> */}
            <Index/>
        </>
    );
};

export default Routing;