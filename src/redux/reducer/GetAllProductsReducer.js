


const initial = {
    products: [],
    loading: true,
}

const ProductReducer = (state = initial, action) => {
    switch (action.type) {
        case "getAllProducts":
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        case "Get_Errors":
            return {
                loading: true,
                products: action.payload
            }
        default:
            return state;
    }
}

export default ProductReducer