import React, {useEffect} from "react";
import FormAdd from "../../components/patient/formPatient";
import {useDispatch} from "react-redux";
import {ClearState} from "../../redux/actions/patientAction";

const AddPatient = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(ClearState())
    },[])
    return <div className="container">
            <FormAdd/>
    </div>;
};

export default AddPatient;
