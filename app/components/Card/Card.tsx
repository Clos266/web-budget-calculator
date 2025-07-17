import React, { useState } from "react";
import InputNumber from "../InputNumber/InputNumber";

type CardProps = {
  name: string;
  title: string;
  description: string;
  price: string | number;
  handleClick: (event: any) => void;
  esEspesial?: boolean;
  paginas?: number;
  llenguatges?: number;
  setPaginas?: (val: number) => void;
  setLlenguatges?: (val: number) => void;
  selected: boolean;
};

const Card = (props: CardProps) => {
  return (
    <div className="max-w-md w-full bg-white rounded-lg shadow-md border p-6 mb-6 ">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-3xl font-bold mb-6 text-blue-600">{props.title}</h3>

        <h4 className="text-3xl font-bold mb-6 text-blue-600">
          {props.description}
        </h4>
      </div>
      <h6 className="text-3xl font-bold mb-6 text-blue-600 ">{props.price}€</h6>

      <div className="flex flex-raw">
        <input
          className="text-blue-600"
          type="checkbox"
          name={props.name}
          value={props.price}
          id={props.title}
          onChange={props.handleClick}
          checked={props.selected}
        />
        <label className="text-blue-600" htmlFor="checkboxDefault">
          afegir
        </label>
      </div>
      {props.esEspesial && (
        <div className="text-blue-900">
          <div className="flex flex-row items-center gap-2">
            <p>Número de pàgines</p>
            <InputNumber
              value={props.paginas || 0}
              onChange={props.setPaginas!}
            />
          </div>
          <div className="flex flex-row items-center gap-2">
            <p>Número de llenguatges</p>
            <InputNumber
              value={props.llenguatges || 0}
              onChange={props.setLlenguatges!}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
