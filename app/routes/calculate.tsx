import React, { useState } from "react";
import Card from "~/components/Card/Card";
import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
import Form from "~/components/Validation/Form";
import InputValidation from "~/components/Validation/InputValidation";

export default function Calculate() {
  const seoPrice = 300;
  const adsPrice = 400;
  const webPrice = 500;

  const [total, setTotal] = useState(0);
  const [numPaginas, setNumPaginas] = useState(0);
  const [numLlenguatges, setNumLlenguatges] = useState(0);

  const extraPrice = (numPaginas + numLlenguatges) * 30;

  // console.log("<<extraPrice", extraPrice);
  // console.log("<<<paginas", numPaginas);
  // console.log("<<<llengua", numLlenguatges);
  // console.log("<<finalTotal", total + extraPrice);
  const handleClick = (event: any) => {
    let result;
    // console.log("<<<event ", event);

    if (event.target.checked === true) {
      result = total + parseInt(event.target.value);
      setTotal(result);
      // console.log("<<suma ", result);
    } else if (event.target.checked === false) {
      result = total - parseInt(event.target.value);
      setTotal(result);
      // console.log("<<resta ", result);
    }
  };

  return (
    <>
      <Header />

      <div className="border border-red-500 flex flex-col items-center justify-center ">
        <Card
          title="Seo"
          description="descripcion de seo"
          price={seoPrice}
          handleClick={handleClick}
        />
        <Card
          title="Ads"
          description="descripcion de adds"
          price={adsPrice}
          handleClick={handleClick}
        />
        <Card
          title="Web"
          description="descripcion de web"
          price={webPrice}
          handleClick={handleClick}
          esEspesial={true}
          paginas={numPaginas}
          llenguatges={numLlenguatges}
          setPaginas={setNumPaginas}
          setLlenguatges={setNumLlenguatges}
        />
        <p>total: {total + extraPrice}</p>
      </div>
      <Form />
      <Footer />
    </>
  );
}
