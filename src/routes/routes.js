import { createBrowserRouter } from "react-router-dom";
import SigninPage from "../components/SigninPage";
import HomePage from "../components/HomePage";
import ProfilePage from "../components/ProfilePage";


const routes = createBrowserRouter([

    {
        path:"/",
        element:<SigninPage/>
    },
    {
        path:"/home",
        element:<HomePage/>
    },
    {
        path:"/profile",
        element:<ProfilePage/>
    }


]);

export default routes;

