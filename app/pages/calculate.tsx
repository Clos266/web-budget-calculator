import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
import Form from "~/components/Validation/Form";
import BudgetList from "~/components/BudgetList/BudgetList";
import { useCalculate } from "~/hooks/useCalculate";
import CalculatorSection from "~/components/calculate/calculateSection";

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
      <main
        className="relative flex-grow flex flex-col items-center justify-center p-6 text-center space-y-8
        bg-gradient-to-br from-blue-50 via-white to-blue-100
        dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        overflow-hidden"
      >
        <CalculatorSection
          hasDiscount={hasDiscount}
          toggleDiscount={toggleDiscount}
          handleClick={handleClick}
          selectedServices={selectedServices}
          numpages={numpages}
          numlanguage={numlanguage}
          setNumpages={setNumpages}
          setNumlanguage={setNumlanguage}
          total={total}
        />

        <Form onSubmitForm={handleFormSubmit} />
        <BudgetList budgets={budgets} />
      </main>
      <Footer />
    </>
  );
}
