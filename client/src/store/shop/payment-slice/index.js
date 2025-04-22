import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  method: "",
  status: "",
  details: {},
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPaymentMethod: (state, action) => {
      state.method = action.payload;
    },
    setPaymentStatus: (state, action) => {
      state.status = action.payload;
    },
    setPaymentDetails: (state, action) => {
      state.details = action.payload;
    },
    resetPayment: () => initialState,
  },
});

export const { setPaymentMethod, setPaymentStatus, setPaymentDetails, resetPayment } = paymentSlice.actions;
export default paymentSlice.reducer;
