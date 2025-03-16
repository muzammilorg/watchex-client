import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/home/home";
// import ErrorPage from "../pages/error/error-page";
// import Show from "../pages/show/show";
// import Login from "../pages/auth/login";
// import Signup from "../pages/auth/signup";
// import AboutPage from "../pages/about/about";
// import Contact from "../pages/contact/contact";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader/loader";
// import AddShowPage from "../pages/dashboard/add-show/add-show";
// import AddMoviePage from "../pages/dashboard/add-movie/add-movie";
// import Dashboard from "../pages/dashboard/dashboard";

// import UserPage from "../pages/user/user";
// import ShowTime from "../pages/showtime/showtime";


const HomePage = lazy(()=> import("../pages/home/home"))
const ErrorPage = lazy(()=> import("../pages/error/error-page"))
const Show = lazy(()=> import("../pages/show/show"))
const ShowTime = lazy(()=> import("../pages/showtime/showtime"))
const OrderPage = lazy(()=> import("../pages/order/order"))
const Login = lazy(()=> import("../pages/auth/login"))
const Signup = lazy(()=> import("../pages/auth/signup"))
const Dashboard = lazy(()=> import("../pages/dashboard/dashboard"))
const AddMoviePage = lazy(()=> import("../pages/dashboard/add-movie/add-movie"))
const AddShowPage = lazy(()=> import("../pages/dashboard/add-show/add-show"))
const AboutPage = lazy(()=> import("../pages/about/about"))
const Contact = lazy(()=> import("../pages/contact/contact"))
const Checkout = lazy(()=> import("../pages/checkout/checkout"))
const UserPage = lazy(()=> import("../pages/user/user"))


export const publicRoutes = createBrowserRouter([
    
    {path: '/', element: <Suspense fallback={<Loader></Loader>}> <HomePage></HomePage></Suspense>},
    {path: '/sign-in', element: <Suspense fallback={<Loader></Loader>}><Login></Login> </Suspense>},
    {path: '/sign-up', element: <Suspense fallback={<Loader></Loader>}><Signup></Signup></Suspense>},
    {path: '/show/:id', element:<Suspense fallback={<Loader></Loader>}> <Login></Login></Suspense>},
    {path: '/showtimes', element:<Suspense fallback={<Loader></Loader>}> <ShowTime></ShowTime> </Suspense>},
    {path: '/checkout', element: <Suspense fallback={<Loader></Loader>}><Checkout></Checkout></Suspense>},
    {path: '/about-us', element:<Suspense fallback={<Loader></Loader>}> <AboutPage></AboutPage> </Suspense>},
    {path: '/contact', element: <Suspense fallback={<Loader></Loader>}><Contact></Contact></Suspense>},
    {path: '*', element:<Suspense fallback={<Loader></Loader>}> <ErrorPage></ErrorPage></Suspense>}
])

export const privateRoutes = createBrowserRouter([

    {path: '/', element: <Suspense fallback={<Loader></Loader>}> <HomePage></HomePage></Suspense>},
    {path: '/showtimes', element:<Suspense fallback={<Loader></Loader>}> <ShowTime></ShowTime> </Suspense>},
    {path: '/show/:id', element:<Suspense fallback={<Loader></Loader>}> <Show></Show> </Suspense>},
    {path: '/order/:id', element:<Suspense fallback={<Loader></Loader>}> <OrderPage></OrderPage> </Suspense>},
    {path: '/checkout', element: <Suspense fallback={<Loader></Loader>}><Checkout></Checkout></Suspense>},
    {path: '/contact', element: <Suspense fallback={<Loader></Loader>}><Contact></Contact></Suspense>},
    {path: '/user', element: <Suspense fallback={<Loader></Loader>}><UserPage></UserPage> </Suspense>},
    {path: '/dashboard', element: <Suspense fallback={<Loader></Loader>}><Dashboard></Dashboard> </Suspense>},
    {path: '/add-movie', element: <Suspense fallback={<Loader></Loader>}><AddMoviePage></AddMoviePage> </Suspense>},
    {path: '/add-show', element: <Suspense fallback={<Loader></Loader>}><AddShowPage></AddShowPage> </Suspense>},
    {path: '/about-us', element: <Suspense fallback={<Loader></Loader>}><AboutPage></AboutPage></Suspense>},
    {path: '*', element: <Suspense fallback={<Loader></Loader>}><ErrorPage></ErrorPage></Suspense>}

])