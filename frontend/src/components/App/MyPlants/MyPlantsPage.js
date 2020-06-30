/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Collection } from "./Collection/Collection";
import { Tasks } from "./Tasks/Tasks";
import { getCollection } from "../../../CollectionData";
import { useState, useEffect } from "react";
import { SearchBar } from "./Collection/SearchBar";

export const MyPlantsPage = () => {
  const [collection, setCollection] = useState([]);

  const [filterText, setFilterText] = useState("");

  const handleFilterTextChange = (e) => {
    setFilterText(e.currentTarget.value.toLowerCase());
  };

  useEffect(() => {
    const myCollection = getCollection();
    setCollection(myCollection);
  }, []);

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
          grid-template-columns: 4fr 7fr;
          grid-template-rows: 2rem auto;
          grid-gap: 1rem 3rem;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            width: 100%;
          `}
        >
          <div
            css={css`
              font-family: "Maitree", serif;
              color: #5ba996;
              font-size: 1.8rem;
            `}
          >
            Collection
          </div>
          <div
            css={css`
              margin-right: 0.5rem;
            `}
          >
            <SearchBar
              filterText={filterText}
              handleFilterTextChange={handleFilterTextChange}
            />
          </div>
        </div>
        <div
          css={css`
            font-family: "Maitree", serif;
            color: #5ba996;
            font-size: 1.8rem;
          `}
        >
          Tasks
        </div>
        <Collection collection={collection} filterText={filterText} />
        <Tasks collection={collection} />
      </div>
    </div>
  );
};
