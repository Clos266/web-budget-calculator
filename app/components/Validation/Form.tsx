import InputValidation from "./InputValidation";
import { useForm, FormProvider } from "react-hook-form";
import { GrMail } from "react-icons/gr";

const Form = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container"
      >
        <div className="container mx-auto mt-10 px-4">
          <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600">
              Demanar pressupost
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <InputValidation
                type="text"
                id="name"
                placeholder="Nom"
                validation={{
                  required: {
                    value: true,
                    message: "el nom es necessari",
                  },
                }}
              />
              <InputValidation
                type="Number"
                id="telefon"
                placeholder="Telèfon"
                validation={{
                  required: {
                    value: true,
                    message: "el Telèfon es necessari",
                  },
                  minLength: {
                    value: 6,
                    message: "com a minim ha de tenir sis nombres",
                  },
                }}
              />
              <InputValidation
                type="email"
                id="email"
                placeholder="Email"
                validation={{
                  required: {
                    value: true,
                    message: "Aquest camp és obligatori",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Format d'email invàlid",
                  },
                }}
              />
              <button
                onClick={onSubmit}
                className="flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
              >
                <GrMail />
                Sol·licitar pressupost ➔
              </button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
