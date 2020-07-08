/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { EscapeButton } from "../styled";

export const AddPlantHeader = ({ handleClickDiscardNewPlantButton }) => {
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
        New Plant
      </div>
      <EscapeButton onClick={handleClickDiscardNewPlantButton} />
    </div>
  );
};
