import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import Home from "../../Home/Home";
import Main from "../../Layout/Main";
import Login from "../../Login/Login/Login";
import SignUp from "../../Login/SignUp/SignUp";
import AddService from "../../Services/AddService";
import ServiceDetails from "../../Services/ServiceDetails";
import Services from "../../Services/Services";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch(`http://localhost:5000`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/servicedetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            }
        ]
    }
]);

export default router;