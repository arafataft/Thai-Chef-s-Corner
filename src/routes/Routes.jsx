import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import ErrorPage from "../components/ErrorPage";

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
                loader:()=>fetch('http://localhost:3000/')
            }
        ]
    }
]);

export default router;