import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { wecasaApi } from "../../tech/api";

export const createBooking = createAsyncThunk(
  "booking/createBooking",
  async (data) => {
    const response = await wecasaApi.post("/booking", {
      ...data,
    });
    return response.data;
  }
);

export const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    status: "idle",
    result: null,
    error: "",
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [createBooking.pending]: (state, action) => {
      if (state.status === "idle") {
        state.status = "pending";
        state.currentRequestId = action.meta.requestId;
      }
    },
    [createBooking.fulfilled]: (state, action) => {
      const { requestId } = action.meta;
      if (state.status === "pending" && state.currentRequestId === requestId) {
        state.status = "idle";
        state.result = action.payload;
        state.currentRequestId = undefined;
      }
    },
    [createBooking.rejected]: (state, action) => {
      const { requestId } = action.meta;
      if (state.status === "pending" && state.currentRequestId === requestId) {
        state.status = "idle";
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    },
  },
});
