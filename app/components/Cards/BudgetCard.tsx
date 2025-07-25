import type { BudgetPricingCardProps } from "~/types/BudgetCardProps";
import { formatDate } from "~/utils/format";
import { getServiceTags } from "~/utils/services";
import { useTexts } from "~/i18n";

const BudgetCard = ({
  name,
  email,
  phone,
  seo,
  ads,
  web,
  pages,
  language,
  date,
  total,
}: BudgetPricingCardProps) => {
  const serviceTags = getServiceTags({ seo, ads, web, pages, language });
  const { budgetCardText } = useTexts();
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 p-6 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
        <div className="flex flex-col text-left sm:w-1/3">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-500 text-sm mt-1">{email}</p>
          <p className="text-gray-500 text-sm">{phone}</p>
        </div>

        <div className="flex flex-col text-left sm:w-1/3">
          <h4 className="text-lg font-semibold mb-2">
            {budgetCardText.servicesTitle}
          </h4>
          <div className="flex flex-wrap gap-2">
            {serviceTags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start sm:items-end sm:w-1/3">
          <p className="text-sm text-gray-500 mb-1">{formatDate(date)}</p>
          <p className="text-2xl font-bold">{total}€</p>
        </div>
      </div>
    </div>
  );
};

export default BudgetCard;
