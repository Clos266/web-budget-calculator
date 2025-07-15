import InputValidation from "./InputValidation";

const Form = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 border border-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600">
          Demanar pressupost
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          <InputValidation type="text" id="name" placeholder="Nom" />
          <InputValidation type="Number" id="telefon" placeholder="Telèfon" />
          <InputValidation type="email" id="email" placeholder="Email" />
        </div>
      </div>
    </div>
  );
};

export default Form;
