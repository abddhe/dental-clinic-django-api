import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Controller, useForm} from "react-hook-form";
import Select from "react-select";
import {getAllDoctors} from "../../redux/actions/doctorAction";
import {addPatient} from "../../redux/actions/patientAction";
import "./style/form.css";
import {PATIENTS_ROUTES} from "../../routes/urls";
import {url} from '../../routes/root'
import {toastError, toastSuccess} from "../../utility/toasts";
import {ADD_PATIENT} from "../../redux/types/patientType";

const FormPatient = ({patientData}) => {
    const dispatch = useDispatch();
    const [check, setCheck] = useState(0);

    const {
        register,
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    // Wrap all doctors from doctorReducer
    const doctors = useSelector((state) => state.Doctor.doctors);
    useEffect(() => {
        if (!doctors || doctors.length === 0) dispatch(getAllDoctors());
    }, []);
    const selectOptions = [
        ...doctors.map((doctor) => {
            return { value: doctor.id, label: `${doctor.name} - ${doctor.id}` };
        }),
    ];

    const status = useSelector((state) => state.Patient.status);
    const type = useSelector((state) => state.Patient.type);
    const message = useSelector((state) => state.Patient.message);
    const payload = useSelector((state) => state.Patient.data);
    const errorsSubmit = useSelector((state) => state.Patient.errors);
    // Go to previse route
    const goBack = () => navigate(-1);
    // Dispatch on addPatient action in patientReducer to send var data => form data
    const sendData = (data) => {
        data = {
            name: data.name,
            id_number: data.id_number,
            email: data.email,
            age: data.age,
            phone_number: data.phone_number,
            doctors: [...Object.values(data.doctors.map((m) => m.value))],
        };
        setCheck(check + 1);
        if (JSON.stringify(data) === JSON.stringify(payload))
            return toastError(
                "Please change the value of that red-bordered fields, and try again"
            );
        return dispatch(addPatient(data));
    };

    useEffect(() => {
        // Show success toast notification and redirect user to patient index page
        if (status && status === "successful" && type === ADD_PATIENT) {
            toastSuccess(message);
            navigate(url(PATIENTS_ROUTES["patient.index"]));
        }

        // Wrap api fields errors to form errors by useForm hook
        else if (status && status === "error" && type === ADD_PATIENT) {
            if (errorsSubmit?.name)
                setError(
                    "name",
                    {
                        type: "custom",
                        message: errorsSubmit.name,
                    },
                    { shouldFocus: true }
                );

            if (errorsSubmit?.id_number)
                setError(
                    "id_number",
                    {
                        type: "custom",
                        message: errorsSubmit.id_number,
                    },
                    { shouldFocus: true }
                );

            if (errorsSubmit?.email)
                setError(
                    "email",
                    {
                        type: "custom",
                        message: errorsSubmit.email,
                    },
                    { shouldFocus: true }
                );

            if (errorsSubmit?.age)
                setError(
                    "age",
                    {
                        type: "custom",
                        message: errorsSubmit.age,
                    },
                    { shouldFocus: true }
                );

            if (errorsSubmit?.phone_number)
                setError(
                    "phone_number",
                    {
                        type: "custom",
                        message: errorsSubmit.phone_number,
                    },
                    { shouldFocus: true }
                );

            if (errorsSubmit?.doctors)
                setError(
                    "doctors",
                    {
                        type: "custom",
                        message: errorsSubmit.doctors,
                    },
                    { shouldFocus: true }
                );
        }
    }, [status, check]);

    return (
        <div className="bg-light mt-5 p-3 rounded">
            <form
                className="g-3"
                id="add-patient"
                onSubmit={handleSubmit(sendData)}
                method="post"
            >
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="nameInput" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            id="nameInput"
                            value={patientData?.name}
                            className={`form-control ${
                                errors?.name && "is-invalid"
                            }`}
                            placeholder="Patient Name"
                            aria-label="Patient Name"
                            {...register("name", {
                                required: "This field is required",
                            })}
                            aria-invalid={errors?.name ? "true" : "false"}
                        />
                        {errors?.name && (
                            <div className={"text-danger mt-2"}>
                                {errors?.name?.message || errorsSubmit?.name}
                            </div>
                        )}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="idNumberInput" className="form-label">
                            ID Number
                        </label>
                        <input
                            type="number"
                            maxLength="12"
                            value={patientData?.id_number}
                            id={"idNumberInput"}
                            className={`form-control ${
                                errors?.id_number && "is-invalid"
                            }`}
                            placeholder="Patient ID"
                            aria-label="Patient ID"
                            {...register("id_number", {
                                required: "This field is required",
                            })}
                            aria-invalid={errors?.id_number ? "true" : "false"}
                        />
                        {errors?.id_number && (
                            <div className={"text-danger mt-2"}>
                                {errors?.id_number?.message}
                            </div>
                        )}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="emailInput" className="form-label">
                            E-mail
                        </label>
                        <input
                            type="text"
                            id="emailInput"
                            value={patientData?.email}
                            className={`form-control ${
                                errors?.email && "is-invalid"
                            }`}
                            placeholder="Patient Email"
                            aria-label="Patient Email"
                            {...register("email", {
                                required: "This field is required",
                                pattern: {
                                    value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
                                    message: "This email address is invalid",
                                },
                            })}
                            aria-invalid={errors?.email ? "true" : "false"}
                        />
                        {errors?.email && (
                            <div className={"text-danger mt-2"}>
                                {errors?.email?.message}
                            </div>
                        )}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="ageInput" className="form-label">
                            Age
                        </label>
                        <input
                            type="number"
                            id={"ageInput"}
                            value={patientData?.age}
                            className={`form-control ${
                                errors?.age && "is-invalid"
                            }`}
                            placeholder="Patient Age"
                            aria-label="Patient Age"
                            maxLength="3"
                            {...register("age", {
                                required: "This field is required",
                            })}
                            aria-invalid={errors?.age ? "true" : "false"}
                        />
                        {errors?.age && (
                            <div className={"text-danger mt-2"}>
                                {errors?.age?.message}
                            </div>
                        )}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label
                            htmlFor="phoneNumberInput"
                            className="form-label"
                        >
                            Phone Number
                        </label>
                        <input
                            type="number"
                            id="phoneNumberInput"
                            value={patientData?.phone_number}
                            className={`form-control ${
                                errors?.phone_number && "is-invalid"
                            }`}
                            placeholder="Patient Phone Number"
                            aria-label="Patient Phone Number"
                            {...register("phone_number", {
                                required: "This field is required",
                                maxLength: 10,
                            })}
                            aria-invalid={
                                errors.phone_number ? "true" : "false"
                            }
                        />
                        {errors?.phone_number && (
                            <div className={"text-danger mt-2"}>
                                {errors?.phone_number?.message}
                            </div>
                        )}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="doctorInput" className="form-label">
                            Doctors
                        </label>
                        <Controller
                            name="doctors"
                            control={control}
                            rules={{ required: "This field is required" }}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={selectOptions}
                                    value={patientData?.doctors.map(doctor => doctor.id)}
                                    className={`${
                                        errors?.doctors &&
                                        "form-control is-invalid"
                                    }`}
                                    isClearable={false}
                                    isMulti
                                />
                            )}
                            aria-invalid={errors.doctor ? "true" : "false"}
                        />
                        {errors?.doctors && (
                            <div className={"text-danger mt-2"}>
                                {errors?.doctors?.message}
                            </div>
                        )}
                    </div>
                </div>
                <div className="row  ">
                    <div className="col d-flex justify-content-between">
                        <button className="btn add-btn" type="submit">
                            Submit
                        </button>
                        <button
                            className="btn add-btn"
                            onClick={goBack}
                            type="button"
                        >
                            Back
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormPatient;
