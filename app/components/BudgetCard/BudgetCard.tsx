import React, { useState } from "react";

type BudgetCardProps = {
  name: string;
  email: string;
  phone: string | number;
  seo: string;
  ads: string;
  web: string;
  price: number;
};

const BudgetCard = (props: BudgetCardProps) => {
  return (
    <div className="bg-white rounded-lg border p-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-blue-600">{props.name}</h3>
          <p className="text-gray-600 text-sm">{props.email}</p>
          <p className="text-gray-600 text-sm">{props.phone}</p>
        </div>

        <div className="text-center">
          <h4 className="font-semibold text-blue-600">serveis contractats:</h4>
          <div className="flex justify-center gap-2 mt-1">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
              {props.seo}
            </span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
              {props.ads}
            </span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
              {props.web}
            </span>
          </div>
        </div>

        <div className="text-center md:text-right">
          <p className="font-bold text-blue-600">
            Total: <span className="text-lg">{props.price}€</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BudgetCard;
