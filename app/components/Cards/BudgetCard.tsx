import React, { useState } from "react";
import Calculate from "~/routes/calculate";
import type { BudgetCardProps } from "~/types/BudgetCardProps";

const BudgetCard = (props: BudgetCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 p-6 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
        <div className="flex flex-col text-left sm:w-1/3">
          <h3 className="text-xl font-semibold ">{props.name}</h3>
          <p className="text-gray-500 text-sm mt-1">{props.email}</p>
          <p className="text-gray-500 text-sm">{props.phone}</p>
        </div>

        <div className="flex flex-col text-left sm:w-1/3">
          <h4 className="text-lg font-semibold  mb-2">Serveis contractats:</h4>
          <div className="flex flex-wrap gap-2">
            {props.seo && (
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                SEO
              </span>
            )}
            {props.ads && (
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                ADS
              </span>
            )}
            {props.web && (
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                WEB ({props.pages} pàg. / {props.language} lleng.)
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col items-start sm:items-end sm:w-1/3">
          <p className="text-sm text-gray-500 mb-1">
            {new Date(props.date).toLocaleDateString()}
          </p>
          <p className="text-2xl font-bold ">{props.total}€</p>
        </div>
      </div>
    </div>
  );
};

export default BudgetCard;
