import InputValidation from "./InputValidation";
import { useForm, FormProvider } from "react-hook-form";

interface FormProps {
  onSubmitForm: (data: any) => void;
}

const Form = ({ onSubmitForm }: FormProps) => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    // console.log("<<<<data", data);
    onSubmitForm(data);
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        className="p-4 max-w-4xl mx-auto"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200">
          <h2 className="text-xl text-center mb-6   font-semibold">
            Demanar pressupost
          </h2>

          <div className="flex flex-col md:flex-row gap-4 md:items-end">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow">
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
                    message: "l'email es necessari",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Format d'email invàlid",
                  },
                }}
              />
            </div>
            <button
              onClick={onSubmit}
              className="bg-blue-600 text-white py-3 px-5 rounded flex items-center justify-center gap-2 hover:bg-blue-700 transition duration-300"
              type="submit"
            >
              Pressuposta➔
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
