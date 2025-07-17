import React, { useState } from "react";
import Card from "~/components/Card/Card";
import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
import Form from "~/components/Validation/Form";
import Budget from "~/components/BudgetList/BudgetList";

export default function Calculate() {
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
  };

  // console.log("<<extraPrice", extraPrice);
  // console.log("<<<paginas", numPaginas);
  // console.log("<<<llengua", numLlenguatges);
  // console.log("<<finalTotal", total + extraPrice);
  const handleClick = (event: any) => {
    const { name, checked, value } = event.target;

    // Actualiza los servicios seleccionados
    setSelectedServices((prev) => ({
      ...prev,
      [name]: checked,
    }));

    // Actualiza el total
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
        />
        <Card
          title="Ads"
          name="ads"
          description="descripcion de adds"
          price={adsPrice}
          handleClick={handleClick}
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
        />
        <p>total: {price}</p>
      </div>
      <Form onSubmitForm={handleFormSubmit} />
      <Budget
        price={price}
        formData={formData}
        selectedServices={selectedServices}
        paginas={numPaginas}
        llenguatges={numLlenguatges}
      />
      <Footer />
    </>
  );
}
