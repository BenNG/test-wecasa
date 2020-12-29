import { ReactComponent as Add } from "./../../../assets/svg/plus.svg";
import { ReactComponent as Cross } from "./../../../assets/svg/cross.svg";
import React from "react";
const PrestationList = ({ categories, onAddClick, onRemoveClick }) => {
  return Object.keys(categories).map((key) => {
    const { title, prestations, reference } = categories[key];
    return (
      <div key={key}>
        <div className="text-2xl py-3">{title}</div>
        <ul>
          {prestations.map((p) => (
            <li
              className="bg-white px-3 py-2 rounded-lg mt-3 flex justify-between shadow-md"
              key={`${title}${reference}${p.reference}`}
            >
              <div>
                {p.title} - {p.duration}min - {p.price / 100}€{" "}
              </div>
              <div className="flex text-gray-300">
                <Add onClick={() => onAddClick(p)} className="w-8 h-8"></Add>
                <Cross
                  onClick={() => onRemoveClick(p)}
                  className="ml-3 w-8 h-8"
                ></Cross>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  });
};

export default PrestationList;
