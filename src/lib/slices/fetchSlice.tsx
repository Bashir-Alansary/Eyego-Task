import { OrderType } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateType {
    loading: boolean,
    error: boolean,
    orders: OrderType[],
}

const initialState: StateType = {
    loading: true,
    error: false,
    orders: [],
}

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async()=> {
    const res = await fetch('http://localhost:5000/orders');
    return res.json();
})


export const fetchSlice = createSlice({
    name: 'fetchSlice',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {

        builder.addCase(fetchOrders.pending, (state) => {
            state.loading = true;
          });

        builder.addCase(fetchOrders.fulfilled, (state, action) => {
          state.loading = false;
          state.orders=action.payload;
        });

        builder.addCase(fetchOrders.rejected, (state) => {
            state.loading = false;
            state.error = true;
          });

      },
})


export const {  } = fetchSlice.actions;
export default fetchSlice.reducer;