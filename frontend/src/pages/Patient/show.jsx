import React, { useEffect, useState } from "react";
import { useGetIdPram } from "../../CustomHooks/useGetIdPrame";
import { useDispatch, useSelector } from "react-redux";
import { getPatient } from "../../redux/actions/patientAction";
import { changeTitle } from "../../redux/actions/appAction";
import { Link } from "react-router-dom";
import { url } from "../../routes/root";
import { DCOTORS_ROUTES } from "../../routes/urls";
import { getAllDoctors } from "../../redux/actions/doctorAction";

const ShowPatient = () => {
    const id = useGetIdPram();
    const dispatch = useDispatch();
    const patient = useSelector((state) => state.Patient.patient);
    const doctors = useSelector((state) => state.Doctor.doctors);
    useEffect(() => {
        // Before dispatch check if the patient in payload return it if not dispatch and get patient with id
        // if (patients?.length && patients.map(patient => patient.id).includes(id)) {
        // 	setPatient(patients.filter(p => p.id === id && p)[0])
        dispatch(changeTitle(patient?.name || "Show Patient"));
        dispatch(getPatient(id));
        dispatch(getAllDoctors());
    }, []);

    return (
        <div className="container mt-5 p-3 bg-white rounded">
            <div className="m-auto">
                <div className={"row"}>
                    <div className={"col-12 col-lg-6"}>
                        <div className="text-center">Patient Information</div>
                        <ul>
                            <li>
                                <strong>ID:</strong>&nbsp;{patient?.id_number}
                            </li>
                            <li>
                                <strong>Name:</strong>&nbsp;{patient?.name}
                            </li>
                            <li>
                                <strong>E-mail:</strong>&nbsp;{patient?.email}
                            </li>
                            <li>
                                <strong>Age:</strong>&nbsp;{patient?.age} year
                            </li>
                            <li>
                                <strong>Phone Number</strong>&nbsp;
                                {patient?.phone_number}
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="text-center">Doctors</div>
                        <ul>
                            {patient?.doctors.map((idD) =>
                                doctors.map((doctor) =>
                                    doctor.id === idD ? (
                                        <li>
                                            <Link
                                                to={url(
                                                    DCOTORS_ROUTES[
                                                        "doctor.show"
                                                    ],
                                                    idD
                                                )}
                                            >
                                                {doctor.name}
                                            </Link>
                                        </li>
                                    ) : (
                                        ""
                                    )
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowPatient;
