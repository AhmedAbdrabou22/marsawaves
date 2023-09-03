import baseUrl from "../../Api/baseUrl"
const getAllProducts = () => {
    return async (dispatch) => {
        try {
            let res = await baseUrl.get('/api/v1/products')
            dispatch({ type: "getAllProducts", payload: res.data })
        } catch (e) {
            dispatch({ type: "Get_Errors", payload: "Error through Loadin Data" + e })
        }
    }
}

export { getAllProducts }