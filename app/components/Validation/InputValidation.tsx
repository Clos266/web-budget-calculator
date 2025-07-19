import { useFormContext } from "react-hook-form";
import { MdError } from "react-icons/md";
import { findInputError, isFormInvalid } from "./utils";
import type { RegisterOptions } from "react-hook-form";

type InputProps = {
  type: React.HTMLInputTypeAttribute;
  id: string;
  placeholder: string;
  validation?: RegisterOptions;
};

const InputValidation = (props: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, props.id);
  const isInvalid = isFormInvalid(inputError);

  return (
    <div className="flex flex-col w-full gap-2">
      {isInvalid && inputError?.error && (
        <InputError message={inputError.error.message} />
      )}
      <input
        id={props.id}
        type={props.type}
        className={`bg-white dark:bg-gray-100 text-blue-500 w-full py-3 px-5 font-medium border rounded-md placeholder:opacity-60
  ${isInvalid ? "border-red-500" : "border-slate-300"}
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
`}
        placeholder={props.placeholder}
        {...register(props.id, props.validation)}
      />
    </div>
  );
};

type InputErrorProps = {
  message: string;
};

const InputError = ({ message }: InputErrorProps) => {
  return (
    <p className="flex items-center gap-1 px-2 py-1 font-semibold text-red-500 bg-red-100 rounded-md text-sm">
      <MdError />
      {message}
    </p>
  );
};

export default InputValidation;
