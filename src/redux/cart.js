const initialState = {list: []};

export function addToCartRedux(newCartList) {
    return (dispatch) =>
            dispatch({
                type: "ADD_TO_CART",
                payload: newCartList,
            });
}

export function getCartList() {
    return (dispatch) =>
        dispatch({
            type: "LIST_CART",
            payload: initialState.list,
        });
}

export function cart(state=initialState, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            const newCartList = {id: action.payload.id, name: action.payload.name}
            return {list: [...state.list, newCartList]};
        case "LIST_CART":
            return {list: action.payload};

        default:
            return state;
    }
}