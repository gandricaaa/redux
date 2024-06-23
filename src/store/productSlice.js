import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: 'product',
    initialState: {
        allProducts : [],
        isLoading : false,
        cart : []
    },
    reducers: {
        saveProductAction  : (state,action) => {
            state.allProducts = action.payload
            state.isLoading = true;
        },
        saveInCartAction : (state,action) =>{
                 
            state.cart.push(action.payload)
        }
    }
})

export const {saveProductAction,saveInCartAction} = productSlice.actions
export default productSlice.reducer;