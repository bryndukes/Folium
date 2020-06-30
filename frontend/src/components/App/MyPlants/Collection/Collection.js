import { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { CollectionItem } from "./CollectionItem";
import { CollectionScrollButton } from "./styled";
import { SearchBar } from "./SearchBar";

//TODO: Update this to by bidirectional
//FIXME: When window height changes, the hiding and showing of the next and prev buttons breaks. This is because sometimes there is a mismatch at the end meaning the numbers aren't right.
const handleCollectionNextButtonClick = (e) => {
  scrollOnCollection("next");
};
const handleCollectionPreviousButtonClick = (e) => {
  scrollOnCollection("previous");
};

const scrollOnCollection = (direction) => {
  var currentScrollTop = document.querySelector(".collectionItemsContainer")
    .scrollTop;
  var currentScrollBottom =
    currentScrollTop +
    document.querySelector(".collectionItemsContainer").offsetHeight;

  if (direction === "next") {
    //Set location to scroll down to to the current top plus the height of one item
    var newScrollTop = currentScrollTop + 280;
    var newScrollBottom =
      newScrollTop +
      document.querySelector(".collectionItemsContainer").offsetHeight;

    console.log(newScrollTop);
    //Scroll down one item
    document.querySelector(".collectionItemsContainer").scrollTo({
      top: newScrollTop,
      behavior: "smooth",
    });

    //If the bottom item is reached, hide the next button
    if (
      newScrollBottom >=
      document.querySelector(".collectionItemsContainer").scrollHeight - 279
    ) {
      document.querySelector(".collectionNextButton").style.display = "none";
    }

    //If scrolling down from the top, show the previous button
    if (currentScrollTop < 280) {
      document.querySelector(".collectionPreviousButton").style.display =
        "block";
    }
  } else if (direction === "previous") {
    //Set the location to scroll up to to the current top minus the height of one item
    var newScrollTop = currentScrollTop - 280;

    //Scroll up one item
    document.querySelector(".collectionItemsContainer").scrollTo({
      top: currentScrollTop - 280,
      behavior: "smooth",
    });

    //If the top is reached, hide the previous button
    if (newScrollTop < 280) {
      document.querySelector(".collectionPreviousButton").style.display =
        "none";
    }

    //If scrolling up from the bottom, show the next button
    if (
      currentScrollBottom >=
      document.querySelector(".collectionItemsContainer").scrollHeight - 279
    ) {
      document.querySelector(".collectionNextButton").style.display = "block";
    }
  }
};

export const Collection = ({ collection, filterText }) => {
  return (
    <div
      css={css`
        height: calc(100vh - 12rem - 1rem - 48px);
        display: flex;
        flex-direction: column;
        background-color: #d0dfb2;
        padding: 16px;
        border-radius: 3px;
      `}
    >
      {/* <SearchBar
        filterText={filterText}
        handleFilterTextChange={handleFilterTextChange}
      /> */}
      <CollectionScrollButton
        className="collectionPreviousButton"
        onClick={handleCollectionPreviousButtonClick}
        css={css`
          visibility: hidden;
        `}
      >
        ⮝
      </CollectionScrollButton>
      <div
        className="collectionItemsContainer"
        css={css`
          height: 100%;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: y mandatory;
        `}
      >
        <div
          css={css`
            margin: 0.5rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, 180px);
            grid-gap: 0;
            justify-content: center;
          `}
        >
          {/* Map Collection Data into Collection Item Components */}
          {collection
            .filter(
              (c) =>
                c.commonName.toLowerCase().includes(filterText) ||
                c.scientificName.toLowerCase().includes(filterText)
            )
            .map((collectionItem) => (
              <CollectionItem
                collectionItem={collectionItem}
                key={collectionItem.collectionPlantId}
              />
            ))}
        </div>
      </div>
      <CollectionScrollButton
        className="collectionNextButton"
        onClick={handleCollectionNextButtonClick}
      >
        ⮟
      </CollectionScrollButton>{" "}
    </div>
  );
};
