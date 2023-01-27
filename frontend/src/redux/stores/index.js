import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import AppReducer from "../reducers/appReducer";
import DoctorReducer from "../reducers/doctorReducer";
import patientReducer from "../reducers/patientReducer";

export const store = createStore(combineReducers({
    Patient: patientReducer,
    App: AppReducer,
    Doctor:DoctorReducer
}),composeWithDevTools(applyMiddleware(thunk)))