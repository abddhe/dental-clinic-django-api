import {ADD_DOCTOR, ALL_DOCTORS, DELETE_DOCTOR} from "../types/doctorType"
import axios from "axios";
import {fetchData} from "../../utility/fetchData";
import {MAIN_API_URL} from "../../utility/config";

const DOCTORS_API_URL = `${MAIN_API_URL}/doctors/`

export const getAllDoctors = () => {
	return async (dispatch) => {
		try {
			const data = await fetchData(DOCTORS_API_URL);
			return dispatch({
				type: ALL_DOCTORS,
				payload: data,
				message: "Successfully Fetched Doctors",
			});
		} catch (error) {
			return dispatch({
				type: ALL_DOCTORS,
				message: "Something error,try again",
				errors: error.response.data,
				status: "error",
			});
		}
	};
};

export const test = () => {
	return {
		type: "test",
		message: "Successfully Deleted Doctors",
		status: "successful",
	};
};

export const deleteDoctor = (id) => {
	return async (dispatch) => {
		try {
			await axios.delete(`${DOCTORS_API_URL}${id}/`);
			const data = fetchData(DOCTORS_API_URL);
			return dispatch({
				type: DELETE_DOCTOR,
				message: "Successfully Deleted Doctors",
				payload: data,
				status: "successful",
			});
		} catch (error) {
			return dispatch({
				type: DELETE_DOCTOR,
				message: "Something error,try again",
				errors: error.response.data,
				status: "error",
			});
		}
	};
};

export const addDoctor = (doctor) => {
	return async (dispatch) => {
		try {
			await axios.post(DOCTORS_API_URL, doctor);
			const data = fetchData(DOCTORS_API_URL);

			return await dispatch({
				type: ADD_DOCTOR,
				data: doctor,
				message: "Successfully Added Doctors",
				payload: data,
				status: "successful",
			});
		} catch (error) {
			return await dispatch({
				type: ADD_DOCTOR,
				data: doctor,
				message: "Something error,try again",
				errors: error.response.data,
				status: "error",
			});
		}
	};
};
