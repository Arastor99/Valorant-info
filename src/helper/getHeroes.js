export const getHeroes = async () => {
  const url = "https://valorant-api.com/v1/agents";
  const resp = await fetch(url);
  const { data = [] } = await resp.json();


  const heroes = data.map((info) => ({
    name: info.displayName,
    description: info.description,
    img: info.bustPortrait
  }));

  return heroes;
};
