const mockCollection = [
  {
    collectionPlantId: 1,
    commonName: "Satin Pothos",
    scientificName: "Scindapsus Pictus",
    variety: "",
    nickname: "",
    notes: "",
    imageUrl:
      "C:\\Users\\bryn.dukes\\source\\repos\\Folium\\mockdata\\images\\scindapsus-pictus.jpg",
  },
  {
    collectionPlantId: 2,
    commonName: "Swiss Cheese Plant Long",
    scientificName: "Monstera Deliciosa",
    variety: "",
    nickname: "",
    notes: "",
    imageUrl:
      "C:\\Users\\bryn.dukes\\source\\repos\\Folium\\mockdata\\images\\monstera-deliciosa.png",
  },
  {
    collectionPlantId: 3,
    commonName: "Peace Lily",
    scientificName: "Spathiphyllum wallisii",
    variety: "",
    nickname: "",
    notes: "",
    imageUrl:
      "C:\\Users\\bryn.dukes\\source\\repos\\Folium\\mockdata\\images\\monstera-deliciosa.png",
  },
  {
    collectionPlantId: 4,
    commonName: "Rubber Plant",
    scientificName: "Ficus Elastica",
    variety: "",
    nickname: "",
    notes: "",
    imageUrl:
      "C:\\Users\\bryn.dukes\\source\\repos\\Folium\\mockdata\\images\\monstera-deliciosa.png",
  },
  {
    collectionPlantId: 5,
    commonName: "Crocodile Fern",
    scientificName: "Microsorum musifolium",
    variety: "",
    nickname: "",
    notes: "",
    imageUrl:
      "C:\\Users\\bryn.dukes\\source\\repos\\Folium\\mockdata\\images\\monstera-deliciosa.png",
  },
  {
    collectionPlantId: 6,
    commonName: "Satin Pothos",
    scientificName: "Scindapsus Pictus",
    variety: "",
    nickname: "",
    notes: "",
    imageUrl:
      "C:\\Users\\bryn.dukes\\source\\repos\\Folium\\mockdata\\images\\scindapsus-pictus.jpg",
  },
  {
    collectionPlantId: 7,
    commonName: "Swiss Cheese Plant",
    scientificName: "Monstera Deliciosa",
    variety: "",
    nickname: "",
    notes: "",
    imageUrl:
      "C:\\Users\\bryn.dukes\\source\\repos\\Folium\\mockdata\\images\\monstera-deliciosa.png",
  },
  {
    collectionPlantId: 8,
    commonName: "Peace Lily",
    scientificName: "Spathiphyllum wallisii",
    variety: "",
    nickname: "",
    notes: "",
    imageUrl:
      "C:\\Users\\bryn.dukes\\source\\repos\\Folium\\mockdata\\images\\monstera-deliciosa.png",
  },
  {
    collectionPlantId: 9,
    commonName: "Rubber Plant",
    scientificName: "Ficus Elastica",
    variety: "",
    nickname: "",
    notes: "",
    imageUrl:
      "C:\\Users\\bryn.dukes\\source\\repos\\Folium\\mockdata\\images\\monstera-deliciosa.png",
  },
  {
    collectionPlantId: 10,
    commonName: "Crocodile Fern",
    scientificName: "Microsorum musifolium",
    variety: "",
    nickname: "",
    notes: "",
    imageUrl:
      "C:\\Users\\bryn.dukes\\source\\repos\\Folium\\mockdata\\images\\monstera-deliciosa.png",
  },
];

//TODO: Once API is added, set these up to call API and add error handling.
export const getCollection = () => {
  return mockCollection;
};

export const addPlant = (plant) => {
  const collectionPlantId =
    Math.max(...mockCollection.map((p) => p.collectionPlantId)) + 1;
  const newPlant = {
    ...plant,
    collectionPlantId,
  };
  mockCollection.push(newPlant);
};

export const getPlant = (id) => {
  return mockCollection.filter((p) => p.collectionPlantId === id);
};
