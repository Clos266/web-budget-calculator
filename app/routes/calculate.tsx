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
  const extraPrice = (numPaginas + numLlenguatges) * 30;
  const handleFormSubmit = (data: any) => {
    setFormData(data);

    const newBudget: SavedBudget = {
      price,
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

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, value } = event.target;

    setSelectedServices((prev) => ({
      ...prev,
      [name]: checked,
    }));

    const result = checked ? total + parseInt(value) : total - parseInt(value);

    setTotal(result);
  };
  const price = total + extraPrice;

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
              price={webPrice}
              handleClick={handleClick}
              esEspesial={true}
              paginas={numPaginas}
              llenguatges={numLlenguatges}
              setPaginas={setNumPaginas}
              setLlenguatges={setNumLlenguatges}
              selected={selectedServices.web}
            />
            <p className="text-center font-semibold text-lg ">
              Preu total: {price} €
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
