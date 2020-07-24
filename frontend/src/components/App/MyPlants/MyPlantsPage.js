/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Collection } from "./Collection/Collection";
import { CollectionHeader } from "./Collection/CollectionHeader";
import { AddPlantHeader } from "./AddPlant/AddPlantHeader";
import { Tasks } from "./Tasks/Tasks";
import { getCollection } from "../../../CollectionData";
import { useState, useEffect } from "react";
import { AddPlantForm } from "./AddPlant/AddPlantForm";
import { PlantProfileHeader } from "./PlantProfile/PlantProfileHeader";
import { PlantProfile } from "./PlantProfile/PlantProfile";

export const MyPlantsPage = () => {
  const [showAddNewPlant, setShowAddNewPlant] = useState(false);
  const [showPlantProfile, setShowPlantProfile] = useState(false);
  const [collection, setCollection] = useState([]);
  const [plant, setPlant] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);

  //TODO: FIgure out if all these event handlers which change the same state should be combined
  const handleClickNewPlantButton = () => {
    setShowAddNewPlant(true);
  };
  const handleClickDiscardNewPlantButton = () => {
    //TODO: potentially add a confirmation box here?
    setShowAddNewPlant(false);
  };
  const handleClickPlantProfileBackButton = () => {
    setShowPlantProfile(false);
  };
  const handleNewPlantAdded = () => {
    setShowAddNewPlant(false);
  };
  const handlePlantDeleted = () => {
    setShowPlantProfile(false);
  };
  const handlePlantUpdated = () => {
    setShowPlantProfile(false);
  };

  const handleFilterTextChange = (e) => {
    setFilterText(e.currentTarget.value.toLowerCase());
  };

  const handleSearchButtonClick = () => {
    setFilterText("");
    setShowSearchBar(showSearchBar ? false : true);
  };

  const handlePlantClick = (plantId) => {
    const plant = collection.filter(
      (plant) => plant.collectionPlantId === plantId
    )[0];
    setPlant(plant);
    setShowPlantProfile(true);
  };

  useEffect(() => {
    const myCollection = getCollection();
    setCollection(myCollection);
  }, []);

  let leftHeader;
  if (showPlantProfile) {
    leftHeader = (
      <PlantProfileHeader
        handleClickPlantProfileBackButton={handleClickPlantProfileBackButton}
      />
    );
  } else if (showAddNewPlant) {
    leftHeader = (
      <AddPlantHeader
        handleClickDiscardNewPlantButton={handleClickDiscardNewPlantButton}
      />
    );
  } else {
    leftHeader = (
      <CollectionHeader
        filterText={filterText}
        handleFilterTextChange={handleFilterTextChange}
        showSearchBar={showSearchBar}
        handleSearchButtonClick={handleSearchButtonClick}
        handleClickNewPlantButton={handleClickNewPlantButton}
      />
    );
  }

  let leftComponent;
  if (showPlantProfile) {
    leftComponent = (
      <PlantProfile
        selectedPlant={plant}
        handlePlantUpdated={handlePlantUpdated}
        handlePlantDeleted={handlePlantDeleted}
      />
    );
  } else if (showAddNewPlant) {
    leftComponent = <AddPlantForm handleNewPlantAdded={handleNewPlantAdded} />;
  } else {
    leftComponent = (
      <Collection
        collection={collection}
        filterText={filterText}
        handlePlantClick={handlePlantClick}
      />
    );
  }

  return (
    <div
      css={css`
        height: calc(100vh - 12rem);
        padding: 1rem 3rem;
        background-color: #ede8e2;
      `}
    >
      <div
        css={css`
          height: inherit;
          display: grid;
          grid-template-columns: minmax(330px, 4fr) 7fr;
          grid-template-rows: 2rem auto;
          grid-gap: 1rem 3rem;
        `}
      >
        {leftHeader}
        <div
          css={css`
            font-family: "Maitree", serif;
            color: #5ba996;
            font-size: 1.8rem;
          `}
        >
          Tasks
        </div>
        {leftComponent}
        <Tasks collection={collection} />
      </div>
    </div>
  );
};
