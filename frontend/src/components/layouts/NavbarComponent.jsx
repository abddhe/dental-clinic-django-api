import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDoorClosed } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useProSidebar } from "react-pro-sidebar";
import { useEffect } from "react";
import './Styles/navbar.css'
const NavbarComponent = () => {
    const { collapseSidebar } = useProSidebar();
    useEffect(() => {}, []);
    return (
        <nav
            className="navbar navbar-expand-lg w-100"
            style={{ backgroundColor: "#fff" }}
        >
            <div className="container">
                <span className="menu" onClick={() => collapseSidebar()}>
                    <FontAwesomeIcon icon={faBars} />
                </span>
                <div className="dropdown-center">
                    <a
                        className="dropdown-toggle  text-dark"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        admin
                    </a>

                    <ul
                        className="dropdown-menu"
                        style={{ minWidth: "auto", left: "auto", right: "0" }}
                    >
                        <li>
                            <Link className="dropdown-item" to="/logout">
                                &nbsp;logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;
