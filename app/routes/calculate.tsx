import React, { useState } from "react";
import Card from "~/components/Card/Card";
import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
import Form from "~/components/Validation/Form";
import Budget from "~/components/BudgetList/BudgetList";

type SavedBudget = {
  price: number;
  formData: {
    name?: string;
    email?: string;
    telefon?: string;
  };
  selectedServices: {
    seo: boolean;
    ads: boolean;
    web: boolean;
  };
  paginas: number;
  llenguatges: number;
};

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

      <div className="border border-red-500 flex flex-col items-center justify-center ">
        <Card
          title="Seo"
          name="seo"
          description="descripcion de seo"
          price={seoPrice}
          handleClick={handleClick}
          selected={selectedServices.seo}
        />
        <Card
          title="Ads"
          name="ads"
          description="descripcion de adds"
          price={adsPrice}
          handleClick={handleClick}
          selected={selectedServices.ads}
        />
        <Card
          title="Web"
          name="web"
          description="descripcion de web"
          price={webPrice}
          handleClick={handleClick}
          esEspesial={true}
          paginas={numPaginas}
          llenguatges={numLlenguatges}
          setPaginas={setNumPaginas}
          setLlenguatges={setNumLlenguatges}
          selected={selectedServices.web}
        />
        <p>total: {price}</p>
      </div>
      <Form onSubmitForm={handleFormSubmit} />
      <Budget budgets={budgets} />
      <Footer />
    </>
  );
}
