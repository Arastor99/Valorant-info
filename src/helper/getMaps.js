export const getMaps = async () => {
  const url = "https://valorant-api.com/v1/maps";
  const resp = await fetch(url);
  const { data = [] } = await resp.json();


  const maps = data.map((info) => ({
    name: info.displayName,
    coordinates: info.coordinates,
    img: info.splash
  }));

  return maps;
};
