import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "../../components/layouts/Breadcrumb";
import DataTableComponent from "../../components/Utility/DataTableComponent";
import { useDispatch, useSelector } from "react-redux";
import {
    ClearState,
    deletePatient,
    getAllPatients,
} from "../../redux/actions/patientAction";
import { changeTitle } from "../../redux/actions/appAction";

import { url } from "../../routes/root";
import {PATIENTS_ROUTES } from "../../routes/urls";
import DataTable from "react-data-table-component";
import {DELETE_PATIENT} from "../../redux/types/patientType";
import {toastSuccess} from "../../utility/toasts";


const Index = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ClearState())
    }, [])
    const [pending, setPending] = useState(true);
    const type = useSelector((state) => state.Patient.type);
    const patients = useSelector((state) => state.Patient.patients);
    const message = useSelector((state) => state.Patient.message);
    const columns = [
        {
            name: "id",
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: "name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "email",
            selector: (row) => row.email,
        },
        {
            name: "age",
            selector: (row) => row.age,
            sortable: true,
        },
        {
            name: "phone number",
            selector: (row) => row.phone_number,
        },
        {
            name: "Action",
            selector: (row) => (
                <>
                    <Link to={url(PATIENTS_ROUTES['patient.edit'],row.id)}>
                        <span className="data-table-action">
                            <i className="fa fa-edit"></i>
                        </span>
                        &nbsp;
                    </Link>
                    <Link to={url(PATIENTS_ROUTES["patient.show"], row.id)}>
                        <span className="data-table-action">
                            <i className="fa fa-eye"></i>
                        </span>
                        &nbsp;
                    </Link>
                    <Link onClick={() => dispatch(deletePatient(row.id))}>
                        <span className="data-table-action">
                            <i className="fa fa-trash"></i>
                        </span>
                        &nbsp;
                    </Link>
                </>
            ),
        },
    ];
    useEffect(() => {
        dispatch(changeTitle("Patients"));
        if (!patients || patients.length === 0) dispatch(getAllPatients());

        const timeout = setTimeout(() => {
            setPending(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(()=>{
        if (type === DELETE_PATIENT) toastSuccess(message)
    }, [patients])

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <Link
                        to={url(PATIENTS_ROUTES["patient.create"])}
                        className="btn add-btn"
                    >
                        <FontAwesomeIcon icon={faPlus} />
                        &nbsp;Add Patient
                    </Link>
                </div>
                <Breadcrumb name="Patients" />
            </div>
            <DataTable
                title={"Patients List"}
                columns={columns}
                data={patients}
                pagination
                // paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                // subHeaderComponent={subHeaderComponentMemo}
                persistTableHead
                responsive={true}
                progressPending={pending}
            />
        </div>
    );
};
export default Index;
