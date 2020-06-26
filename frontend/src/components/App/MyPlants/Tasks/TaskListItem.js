/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import monsteraDeliciosa from "../../../../mockdata/images/monstera-deliciosa.png";
import { PlantCard } from "../styled";

export const TaskListItem = ({ categoryName, plant }) => {
  return (
    <div
      className={categoryName + "Item"}
      key={plant.collectionPlantId}
      css={css`
        padding: 0.3rem 0 1rem 0;
        scroll-snap-align: start;
        grid-row: 1;
      `}
    >
      <PlantCard
        css={css`
          width: 100px;
          height: 133px;
          padding: 0.6rem;
        `}
      >
        <div>
          <img width="100%" src={monsteraDeliciosa} />
        </div>
        <p
          css={css`
            display: block;
            font-size: 0.8rem;
            margin: 0.2rem;
          `}
        >
          {plant.commonName}
        </p>
      </PlantCard>
    </div>
  );
};
