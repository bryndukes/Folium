/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import monsteraDeliciosa from "../../../../mockdata/images/monstera-deliciosa.png";
import { PlantCard } from "../styled";

export const CollectionItem = ({ collectionItem, handlePlantClick }) => {
  return (
    <div
      className="collectionItem"
      key={collectionItem.collectionPlantId}
      css={css`
        padding: 1rem 0 1rem 0;
        justify-self: center;
        scroll-snap-align: start;
        cursor: pointer;
      `}
      onClick={() => handlePlantClick(collectionItem.collectionPlantId)}
    >
      <div
        css={css`
          height: calc(
            (100vh - 12rem - 1rem - 48px - 4rem - 74px - 30px - 32px + 3rem) / 2
          );
        `}
      >
        <PlantCard
          css={css`
            width: 150px;
            height: 100%;
            max-height: 230px;
            padding: 0.7rem;
          `}
        >
          <div>
            <img width="100%" src={monsteraDeliciosa} />
          </div>
          <p
            css={css`
              display: block;
              font-size: 1rem;
              margin: 0.2rem;
            `}
          >
            {collectionItem.commonName}
          </p>
          <p
            css={css`
              display: block;
              font-size: 0.8rem;
              margin: 0;
              font-style: italic;
            `}
          >
            {collectionItem.scientificName}
          </p>
        </PlantCard>
      </div>
    </div>
  );
};
