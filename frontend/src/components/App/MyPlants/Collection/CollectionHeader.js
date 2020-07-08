/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { SearchBar } from "../Collection/SearchBar";
import { AddPlantButton } from "./styled";

export const CollectionHeader = ({
  filterText,
  handleFilterTextChange,
  showSearchBar,
  handleSearchButtonClick,
  handleClickNewPlantButton,
}) => {
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
        Collection
      </div>
      <div
        css={css`
          margin-right: 0.5rem;
          display: flex;
          justify-content: flex-end;
          flex: 0 0 auto;
        `}
      >
        <SearchBar
          filterText={filterText}
          handleFilterTextChange={handleFilterTextChange}
          showSearchBar={showSearchBar}
          handleSearchButtonClick={handleSearchButtonClick}
        />
        <AddPlantButton onClick={handleClickNewPlantButton} />
      </div>
    </div>
  );
};
