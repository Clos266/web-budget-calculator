import InputValidation from "./InputValidation";
import { useForm, FormProvider } from "react-hook-form";
import { SITE_NAME } from "~/constants/site";
import { useTexts } from "~/i18n";

interface FormProps {
  onSubmitForm: (data: any) => void;
}

const Form = ({ onSubmitForm }: FormProps) => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    onSubmitForm(data);
    methods.reset();
  });
  const { formText } = useTexts();
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} noValidate className="p-4 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200">
          <h2 className="text-xl text-center mb-6 font-semibold">
            {formText.title}
          </h2>

          <div className="flex flex-col md:flex-row gap-4 md:items-end">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow">
              <InputValidation
                type="text"
                id="name"
                placeholder={formText.placeholders.name}
                validation={{
                  required: {
                    value: true,
                    message: formText.errors.name,
                  },
                }}
              />
              <InputValidation
                type="tel"
                id="phone"
                placeholder={formText.placeholders.phone}
                validation={{
                  required: {
                    value: true,
                    message: formText.errors.phoneRequired,
                  },
                  minLength: {
                    value: 6,
                    message: formText.errors.phoneMin,
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: formText.errors.phoneInvalid,
                  },
                }}
              />
              <InputValidation
                type="email"
                id="email"
                placeholder={formText.placeholders.email}
                validation={{
                  required: {
                    value: true,
                    message: formText.errors.emailRequired,
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: formText.errors.emailInvalid,
                  },
                }}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-5 rounded flex items-center justify-center gap-2 hover:bg-blue-700 transition duration-300"
            >
              {formText.button} {SITE_NAME}
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
