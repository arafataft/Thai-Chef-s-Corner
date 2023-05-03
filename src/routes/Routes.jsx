import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ChefDetails from "../pages/ChefDetails/ChefDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
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