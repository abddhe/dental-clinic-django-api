import {ADD_DOCTOR, ALL_DOCTORS, DELETE_DOCTOR} from "../types/doctorType";

const initialValue = {
	doctors: [],
	message: "",
	status: "",
	errors: '',
};
const DoctorReducer = (state = initialValue, action) => {
	switch (action.type) {
		case ALL_DOCTORS:
			return {
				type: action.type,
				doctors: action.payload,
				message: action.message,
				errors: action.errors,
				status: action.status,
			};
		case ADD_DOCTOR:
			return {
				type: action.type,
				doctors: action.payload,
				message: action.message,
				data: action.data,
				errors: action.errors,
				status: action.status,
			};
		case DELETE_DOCTOR:
			return {
				type: action.type,
				doctors: action.payload,
				message: action.message,
				errors: action.errors,
				status: action.status,
			};
		case 'test':
			return state
		default:
			return state;
	}
};


export default DoctorReducer;
