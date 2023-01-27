import {CHANGE_TITLE, MAIN_TITLE} from "../types/appType";

export const changeTitle = (title='') =>{
    const newTitle = `${MAIN_TITLE}${title}`
    document.title = newTitle
    return {type: CHANGE_TITLE,payload:newTitle}
}