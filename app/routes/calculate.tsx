import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
import PricingCard from "~/components/Cards/PricingCard";
import Form from "~/components/Validation/Form";
import BudgetList from "~/components/BudgetList/BudgetList";
import { useCalculate } from "~/hooks/useCalculate";
import { services } from "~/data/services";
import { calculateText } from "~/i18n/ca/calculateText";

type ServiceName = "seo" | "ads" | "web";

export default function Calculate() {
  const {
    budgets,
    selectedServices,
    hasDiscount,
    numpages,
    numlanguage,
    total,
    handleFormSubmit,
    handleClick,
    toggleDiscount,
    setNumpages,
    setNumlanguage,
  } = useCalculate();

  return (
    <>
      <Header />
      <div
        className="relative flex-grow flex flex-col items-center justify-center p-6 text-center space-y-8
        bg-gradient-to-br from-blue-50 via-white to-blue-100
        dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        overflow-hidden"
      >
        <div className="p-6 max-w-4xl mx-auto space-y-8">
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm text-gray-700">
              {calculateText.toggle.monthly}
            </span>
            <label className="relative inline-flex items-center cursorthly-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={(e) => toggleDiscount(e.target.checked)}
                checked={hasDiscount}
              />
              <div className="w-10 h-5 bg-gray-300 dark:bg-gray-700 rounded-full peer-checked:bg-blue-600 transition-colors duration-200" />
              <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-5 transition-transform duration-200" />
            </label>
            <span className="text-sm text-gray-700">
              {calculateText.toggle.yearly}
            </span>
          </div>

          <section className="space-y-6">
            {services.map((service) => (
              <PricingCard
                key={service.name}
                title={service.title}
                name={service.name}
                description={service.description}
                price={hasDiscount ? service.price * 0.8 : service.price}
                handleClick={handleClick}
                selected={selectedServices[service.name as ServiceName]}
                hasDiscount={hasDiscount}
                isSpecial={service.isSpecial}
                pages={numpages}
                language={numlanguage}
                setPages={setNumpages}
                setLanguage={setNumlanguage}
              />
            ))}
            <p className="text-center font-semibold text-lg">
              {calculateText.total(total)}
            </p>
          </section>
        </div>

        <Form onSubmitForm={handleFormSubmit} />
        <BudgetList budgets={budgets} />
      </div>
      <Footer />
    </>
  );
}
