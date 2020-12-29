import React from "react";
import Layout from "../components/layout";
import AlgoliaPlaces from "algolia-places-react";
import { basketSlice } from "../app/reducers/basket";
import { useDispatch } from "react-redux";

const Address = () => {
  const dispatch = useDispatch();
  return (
    <Layout>
      <div className="container mx-auto  h-full">
        <div className="h-2"></div>
        <h1 className="text-3xl">Renseignez votre adresse</h1>
        <div className="h-2"></div>

        <AlgoliaPlaces
          placeholder="Write an address here"
          options={{
            appId: "plW8ZXZBQDJA",
            apiKey: "32668b4a2b342ebeb26544f27eacbab3",
          }}
          onChange={({ suggestion }) =>
            dispatch(basketSlice.actions.setAddress(suggestion.value))
          }
        />
      </div>
    </Layout>
  );
};
export default Address;
