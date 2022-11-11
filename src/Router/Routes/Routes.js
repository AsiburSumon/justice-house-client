import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import Home from "../../Home/Home";
import Main from "../../Layout/Main";
import Login from "../../Login/Login/Login";
import SignUp from "../../Login/SignUp/SignUp";
import AllReviews from "../../Reviews/MyReviews/AllReviews";
import MyReviews from "../../Reviews/MyReviews/MyReviews";
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
                loader: ()=> fetch(`https://assignment-11-server-blond.vercel.app`)
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
                loader: ({params}) => fetch(`https://assignment-11-server-blond.vercel.app/services/${params.id}`)
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/allreviews',
                element: <AllReviews></AllReviews>,
                loader: ()=>fetch(`https://assignment-11-server-blond.vercel.app/allreviews`)
            }
        ]
    }
]);

export default router;