import { useState } from "react";
import InputNumber from "../InputNumber/InputNumber";
import Popup from "../PopUp/PopUp";
import { FiInfo } from "react-icons/fi";
import { useTexts } from "~/i18n";

type ServiceCardProps = {
  name: string;
  title: string;
  description: string;
  price: string | number;
  handleClick: (event: any) => void;
  isSpecial?: boolean;
  pages?: number;
  language?: number;
  setPages?: (val: number) => void;
  setLanguage?: (val: number) => void;
  selected: boolean;
  hasDiscount?: boolean;
};

const ServiceCard = (props: ServiceCardProps) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupDescription, setPopupDescription] = useState("");

  const handlePopup = (title: string, description: string) => {
    setPopupOpen(true);
    setPopupDescription(description);
    setPopupTitle(title);
  };
  const { serviceCardText } = useTexts();
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 p-6 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold">{props.title}</h3>
          <h4 className="text-base sm:text-lg text-gray-500 font-medium mt-2">
            {props.description}
          </h4>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 mt-4 sm:mt-0 text-center">
          {props.hasDiscount && (
            <div className="text-sm text-red-400 opacity-80 mb-1">
              {serviceCardText.discount}
            </div>
          )}
          <h6 className="text-2xl font-bold">{props.price}€</h6>
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
            <label className="text-sm font-medium" htmlFor="checkboxDefault">
              {serviceCardText.add}
            </label>
          </div>

          {props.isSpecial && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    handlePopup(
                      serviceCardText.popupPages.title,
                      serviceCardText.popupPages.description
                    )
                  }
                  className="hover:text-blue-500"
                  aria-label="Mostrar info pàgines"
                >
                  <FiInfo className="inline mr-1" />
                </button>
                <p className="text-sm w-20">{serviceCardText.pages}</p>
                <InputNumber
                  value={props.pages || 0}
                  onChange={props.setPages!}
                />
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    handlePopup(
                      serviceCardText.popupLanguages.title,
                      serviceCardText.popupLanguages.description
                    )
                  }
                  className="hover:text-blue-500"
                  aria-label="More info"
                >
                  <FiInfo className="inline mr-1" />
                </button>
                <p className="text-sm w-20">{serviceCardText.languages}</p>
                <InputNumber
                  value={props.language || 0}
                  onChange={props.setLanguage!}
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

export default ServiceCard;
