type InputProps = {
  label: string;
  type: React.HTMLInputTypeAttribute;
  id: string;
  placeholder: string;
};

const InputValidation = (props: InputProps) => {
  return (
    <div className="max-w-md w-full bg-white rounded-lg shadow-md border p-6 mb-6 ">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <label
          htmlFor={props.id}
          className="text-2xl font-bold mb-6 text-blue-600"
        >
          {props.label}
        </label>
      </div>
      <input
        id={props.id}
        type={props.type}
        className=" text-blue-600 w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputValidation;
