const WorkCard = ({ image }) => {
  return (
    <div className="w-full h-full rounded-2xl bg-gray-200 shadow-2xl flex items-center justify-center text-4xl font-bold text-gray-500">
        <img src={image} className="rounded-xl" alt="" />
    </div>
  );
};

export default WorkCard;
