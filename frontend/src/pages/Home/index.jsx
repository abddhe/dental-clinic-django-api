import { faPaintBrush, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import React, {useEffect} from "react";
import Breadcrumb from "../../components/layouts/Breadcrumb";
import BoxComponent from "../../components/Home/BoxComponent";
import {useDispatch} from "react-redux";
import {changeTitle} from "../../redux/actions/appAction";
import {ClearState} from "../../redux/actions/patientAction";

const Index = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(changeTitle('Dashboard'))
    },[])
    return (
        <div className="container">
            <Breadcrumb name="Dashboard" />
            <div className="boxes">
                <BoxComponent fontIcon={faUserDoctor} styleBootstrap="danger" title="Doctors" />
                <BoxComponent fontIcon={faPaintBrush} title="Patients" />
                <BoxComponent fontIcon={faUserDoctor} title="Box3" />
                <BoxComponent fontIcon={faUserDoctor} title="Box4" />
            </div>
        </div>
    );
};

export default Index;
