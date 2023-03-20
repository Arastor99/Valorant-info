import { getHeroes } from "../helper/getHeroes";
import { Pjs } from "./Pjs.jsx";
import { useFetchHeroes } from "../hooks/useFetchHeroes";
import { NavBar } from "./NavBar";

export const Pj = () => {
  const { heroes } = useFetchHeroes();

  return (
    <>
      <NavBar />
      {heroes.map((item) => (
        <Pjs key={item.img} {...item} />
      ))}
    </>
  );
};
