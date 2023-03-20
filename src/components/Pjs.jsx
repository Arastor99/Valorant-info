export const Pjs = ({ name, description, img }) => {
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-12 gap-4 bg-zinc-50 p-1 mb-24">
      <div className="header col-span-12 rounded-lg border border-gray-300 bg-gray-600 py-8 text-center text-3xl font-bold text-neutral-300 ">
        <span>{name}</span>
      </div>
      <div className="col-span-12 rounded-lg border border-gray-500 bg-gray-200 p-32 sm:col-span-8">
        {description}
      </div>
      <div className="col-span-12 rounded-lg border border-gray-400 bg-gray-200 p-16 sm:col-span-4">
        <img src={img} classNameName="w-max h-max" />
      </div>
    </div>
  );
};
