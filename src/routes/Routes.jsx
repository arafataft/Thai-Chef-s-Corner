import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import ErrorPage from "../components/ErrorPage";
import Login from "../pages/Login/Login";

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
                element:<ChefDetails></ChefDetails>,
                loader:()=>fetch('https://b7a10-chef-recipe-hunter-server-side-arafataft-arafataft.vercel.app/')
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
]);

export default router;