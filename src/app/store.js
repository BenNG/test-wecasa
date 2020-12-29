import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./reducers/basket";
import { universeSlice } from "./reducers/universe";
import { bookingSlice } from "./reducers/booking";

export default configureStore({
  devTools: true,
  reducer: {
    universe: universeSlice.reducer,
    basket: basketSlice.reducer,
    booking: bookingSlice.reducer,
  },
});
