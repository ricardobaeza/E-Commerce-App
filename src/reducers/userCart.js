import { access, stat } from "fs";

const userCart = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return state.concat(action.payload)
        case 'delete':
            state.splice(action.payload, 1);
            return state;
        case 'edit':
            console.log(action.payload.currentItemId);
            let tempProduct = {};
            tempProduct.item = state[action.payload.currentItemId].item;
            tempProduct.quantity = action.payload.newQuantity
            console.log(tempProduct);
            state.splice(action.payload.currentItemId, 1, tempProduct);
            
            console.log(state)
            return state
        default: 
            return state;
    }

}


export default userCart;