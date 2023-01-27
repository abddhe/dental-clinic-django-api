import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error/error-page";
import Patient from "../pages/Patient";
import Home from "../pages/Home";
import App from "../components/layouts/App";
import { HOME_PAGE_ROUTE, PATIENTS_ROUTES } from "./urls";
import AddPatient from "../pages/Patient/create";
import ShowPatient from "../pages/Patient/show";
import EditPatient from "../pages/Patient/edit";
import Test from "../pages/Test";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: HOME_PAGE_ROUTE,
                element: <Home />,
            },
            {
                path: PATIENTS_ROUTES["patient.index"],
                element: <Patient />,
            },
            {
                path: PATIENTS_ROUTES["patient.create"],
                element: <AddPatient />,
            },
            {
                path: PATIENTS_ROUTES["patient.show"],
                element: <ShowPatient/>,
            },
            {
                path: PATIENTS_ROUTES["patient.edit"],
                element: <EditPatient/>,
            },
        ],
    },
    {
        path: '/test',
        element:<Test/>
    }
]);

export const url = (path = "", ...params) => {
    try {
        if (params.length === 0) return path;
        else {
            const pattern = /\/:\w+/gim;
            const result = path.match(pattern);
            if (result) {
                if (result.length !== params.length) throw new Error("Missing Url Parmas");
                result.forEach((r, index) => {
                    path = path.replace(r, `/${params[index]}`);
                });
            }
            return path;
        }
    } catch (err) {
        console.error(err);
    }
};
