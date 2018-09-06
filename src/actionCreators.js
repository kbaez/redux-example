const loadProducts = () => {

    return dispatch => {
        return fetch('http://localhost:3003/products')
            .then(response => response.json())
            .then(responseData => {
                dispatch({
                    type: "REPLACE_PRODUCTS",
                    products: responseData
                })
                console.log(responseData);
            });

    }
};

const addToCart = product => {
    return {
        type:"ADD_TO_CART",
        product
    }
};

const removeFromCart = product => {
    return {
        type: "REMOVE_FROM_CART",
        product
    }
};

export { loadProducts, addToCart, removeFromCart };