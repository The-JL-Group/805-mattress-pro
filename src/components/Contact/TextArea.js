function TextArea(props) {
  // Props
  const { handleChange, label, name, value } = props;

  return (
    <div className="relative mb-4">
      <label htmlFor={name} className="leading-7 text-sm text-gray-600">
        {label}
      </label>

      <textarea
        onChange={handleChange}
        name={name}
        value={value}
        required
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
      ></textarea>
    </div>
  );
}

export default TextArea;
