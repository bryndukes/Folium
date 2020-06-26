/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import monsteraDeliciosa from "../../../../mockdata/images/monstera-deliciosa.png";
import { PlantCard } from "../styled";

export const CollectionItem = ({ collectionItem }) => {
  return (
    <div
      className="collectionItem"
      key={collectionItem.collectionPlantId}
      css={css`
        padding: 1rem 0 1rem 0;
        justify-self: center;
        scroll-snap-align: start;
      `}
    >
      <PlantCard
        css={css`
          width: 160px;
          height: 210px;
          padding: 1rem;
        `}
      >
        <div>
          <img width="100%" src={monsteraDeliciosa} />
        </div>
        <p
          css={css`
            display: block;
            font-size: 1rem;
            margin: 0.5rem;
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
  );
};
