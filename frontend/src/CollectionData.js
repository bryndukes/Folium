const mockCollection = [
  {
    collectionPlantId: 1,
    commonName: "Satin Pothos",
    scientificName: "Scindapsus Pictus",
    variety: "",
    nickname: "",
    notes:
      "To propogate, cut the end of a vine just above a node, leaving 2 or 3 leaves on the cutting, then leave cutting in water until well rooted. When potting props into soil, keep soil damp to begin with to help adaptation",
    imageUrl:
      "C:\\Users\\bryn.dukes\\source\\repos\\Folium\\mockdata\\images\\scindapsus-pictus.jpg",
    daysBetweenWatering: 12,
    lastWatered: new Date(2020, 6, 16),
    daysBetweenFertilizing: 13,
    lastFertilized: new Date(2020, 6, 16),
    monthsBetweenRepotting: 12,
    lastRepotted: new Date(2020, 6, 12),
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

export const getPlant = (id) => {
  return mockCollection.filter((p) => p.collectionPlantId === id);
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

export const updatePlant = (updatedPlant) => {
  let i = mockCollection.findIndex(
    (p) => p.collectionPlantId === updatedPlant.collectionPlantId
  );
  if (mockCollection[i]) {
    mockCollection[i] = updatedPlant;
  } else {
    //TODO Error handling
  }
};

export const deletePlant = (collectionPlantId) => {
  let i = mockCollection.findIndex(
    (p) => p.collectionPlantId === collectionPlantId
  );
  mockCollection.splice(i, 1);
};

//TODO: Combine these
export const calculateDaysSinceWatering = ({ lastWatered }) => {
  const timeSinceWatering = Date.now() - lastWatered.getTime();
  const daysSinceWatering = Math.floor(timeSinceWatering / (1000 * 3600 * 24));
  return daysSinceWatering;
};
export const calculateNextWatering = (
  { daysBetweenWatering },
  daysSinceWatering
) => {
  return daysBetweenWatering - daysSinceWatering;
};

export const calculateDaysSinceFertilizing = ({ lastFertilized }) => {
  const timeSinceFertilizing = Date.now() - lastFertilized.getTime();
  const daysSinceFertilizing = Math.floor(
    timeSinceFertilizing / (1000 * 3600 * 24)
  );
  return daysSinceFertilizing;
};
export const calculateNextFertilizing = (
  { daysBetweenFertilizing },
  daysSinceFertilizing
) => {
  return daysBetweenFertilizing - daysSinceFertilizing;
};

export const calculateMonthsSinceRepotting = ({ lastRepotted }) => {
  const today = new Date();
  return (
    today.getMonth() -
    lastRepotted.getMonth() +
    12 * (today.getFullYear() - lastRepotted.getFullYear())
  );
};
export const calculateNextRepotting = (
  { monthsBetweenRepotting },
  monthsSinceRepotting
) => {
  return monthsBetweenRepotting - monthsSinceRepotting;
};
