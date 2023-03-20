import { useFetchMaps } from "../hooks/useFetchMaps";
import { MapItem } from "./MapItem";
import { NavBar } from "./NavBar";

export const MapGrid = () => {
  const { maps } = useFetchMaps();
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-4 gap-4 p-10 bg-slate-700">
        {maps.map((item) => (
          <div>
            <MapItem key={item.img} {...item} />
          </div>
        ))}
      </div>
    </>
  );
};
