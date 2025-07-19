import React, { useState } from "react";
import InputNumber from "../InputNumber/InputNumber";
import Popup from "../PopUp/PopUp";
import { FiInfo } from "react-icons/fi";
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
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupDescription, setPopupDescription] = useState("");

  const handlePopup = (title: string, description: string) => {
    setPopupOpen(true);
    setPopupDescription(description);
    setPopupTitle(title);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 p-6 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold ">{props.title}</h3>
          <h4 className="text-base sm:text-lg text-gray-500 font-medium mt-2">
            {props.description}
          </h4>
        </div>

        <div className="flex items-center justify-center flex-1 mt-4 sm:mt-0">
          <h6 className="text-2xl font-bold ">{props.price}€</h6>
        </div>

        <div className="flex flex-col items-end flex-1 mt-4 sm:mt-0 gap-4">
          <div className="flex items-center gap-2">
            <input
              className="accent-blue-600 w-5 h-5"
              type="checkbox"
              name={props.name}
              value={props.price}
              id={props.title}
              onChange={props.handleClick}
              checked={props.selected}
            />
            <label className="text-sm  font-medium" htmlFor="checkboxDefault">
              afegir
            </label>
          </div>

          {props.esEspesial && (
            <div className="space-y-4 ">
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    handlePopup(
                      "Número de pàgines",
                      "Afegeix les pàgines del teu projecte, cadascuna tindra un preu de 30€"
                    )
                  }
                  className="hover:text-blue-500"
                  aria-label="Mostrar info pàgines"
                >
                  <FiInfo className="inline mr-1" />
                </button>
                <p className="text-sm w-20">Pàgines</p>
                <InputNumber
                  value={props.paginas || 0}
                  onChange={props.setPaginas!}
                />
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    handlePopup(
                      "Número de llenguatges",
                      "Afegeix els llenguatges del teu projecte, cadascu tindra un preu de 30€"
                    )
                  }
                  className=" hover:text-blue-500"
                  aria-label="Mostrar info llenguatges"
                >
                  <FiInfo className="inline mr-1" />
                </button>
                <p className="text-sm w-20">Llenguatges</p>
                <InputNumber
                  value={props.llenguatges || 0}
                  onChange={props.setLlenguatges!}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <Popup
        isOpen={isPopupOpen}
        onClose={() => setPopupOpen(false)}
        title={popupTitle}
        description={popupDescription}
      />
    </div>
  );
};

export default Card;
