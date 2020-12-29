import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./reducers/basket";
import { universeSlice } from "./reducers/universe";

export default configureStore({
  devTools: true,
  reducer: {
    universe: universeSlice.reducer,
    basket: basketSlice.reducer,
  },
});
