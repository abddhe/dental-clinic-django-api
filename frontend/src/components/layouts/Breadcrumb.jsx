import React from "react";
import { useEffect } from "react";
import { useRoutes } from "react-router-dom";

const Breadcrumb = ({ name }) => {
    let route = useRoutes()
    return <div className="header-title">{name}</div>;
};

export default Breadcrumb;
