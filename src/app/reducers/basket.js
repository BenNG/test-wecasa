import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    prestations: [],
    priceTotal: 0,
    durationTotal: 0,
  },
  reducers: {
    addPrestation: (state, action) => {
      const { prestation } = action.payload;
      state.prestations.push(prestation);
      const { durationTotal, priceTotal } = state.prestations.reduce(
        (accu, { price, duration }) => {
          accu.priceTotal = accu.priceTotal + price;
          accu.durationTotal = accu.durationTotal + duration;
          return accu;
        },
        { priceTotal: 0, durationTotal: 0 }
      );
      state.priceTotal = priceTotal;
      state.durationTotal = durationTotal;
    },
    removePrestation: (state, action) => {
      const { prestation } = action.payload;
      state.prestations = state.prestations.filter(
        (p) => prestation.reference !== p.reference
      );
      const { durationTotal, priceTotal } = state.prestations.reduce(
        (accu, { price, duration }) => {
          accu.priceTotal = accu.priceTotal + price;
          accu.durationTotal = accu.durationTotal + duration;
          return accu;
        },
        { priceTotal: 0, durationTotal: 0 }
      );
      state.priceTotal = priceTotal;
      state.durationTotal = durationTotal;
    },
  },
});
