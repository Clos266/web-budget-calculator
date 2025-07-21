import React, { useState } from "react";
import Card from "~/components/Card/Card";
import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
import Form from "~/components/Validation/Form";
import BudgetList from "~/components/BudgetList/BudgetList";
import type { SavedBudget } from "~/types/SavedBudget";

export default function Calculate() {
  const [budgets, setBudgets] = useState<SavedBudget[]>([]);
  const seoPrice = 300;
  const adsPrice = 400;
  const webPrice = 500;

  const [total, setTotal] = useState(0);
  const [numPaginas, setNumPaginas] = useState(0);
  const [numLlenguatges, setNumLlenguatges] = useState(0);
  const [formData, setFormData] = useState({});
  const [selectedServices, setSelectedServices] = useState({
    seo: false,
    ads: false,
    web: false,
  });
  const [hasDisount, setHasDiscount] = useState(false);

  const handleFormSubmit = (data: any) => {
    setFormData(data);

    const newBudget: SavedBudget = {
      totalPlusUltra,
      formData: data,
      selectedServices,
      paginas: numPaginas,
      llenguatges: numLlenguatges,
      date: new Date().toISOString(),
    };
    setBudgets((prev) => [...prev, newBudget]);

    setSelectedServices({ seo: false, ads: false, web: false });
    setNumPaginas(0);
    setNumLlenguatges(0);
    setTotal(0);
  };

  const extraPrice = (numPaginas + numLlenguatges) * 30;
  console.log("çççextra price", extraPrice);

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("çç numeros", { numLlenguatges, numPaginas });
    const { name, checked, value } = event.target;

    setSelectedServices((prev) => ({
      ...prev,
      [name]: checked,
    }));

    const result = checked ? total + parseInt(value) : total - parseInt(value);

    setTotal(result);

    console.log("çççresult", result);
  };
  const totalPlusUltra = hasDisount
    ? (total + extraPrice) * 0.8
    : total + extraPrice;

  let discount = (e: { target: { checked: any } }) => {
    const { checked } = e.target;
    console.log("ççç checked", checked);

    setHasDiscount(checked);
  };
  return (
    <>
      <Header />
      <div
        className="relative flex-grow flex flex-col items-center justify-center p-6 text-center space-y-8
  bg-gradient-to-br from-blue-50 via-white to-blue-100
  dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
  overflow-hidden
"
      >
        <div className="p-6 max-w-4xl mx-auto space-y-8">
          <div>
            {" "}
            <input
              className="accent-blue-600 w-5 h-5"
              type="checkbox"
              onChange={discount}
            />
            <label className="text-sm  font-medium" htmlFor="checkboxDefault">
              20%
            </label>
          </div>
          <section className="space-y-6">
            <Card
              title="Seo"
              name="seo"
              description="Optimització per a motors de cerca per millorar la visibilitat."
              price={seoPrice}
              handleClick={handleClick}
              selected={selectedServices.seo}
            />
            <Card
              title="Ads"
              name="ads"
              description="Gestió de campanyes publicitàries per arribar al teu públic objectiu."
              price={adsPrice}
              handleClick={handleClick}
              selected={selectedServices.ads}
            />
            <Card
              title="Web"
              name="web"
              description="Disseny i desenvolupament de pàgines web personalitzades."
              price={hasDisount ? webPrice * 0.8 : webPrice}
              handleClick={handleClick}
              esEspesial={true}
              paginas={numPaginas}
              llenguatges={numLlenguatges}
              setPaginas={setNumPaginas}
              setLlenguatges={setNumLlenguatges}
              selected={selectedServices.web}
              hasDiscount={hasDisount}
            />
            <p className="text-center font-semibold text-lg ">
              Preu total: {totalPlusUltra} €
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
