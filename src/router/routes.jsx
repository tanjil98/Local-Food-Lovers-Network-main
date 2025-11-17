import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Register from "../Auth/Register";
import Login from "../Auth/Login.Jsx";
import PrivateRoute from "../Provider/PrivateRoute";
import AddReview from "../pages/AddReview/AddReview";
import AllReview from "../pages/allReview/AllReview";
import MyReview from "../pages/MyReview/MyReview";
import EditReview from "../pages/EditReview/EditReview";
import ViewDetail from "../pages/ViewDetails/ViewDetail";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoaderSpinner from "../components/LoaderSpinner/LoaderSpinner";
import MyFavorite from "../pages/MyFavorite/MyFavorite";
const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('https://local-food-lovers-network-server-fawn.vercel.app/reviews'),
                hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/addReview',
                element: <PrivateRoute>
                    <AddReview></AddReview>
                </PrivateRoute>
            },
            {
                path: '/allReview',
                element: <AllReview></AllReview>,
                loader: () => fetch("https://local-food-lovers-network-server-fawn.vercel.app/all-reviews"),
                hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>
            },
            {
                path: '/myReview',
                element: <PrivateRoute>
                    <MyReview></MyReview>
                </PrivateRoute>
            },
            {
                path: '/editReview/:id',
                loader: ({ params }) => fetch(`https://local-food-lovers-network-server-fawn.vercel.app/reviews/${params.id}`),
                element: <PrivateRoute>
                    <EditReview></EditReview>
                </PrivateRoute>,
                hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>
            },
            {
                path: '/viewDetail/:id',
                element: <PrivateRoute>
                    <ViewDetail></ViewDetail>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://local-food-lovers-network-server-fawn.vercel.app/reviews/${params.id}`),
                hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>
            },
            {
                path:'/myFavorite',
                element:<PrivateRoute>
                    <MyFavorite></MyFavorite>
                </PrivateRoute>
            }
        ]
    }
])

export default router;