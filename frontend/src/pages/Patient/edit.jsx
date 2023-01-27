import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClearState, getPatient } from "../../redux/actions/patientAction";
import FormPatient from "../../components/patient/formPatient";
import { useGetIdPram } from "../../CustomHooks/useGetIdPrame";

const EditPatient = () => {
    const id = useGetIdPram()
    const dispatch = useDispatch();
    const patient = useSelector(state => state.Patient.patient)
    useEffect(() => {
        dispatch(ClearState());
        dispatch(getPatient(id))
    }, []);
    return (
        <div className="container">
            <FormPatient patientData={patient}/>
        </div>
    );
};

export default EditPatient;
