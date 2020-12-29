import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { wecasaApi } from "../../tech/api";

export const fetchUniverse = createAsyncThunk(
  "universe/fetchUniverse",
  async () => {
    const response = await wecasaApi.get("/universe");
    return response.data;
  }
);

// Then, handle actions in your reducers:
export const universeSlice = createSlice({
  name: "universe",
  initialState: {
    categories: [],
    reference: "",
    title: "",
    status: "idle",
    currentRequestId: undefined,
    error: null,
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchUniverse.pending]: (state, action) => {
      if (state.status === "idle") {
        state.status = "pending";
        state.currentRequestId = action.meta.requestId;
      }
    },
    [fetchUniverse.fulfilled]: (state, action) => {
      const { requestId } = action.meta;
      if (state.status === "pending" && state.currentRequestId === requestId) {
        state.status = "idle";
        state.categories = [...action.payload.categories];
        state.currentRequestId = undefined;
      }
    },
    [fetchUniverse.rejected]: (state, action) => {
      const { requestId } = action.meta;
      if (state.status === "pending" && state.currentRequestId === requestId) {
        state.status = "idle";
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    },
  },
});
