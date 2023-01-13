import { faPaintBrush, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Breadcrumb from "../layouts/Breadcrumb";

const Dashboard = () => {
    return (
        <div className="container">
            <Breadcrumb name="Dashboard" />
            <div className="boxs">
                <div className="box col-sm-3">
                    <div className="bg-danger box-icon">
                        <FontAwesomeIcon icon={faUserDoctor} />
                    </div>
                    <div className="box-body">
                        <div className="box-title">Doctors</div>
                        <p>2</p>
                    </div>
                </div>
                <div className="box col-sm-3">
                    <div className="bg-danger box-icon">
                        <FontAwesomeIcon icon={faPaintBrush} />
                    </div>
                    <div className="box-body">
                        <div className="box-title">Patients</div>
                        <p>2</p>
                    </div>
                </div>
                <div className="box col-sm-3">
                    <div className="bg-danger box-icon">
                        <FontAwesomeIcon icon={faUserDoctor} />
                    </div>
                    <div className="box-body">
                        <div className="box-title">dddd</div>
                        <p>2</p>
                    </div>
                </div>
                <div className="box col-sm-3">
                    <div className="bg-danger box-icon">
                        <FontAwesomeIcon icon={faUserDoctor} />
                    </div>
                    <div className="box-body">
                        <div className="box-title">dddd</div>
                        <p>2</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
