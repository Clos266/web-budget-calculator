import React from "react";

type CardProps = {
  title: string;
  description: string;
  price: string | number;
  handleClick: (event: any) => void;
  esEspesial?: boolean;
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
          value={props.price}
          id={props.title}
          onClick={props.handleClick}
        />
        <label className="text-blue-600" htmlFor="checkboxDefault">
          afegir
        </label>
      </div>
      {props.esEspesial && (
        <div className="text-blue-900">
          <p>pepin</p>
          <input type="number" placeholder="priminn" />
          <p>pepon</p>
          <input type="number" />
        </div>
      )}
    </div>
  );
};

export default Card;
