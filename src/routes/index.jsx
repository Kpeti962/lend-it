import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout";
import RegistrationPageView from "../views/RegistrationPageView";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "registration",
                element: <RegistrationPageView />,
            },
           
        ],
    },
]);