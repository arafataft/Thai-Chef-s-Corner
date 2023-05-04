import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import ErrorPage from "../components/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/chefDetails/:id',
                element:<PrivateRoute><ChefDetails/></PrivateRoute>,
                loader:()=>fetch('https://b7a10-chef-recipe-hunter-server-side-arafataft-arafataft.vercel.app/')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }

        ]
    }
]);

export default router;