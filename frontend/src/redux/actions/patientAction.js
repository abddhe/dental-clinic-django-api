import {ADD_PATIENT, ALL_PATIENTS, DELETE_PATIENT, GET_PATIENT} from "../types/patientType";
import axios from "axios";
import {fetchData} from "../../utility/fetchData";
import {MAIN_API_URL} from "../../utility/config";

const PATIENTS_API_URL = `${MAIN_API_URL}/patients/`

export const getAllPatients = () => {
	return async (dispatch) => {
		try {
			const data = await fetchData(PATIENTS_API_URL);
			return await dispatch({
				type: ALL_PATIENTS,
				payload: data,
				message: "Successfully Fetched Patients",
			});
		} catch (error) {
			return await dispatch({
				type: DELETE_PATIENT,
				message: "Something error,try again",
				errors: error.response.data,
				status: "error",
			});
		}
	};
};

export const ClearState = () => {
	return {
		type: "CLEAR STATE",
	};
};

export const getPatient = (id)=>{
	return async (dispatch) =>{
		try {
			const patient = await fetchData(`${PATIENTS_API_URL}${id}/`);
			return await dispatch({
				type: GET_PATIENT,
				payload: patient,
				message: "Successfully Deleted Patient",
				status: "successful",
			});
		} catch (error) {
			return await dispatch({
				type: GET_PATIENT,
				message: "Something error,try again",
				errors: error.response.data,
				status: "error",
			});
		}
	}
}

export const deletePatient = (id) => {
	return async (dispatch) => {
		try {
			await axios.delete(`${PATIENTS_API_URL}${id}/`);
			const data = await fetchData(PATIENTS_API_URL)
			return await dispatch({
				type: DELETE_PATIENT,
				payload: data,
				message: "Successfully Deleted Patient",
				status: "successful",
			});
		} catch (error) {
			return await dispatch({
				type: DELETE_PATIENT,
				message: "Something error,try again",
				errors: error.response.data,
				status: "error",
			});
		}
	};
};

export const addPatient = (patient) => {
	return async (dispatch) => {
		try {
			await axios.post(PATIENTS_API_URL, patient);
			const data = await fetchData(PATIENTS_API_URL);

			return await dispatch({
				type: ADD_PATIENT,
				data: patient,
				message: "Successfully Added Patient",
				payload: data,
				status: "successful",
			});
		} catch (error) {
			return await dispatch({
				type: ADD_PATIENT,
				data: patient,
				message: "Something error,try again",
				errors: error.response.data,
				status: "error",
			});
		}
	};
};
