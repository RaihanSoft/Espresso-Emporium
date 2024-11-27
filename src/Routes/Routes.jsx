import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import AddCoffee from "../Components/AddCoffee/AddCoffee"
import UpdateCoffee from "../Components/UpdateCoffee/UpdateCoffee"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
    },
    {
        path: '/addCoffee',
        element: <AddCoffee />
    },
    {
        path: '/updateCoffee',
        element: <UpdateCoffee />
    },
]);