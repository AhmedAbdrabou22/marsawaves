import {combineReducers} from "redux"
import  getAllGovernments  from "./governmentReducer"
import getAllProducts  from "./GetAllProductsReducer"

export default combineReducers({
    getAllGovernments:getAllGovernments,
    getAllProducts:getAllProducts,
})