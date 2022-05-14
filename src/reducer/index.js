import { combineReducers } from "redux";
import isHaveCars from './cars'
import postCarsReducer from './getCars'
import getCarDetailReducer from "./getCarDetail";

const allReducer = combineReducers({
    cars: isHaveCars,
    getCars: postCarsReducer,
    detailCars : getCarDetailReducer
});

export default allReducer;