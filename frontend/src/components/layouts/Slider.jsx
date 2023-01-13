import React from "react";
import logo from "../../assets/imgs/logo.jpg";
import UserImg from "../../assets/imgs/profile/male.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Sidebar, Menu, MenuItem, } from "react-pro-sidebar";
import {
    faDashboard,
    faUserDoctor,
    faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export const Slider = () => {
    
    return (
        <div>
            <Sidebar collapsedWidth="0" defaultCollapsed>
                <div className="p-3" style={{ backgroundColor: "#fff" }}>
                    <img src={logo} width="30px" alt="" />
                    &nbsp;&nbsp;
                    <span>Salj Dental Clini</span>
                </div>
                <hr className="m-0" />
                <Menu style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
                    <MenuItem routerLink={<Link to="/" />}>
                        <li className="list-item">
                            <div className="list-item-icon">
                                <FontAwesomeIcon icon={faDashboard} />
                            </div>
                            <div className="list-item-text">Dashboard</div>
                        </li>
                    </MenuItem>
                    <MenuItem routerLink={<Link to="/patients" />}>
                        <div className="list-item">
                            <li className="list-item active">
                                <div className="list-item-icon">
                                    <FontAwesomeIcon icon={faUserPen} />
                                </div>
                                <div className="list-item-text">Patients</div>
                            </li>
                        </div>
                    </MenuItem>
                    <MenuItem routerLink={<Link to='/doctors' />}>
                        <div className="list-item">
                            <li className="list-item ">
                                <div className="list-item-icon">
                                    <FontAwesomeIcon icon={faUserDoctor} />
                                </div>
                                <div className="list-item-text">Doctors</div>
                            </li>
                        </div>
                    </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
};
 <div
     class="offcanvas offcanvas-start show"
     id="offcanvasExample"
     aria-labelledby="offcanvasExampleLabel"
     aria-modal="true"
     role="dialog"
 >
     <div className="offcanvas-header">
         <h5
             className="offcanvas-title d-flex align-items-center"
             id="offcanvasExampleLabel"
         >
            
         </h5>
         <button
             type="button"
             className="btn-close"
             data-bs-dismiss="offcanvas"
             aria-label="Close"
         ></button>
     </div>
     <hr />
     <div className="offcanvas-body p-0">
         <div className="information text-center">
             <div className="image-profile">
                 <img src={UserImg} alt="User Profile" />
                 <h3 className="username-profile">Test</h3>
             </div>
             <hr />
         </div>
         <ul className="list">
             <Link to="/">
                 <li className="list-item ">
                     <div className="list-item-icon">
                         <FontAwesomeIcon icon={faDashboard} />
                     </div>
                     <div className="list-item-text">Dashboard</div>
                 </li>
             </Link>
             <Link to="/patients">
                 
             </Link>
             <Link to="/doctors">
                 
             </Link>
         </ul>
     </div>
 </div>;