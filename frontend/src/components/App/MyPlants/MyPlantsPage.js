/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Collection } from "./Collection/Collection";
import { Tasks } from "./Tasks/Tasks";
import { getCollection } from "../../../CollectionData";
import { useState, useEffect } from "react";

export const MyPlantsPage = () => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const myCollection = getCollection();
    setCollection(myCollection);
  }, []);

  return (
    <div
      css={css`
        height: calc(100vh - 105px - 6rem);
        padding: 1rem 3rem;
        background-color: #ede8e2;
      `}
    >
      <div
        css={css`
          height: 100%;
          display: grid;
          grid-template-columns: 2fr 4fr;
          grid-template-rows: 2rem auto;
          grid-gap: 1rem 3rem;
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
            font-family: "Maitree", serif;
            color: #5ba996;
            font-size: 1.8rem;
          `}
        >
          Tasks
        </div>
        <Collection collection={collection} />
        <Tasks collection={collection} />
      </div>
    </div>
  );
};
