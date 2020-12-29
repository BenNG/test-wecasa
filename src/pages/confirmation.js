import { format, parseISO } from "date-fns";
import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/layout";
const Confirmation = () => {
  const { prestations, date, address, priceTotal, durationTotal } = useSelector(
    (state) => state.basket
  );
  return (
    <Layout>
      <div className="container mx-auto  h-full">
        <div className="h-2"></div>
        <h1 className="text-3xl">Merci d&apos;avoir utilisé Wecasa :) </h1>

        <div className="h-2"></div>

        <div>
          Rendez vous la date: {new Date(date).toLocaleDateString()} à{" "}
          {format(parseISO(date), "HH:mm ")} au {address} pour les prestations
          suivantes
          {prestations.map((p) => (
            <li
              className="bg-white px-3 py-2 rounded-lg mt-3 flex justify-between shadow-md"
              key={`${p.title}${p.reference}`}
            >
              <div>
                {p.title} - {p.duration}min - {p.price / 100}€{" "}
              </div>
            </li>
          ))}
          Le prix total des prestations sera de : {priceTotal / 100}€ pour une
          durée totale de : {durationTotal}min
        </div>
      </div>
    </Layout>
  );
};
export default Confirmation;
