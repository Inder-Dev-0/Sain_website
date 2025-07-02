const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-10 md:rounded-xl rounded-2xl border-2 border-neutral-300 shadow-lg hover:border-r-5 hover:border-b-5 hover:border-neutral-500  transition-all min-h-[200px] flex flex-col gap-3">
      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl text-gray-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default ServiceCard;
