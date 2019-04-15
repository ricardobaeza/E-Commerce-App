const userCart = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return state.concat(action.payload)
        case 'delete':
            state.splice(action.payload, 1);
            return state;
        default: 
            return state;
    }

}


export default userCart;