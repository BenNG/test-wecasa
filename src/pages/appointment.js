import React, { useState } from "react";
import Layout from "../components/layout";
import { format, parseISO, isFuture, isValid } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { createBooking } from "../app/reducers/booking";
import { useHistory } from "react-router-dom";
import { basketSlice } from "../app/reducers/basket";

const isDateValidFn = (selectedDate) => {
  if (!isValid(selectedDate)) {
    return false;
  }
  const hour = selectedDate.getHours();

  return isFuture(selectedDate) && hour > 6 && hour < 22;
};

const Appointment = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const { prestations, address } = useSelector((state) => state.basket);
  const { status } = useSelector((state) => state.booking);

  const selectedDate = new Date(`${date} ${time}`);
  console.log("status", status);
  const isButtonDisabled = status === "pending" || !isDateValidFn(selectedDate);
  return (
    <Layout>
      <div className="container mx-auto  h-full ">
        <div className="h-2"></div>
        <h1 className="text-3xl">saisissez une date et un horaire</h1>
        <h2 className="text-xl text-gray-500">
          votre date doit être dans le futur
        </h2>
        <input
          value={date}
          type="date"
          onChange={(e) =>
            setDate(format(parseISO(e.target.value), "yyyy-MM-dd"))
          }
        />
        <h2 className="text-xl text-gray-500">
          votre plage horaire doit être comprise entre 7h et 22h
        </h2>
        <input
          value={time}
          type="time"
          onChange={(e) => setTime(e.target.value)}
        />
        <div className="h-10"></div>
        <button
          onClick={async () => {
            await dispatch(
              basketSlice.actions.setDate(selectedDate.toISOString())
            );

            await dispatch(
              createBooking({
                prestations: prestations.map((p) => p.reference),
                appointment: selectedDate,
                address: address,
              })
            );
            history.push("/confirmation");
          }}
          disabled={isButtonDisabled}
          className={` w-full py-3 text-white rounded-lg shadow-md ${
            isButtonDisabled ? "bg-gray-300" : "bg-orange"
          }`}
          type="button"
        >
          Prendre Rendez-vous
        </button>
      </div>
    </Layout>
  );
};
export default Appointment;
