export const MapItem = ({ name, coordinates, img }) => {
  return (
    <div class="flex justify-center">
      <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-[#5C5C5C]">
        <a href="#!">
          <img class="rounded-t-lg" src={img} alt="" />
        </a>
        <div class="p-6">
          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {name}
          </h5>
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {coordinates}
          </p>
        </div>
      </div>
    </div>
  );
};
