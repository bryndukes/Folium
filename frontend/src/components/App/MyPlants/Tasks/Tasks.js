/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { TaskList } from "./TaskList";

export const Tasks = ({ collection }) => {
  return (
    <div
      css={css`
        padding: 1rem 0;
        background-color: #d0dfb2;
        border-radius: 5px;
        overflow: auto;
        position: relative;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          height: 100%;
          padding: 0 0.5rem;
        `}
      >
        <TaskList categoryName="Water" plants={collection} />
        <TaskList categoryName="Fertilize" plants={collection} />
        <TaskList categoryName="Repot" plants={collection} />
      </div>
    </div>
  );
};
