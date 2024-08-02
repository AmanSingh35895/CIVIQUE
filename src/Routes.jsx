import React from "react";
import { useRoutes } from "react-router-dom";
// import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RegisterPageColoured from "./pages/RegisterPageColoured";
import LoginPageColoured from "./pages/LoginPageColoured";
import HomePageColoured from "./pages/HomePageColoured";
import Projectscolored from "./pages/ProjectsColored";
import MoreInfoPageforaProjectPrev from "./pages/MoreInfoPageforaProjectPrev";
import GISIntegrationWindowColored from "./pages/GISIntegrationWindowColored";
import AboutUsColored from "./pages/AboutUsColored";
import ContactUs from "./pages/ContactUs"
import Survey from "./pages/Survey"
import UserInfo from "./pages/UserInfo"

const ProjectRoutes = () => {
    let element = useRoutes([
        { path: "/", element: <LoginPageColoured /> },
        { path: "*", element: <NotFound /> },
        {
            path: "registerpagecoloured",
            element: <RegisterPageColoured />,
        },
        // {
        //     path: "loginpagecoloured",
        //     element: <LoginPageColoured />,
        // },
        {
            path: "homepagecoloured",
            element: <HomePageColoured />,
        },
        {
            path: "projectscolored",
            element: <Projectscolored />,
        },
        {
            path: "moreinfopageforaprojectprev",
            element: <MoreInfoPageforaProjectPrev />,
        },
        {
            path: "gisintegrationwindowcolored",
            element: <GISIntegrationWindowColored />,
        },
        {
            path: "aboutuscolored",
            element: <AboutUsColored />,
        },
        {
            path: "contactus",
            element: <ContactUs />,
        },
        {
            path: "survey",
            element: <Survey />,
        },
        {
            path: "userprofile",
            element: <UserInfo />
        }
    ]);
    return element;
};
export default ProjectRoutes;