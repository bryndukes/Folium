import { useState } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const SearchBar = ({ filterText, handleFilterTextChange }) => {
  return (
    <div
      css={css`
        background-color: #d0dfb2;
        position: absolute;
        top: 0;
        z-index: 4;
        width: 100%;
        text-align: center;
        padding-top: 10px;
      `}
    >
      <form>
        <input
          type="text"
          placeholder="Search..."
          className="collectionSearchInput"
          value={filterText}
          onChange={handleFilterTextChange}
          css={css`
            font-size: 1.2rem;
            border-radius: 3px;
          `}
        />
      </form>
    </div>
  );
};
