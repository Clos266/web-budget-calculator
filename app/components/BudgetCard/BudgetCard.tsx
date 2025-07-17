import React, { useState } from "react";
import Calculate from "~/routes/calculate";

type BudgetCardProps = {
  name: string;
  email: string;
  phone: string | number;
  seo?: boolean;
  ads?: boolean;
  web?: boolean;
  price: string | number;
  paginas?: number;
  llenguatges?: number;
  date: string;
};

const BudgetCard = (props: BudgetCardProps) => {
  console.log("<<<<budgetprops", { props });
  console.log("<<<<<date prop:", props.date);
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
          <div className="flex flex-col gap-2 mt-1">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
              {props.seo && (
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  SEO
                </span>
              )}
            </span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
              {props.ads && (
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  ADS
                </span>
              )}
            </span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
              {props.web && (
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  WEB ({props.paginas} pàg. / {props.llenguatges} lleng.)
                </span>
              )}
            </span>
          </div>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm text-gray-500">
            {new Date(props.date).toLocaleDateString()}
          </p>
          <p className="font-bold text-blue-600">
            Total: <span className="text-lg">{props.price}€</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BudgetCard;
