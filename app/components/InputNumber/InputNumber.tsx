type InputNumberProps = {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
};

const InputNumber = ({ value, onChange, min = 0 }: InputNumberProps) => {
  const increment = () => onChange(value + 1);
  const decrement = () => onChange(Math.max(min, value - 1));
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    onChange(Math.max(min, isNaN(newValue) ? min : newValue));
  };

  return (
    <div className="inline-block border border-gray-300 rounded-md px-2 py-1 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={decrement}
          aria-label="Decrease"
          className="px-2 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
        >
          -
        </button>
        <input
          type="number"
          value={value}
          min={min}
          onChange={handleInputChange}
          className="w-10 text-center border-none focus:ring-0 bg-transparent text-gray-800 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
        />
        <button
          type="button"
          onClick={increment}
          aria-label="Increase"
          className="px-2 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default InputNumber;
