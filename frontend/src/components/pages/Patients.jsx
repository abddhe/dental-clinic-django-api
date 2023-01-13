import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../layouts/Breadcrumb";

const Patients = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <Link
                        to="/patients/add-patient"
                        className="btn btn-primary"
                    >
                        <FontAwesomeIcon icon={faPlus} />&nbsp;Add Patient
                    </Link>
                </div>
                <Breadcrumb name="Patients" />
            </div>
        </div>
    );
};

export default Patients;
