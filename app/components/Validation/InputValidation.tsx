type InputProps = {
  type: React.HTMLInputTypeAttribute;
  id: string;
  placeholder: string;
};

const InputValidation = (props: InputProps) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <input
        id={props.id}
        type={props.type}
        className="bg-white text-blue-600 w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputValidation;
