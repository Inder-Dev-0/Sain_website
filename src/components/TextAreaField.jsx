const TextAreaField = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <textarea
        placeholder={placeholder}
        rows={6}
        className="border border-gray-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
      ></textarea>
    </div>
  );
};

export default TextAreaField;