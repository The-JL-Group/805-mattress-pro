function InputField(props) {
  const { handleChange, label, name, value } = props;

  return (
    <div className="relative mb-4">
      <label htmlFor={name} className="leading-7 text-sm text-gray-600">
        {label}
      </label>

      <input
        type="type"
        name={name}
        required
        onChange={handleChange}
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      ></input>
    </div>
  );
}

export default InputField;
