import { combineReducers } from "redux";
import changeForm from "./form";

const rootReducer = combineReducers({
    form: changeForm
})

export default rootReducer;