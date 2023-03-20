import { useEffect, useState } from "react";
import { getHeroes } from "../helper/getHeroes";

export const useFetchHeroes = () =>{
    const [heroes, setHeroes] = useState([]);

    const getHeroes1 = async () =>  {
        const newHeroe = await getHeroes();
        setHeroes(newHeroe);
    }
    useEffect(() => {
        getHeroes1();
    }, []);

return({heroes})
}