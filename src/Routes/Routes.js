import { createBrowserRouter } from 'react-router-dom';
import Registration from '../components/Auth/Registration';
import SignIn from '../components/Auth/SignIn';
import Blog from '../components/Pages/Blog';
import About from '../components/Pages/About';
import AddOns from '../components/Pages/AddOns';
import Reservation from '../components/Pages/Reservation';
import Contact from '../components/Pages/Contact';
import Frequently from '../components/Pages/Frequently';
import Gallery from '../components/Pages/Gallery';

import Home from '../components/Pages/Home';
import AllReviews from '../components/Pages/Reviews/AllReviews';
import EditReview from '../components/Pages/Reviews/EditReview';
import MyReviews from '../components/Pages/Reviews/MyReviews';
import AddService from '../components/Pages/Services/AddService';
import AllServices from '../components/Pages/Services/AllServices';
import ServiceDetails from '../components/Pages/Services/ServiceDetails';
import ErrorPage from '../components/Shared/ErrorPage';
import Main from '../layout/Main.jsx';
import PrivateRoute from './PrivateRoute';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <Registration></Registration>
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>
            },
            {
                path: '/edit/:id',
                element: <EditReview></EditReview>,
                loader: ({ params }) => fetch(`https://photolab.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/allservices/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://photolab.vercel.app/allservices/${params.id}`)
            },
            {
                path: '/reviews/:id',
                element: <AllReviews></AllReviews>,
                loader: ({ params }) => fetch(`https://photolab.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
                loader: ({ params }) => fetch(`https://photolab.vercel.app/reviews/`)
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/About',
                element: <About></About>
            },
            {
                path: '/Gallery',
                element: <Gallery></Gallery>
            },
          
            {
                path: '/AddOns',
                element: <AddOns></AddOns>
            },
            {
                path: '/Frequently',
                element: <Frequently></Frequently>
            },
            {
                path: '/Contact',
                element: <Contact></Contact>
            },
            {
                path: '/Reservation',
                element: <Reservation></Reservation>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
])

