import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Allexperience from "../../Pages/AllExperienc/Allexperience";
import AllFresher from "../../Pages/AllFresher/AllFresher";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/allfresher',
                element: <AllFresher></AllFresher>
            },
            {
                path: '/allexperience',
                element: <Allexperience></Allexperience>

            }

        ]
    }


])