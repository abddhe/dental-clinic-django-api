import {ADD_PATIENT, ALL_PATIENTS, DELETE_PATIENT, GET_PATIENT} from "../types/patientType";

const initialValue = {
	patients: [],
	message: "",
	status: "",
	errors: '',
};
const PatientReducer = (state = initialValue, action) => {
	switch (action.type) {
		case ALL_PATIENTS:
			return {
				type: action.type,
				patients: action.payload,
				message: action.message,
				errors: action.errors,
				status: action.status,
			};
		case GET_PATIENT:
			return {
				type: action.type,
				patient: action.payload,
				message: action.message,
				errors: action.errors,
				status: action.status,
			};
		case ADD_PATIENT:
			return {
				type: action.type,
				patients: action.payload,
				message: action.message,
				data: action.data,
				errors: action.errors,
				status: action.status,
			};
		case DELETE_PATIENT:
			return {
				type: action.type,
				patients: action.payload,
				message: action.message,
				errors: action.errors,
				status: action.status,
			};
		case 'CLEAR STATE':
			return initialValue
		default:
			return state;
	}
};


export default PatientReducer;
