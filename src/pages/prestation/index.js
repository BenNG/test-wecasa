import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchUniverse } from "../../app/reducers/universe";
import { basketSlice } from "../../app/reducers/basket";

import Layout from "../../components/layout";
import PrestationList from "./components/prestationList";

const Prestation = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const { categories, status, error } = useSelector((state) => state.universe);
  useEffect(() => {
    dispatch(fetchUniverse());
  }, []);

  if (status === "pending") return "...loading";
  if (error) history.push("*");

  const add = (p) =>
    dispatch(
      basketSlice.actions.addPrestation({
        prestation: p,
      })
    );

  const remove = (p) =>
    dispatch(
      basketSlice.actions.removePrestation({
        prestation: p,
      })
    );

  return (
    <Layout>
      <div className="container mx-auto  h-full">
        <div className="h-2"></div>
        <h1 className="text-3xl">Choisissez vos prestations</h1>
        <PrestationList
          onAddClick={add}
          onRemoveClick={remove}
          categories={categories}
        ></PrestationList>
      </div>
    </Layout>
  );
};
export default Prestation;
