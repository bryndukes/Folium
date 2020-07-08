/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { EscapeButton } from "../styled";

export const PlantProfileHeader = ({ handleClickPlantProfileBackButton }) => {
  return (
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
        Plant Profile
      </div>
      <EscapeButton onClick={handleClickPlantProfileBackButton} />
    </div>
  );
};
