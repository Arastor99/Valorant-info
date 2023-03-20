import { useEffect, useState } from "react";
import { getMaps } from "../helper/getMaps";

export const useFetchMaps = () =>{
    const [maps, setMaps] = useState([]);

    const getMaps1 = async () =>  {
        const newMap = await getMaps();
        setMaps(newMap);
    }
    useEffect(() => {
        getMaps1();
    }, []);

return({maps})
}