const WorkCard = ({ image }) => {
  return (
    <div className="w-full h-full rounded-2xl bg-gray-200 flex items-center justify-center text-4xl font-bold bg-transparent">
        <img src={image} className="rounded-xl" alt="" />
    </div>
  );
};

export default WorkCard;
