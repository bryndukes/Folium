import { useState } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const searchInputStyle = ({ showSearchBar }) =>
  css`
    pointer-events: none;
    box-sizing: border-box;
    width: 28px;
    height: 28px;
    border: 2.5px solid #5ba996;
    border-radius: 50%;
    background: none;
    color: #005c5b;
    font-size: 14px;
    font-weight: 400;
    font-family: Roboto;
    outline: 0;
    -webkit-transition: width 0.4s ease-in-out, border-radius 0.8s ease-in-out,
      padding 0.2s;
    transition: width 0.4s ease-in-out, border-radius 0.8s ease-in-out,
      padding 0.2s;
    -webkit-transition-delay: 0.4s;
    transition-delay: 0.4s;
    -webkit-transform: translate(-100%, 0);
    -ms-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
    &::placeholder {
      color: transparent;
    }
    ${showSearchBar === true &&
    `
    pointer-events: auto;
      box-sizing: border-box;
      padding: 0 40px 0 10px;
      width: 100%;
      height: 28px;
      border: 2.5px solid 
#5ba996;
      border-radius: 0;
      background: none;
      color: #005c5b;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 400;
      outline: 0;
      -webkit-transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out,
        padding 0.2s;
      transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out,
        padding 0.2s;
      -webkit-transition-delay: 0.4s, 0s, 0.4s;
      transition-delay: 0.4s, 0s, 0.4s;
      -webkit-transform: translate(-100%, 0);
      -ms-transform: translate(-100%, 0);
      transform: translate(-100%, 0);
      
      &::placeholder {
        color: #5ba996;
        -webkit-transition: color 2s ease-in;
        transition: color 2s ease-in;
      }
      &::-webkit-input-placeholder {
        color: #5ba996;
        -webkit-transition: color 2s ease-in;
        transition: color 2s ease-in;
      }

      &:-moz-placeholder { /* Firefox 18- */
        color: #5ba996;
        -webkit-transition: color 2s ease-in;
        transition: color 2s ease-in;
      }

      &::-moz-placeholder {  /* Firefox 19+ */
        color: #5ba996;
        -webkit-transition: color 2s ease-in;
        transition: color 2s ease-in;
      }

      &:-ms-input-placeholder {  
        color: #5ba996;
        -webkit-transition: color 2s ease-in;
        transition: color 2s ease-in;
      }
    `}
  `;
const searchButtonStyle = ({ showSearchBar }) => css`
  background: none;
  position: absolute;
  top: 0;
  left: 10px;
  height: 40px;
  width: 40px;
  padding: 0;
  border-radius: 100%;
  outline: 0;
  border: 0;
  color: inherit;
  cursor: pointer;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  -webkit-transform: translate(-100%, 0);
  -ms-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
  &:before {
    content: "";
    position: absolute;
    width: 10px;
    height: 2.5px;
    background-color: #5ba996;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    margin-top: 6px;
    margin-left: 5px;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }
  ${showSearchBar === true &&
  `
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  -webkit-transition-delay: 0.4s;
  transition-delay: 0.4s;
  &:before {content: "";
  position: absolute;
  width: 15px;
  height: 2.5px;
  margin-top: -8px;
  margin-left:  -12px;
  background-color: 
#5ba996;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;}
  &:after {
  content: "";
  position: absolute;
  width: 15px;
  height: 2.5px;
  background-color: 
#5ba996;
  margin-top: -8px;
  margin-left:  -12px;
  cursor: pointer;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
    `}
`;

export const SearchBar = ({
  filterText,
  handleFilterTextChange,
  showSearchBar,
  handleSearchButtonClick,
}) => {
  return (
    <div
      css={css`
        width: 100%;
        flex: 0 0 auto;
      `}
    >
      <div
        css={css`
          position: relative;
          max-width: 300px;
          left: 100%;
          bottom: -8px;
        `}
      >
        <form>
          <input
            type="text"
            className="collectionSearchInput"
            value={filterText}
            onChange={handleFilterTextChange}
            placeholder="Search..."
            css={searchInputStyle({ showSearchBar })}
          />
          <button
            type="reset"
            className="searchButton"
            css={searchButtonStyle({ showSearchBar })}
            onClick={handleSearchButtonClick}
          ></button>
        </form>
      </div>
    </div>
  );
};
