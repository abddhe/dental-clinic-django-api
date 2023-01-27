import {CHANGE_TITLE} from "../types/appType";

const initialValue = {
    title:''
}
const AppReducer = (state = initialValue, action) => {
    switch (action.type) {
        case CHANGE_TITLE:
            return { title: action.payload };
        default:
            return state;
    }
};

export default AppReducer;