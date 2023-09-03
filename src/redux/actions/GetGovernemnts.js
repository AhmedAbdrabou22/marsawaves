import baseUrl from "../../Api/baseUrl"
const getAllGovernments = () => {
    return async (dispatch) => {
        try {
            let res = await baseUrl.get('/api/v1/governorates')
            dispatch({ type: "getAllGovernments", payload: res.data })
        } catch (e) {
            dispatch({ type: "Get_Errors", payload: "Error through Loadin Data" + e })
        }
    }
}

export { getAllGovernments }