/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import {
  TaskCategoryTitle,
  TaskListScrollButtonContainer,
  TaskListScrollButton,
  TaskListContainer,
} from "./styled";
import { TaskListItem } from "./TaskListItem";

const handleToDoNextButtonClick = (category) => {
  scrollOnToDoList(category, "next");
};

const handleToDoPreviousButtonClick = (category) => {
  scrollOnToDoList(category, "previous");
};

const scrollOnToDoList = (category, direction) => {
  var currentScrollLeft = document.querySelector(
    "." + category + "ItemsContainer"
  ).scrollLeft;
  console.log(category);
  var currentScrollRight =
    currentScrollLeft +
    document.querySelector("." + category + "ItemsContainer").offsetWidth;

  console.log("currentScrollLeft: " + currentScrollLeft);
  console.log("currentScrollRight" + currentScrollRight);

  if (direction === "next") {
    //Set location to scroll right to to the current left plus the width of one item
    var newScrollLeft = currentScrollLeft + 135;
    var newScrollRight =
      newScrollLeft +
      document.querySelector("." + category + "ItemsContainer").offsetWidth;

    console.log("newScrollLeft: " + newScrollLeft);
    console.log("newScrollRight" + newScrollRight);
    //Scroll forward one item
    document.querySelector("." + category + "ItemsContainer").scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });

    //If the end item is reached, hide the next button
    if (
      newScrollRight >=
      document.querySelector("." + category + "ItemsContainer").scrollWidth
    ) {
      document.querySelector("." + category + "NextButton").style.display =
        "none";
    }

    //If scrolling down from the top, show the previous button
    if (currentScrollLeft < 135) {
      document.querySelector("." + category + "PreviousButton").style.display =
        "block";
    }
  } else if (direction === "previous") {
    //Set the location to scroll left to to the current left minus the width of one item
    var newScrollLeft = currentScrollLeft - 135;

    console.log("newScrollLeft: " + newScrollLeft);
    //Scroll back one item
    document.querySelector("." + category + "ItemsContainer").scrollTo({
      left: currentScrollLeft - 135,
      behavior: "smooth",
    });

    //If the left is reached, hide the previous button
    if (newScrollLeft === 0) {
      document.querySelector("." + category + "PreviousButton").style.display =
        "none";
    }

    //If scrolling from the end, show the next button
    if (
      currentScrollRight >=
      document.querySelector("." + category + "ItemsContainer").scrollWidth -
        135
    ) {
      document.querySelector("." + category + "NextButton").style.display =
        "block";
    }
  }
};

export const TaskList = ({ categoryName, plants }) => {
  //TODO: Remove all class names

  return (
    <div>
      <div>
        <TaskCategoryTitle>{categoryName}</TaskCategoryTitle>
      </div>
      <div
        css={css`
          display: flex;
        `}
      >
        <TaskListScrollButtonContainer>
          <TaskListScrollButton
            className={categoryName.toLowerCase() + "PreviousButton"}
            onClick={() =>
              handleToDoPreviousButtonClick(categoryName.toLowerCase())
            }
            css={css`
              display: none;
            `}
          >
            ⮜
          </TaskListScrollButton>
        </TaskListScrollButtonContainer>
        <TaskListContainer
          className={categoryName.toLowerCase() + "ItemsContainer"}
        >
          {/* TODO: Make this not just use the Mockcollection. Also update names from collectionItem */}
          {plants.map((plant) => (
            <TaskListItem
              categoryName={categoryName}
              plant={plant}
              key={plant.collectionPlantId}
            />
          ))}
        </TaskListContainer>
        <TaskListScrollButtonContainer>
          <TaskListScrollButton
            className={categoryName.toLowerCase() + "NextButton"}
            onClick={() =>
              handleToDoNextButtonClick(categoryName.toLowerCase())
            }
          >
            ⮞
          </TaskListScrollButton>
        </TaskListScrollButtonContainer>
      </div>
    </div>
  );
};
