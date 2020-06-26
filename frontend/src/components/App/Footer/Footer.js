/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const Footer = () => {
  return (
    <div
      css={css`
        width: 100%;
        height: 20px;
        position: absolute;
        bottom: 0;
        left: 0;
        /* background-color: #0cd4a4; */
      `}
    ></div>
  );
};
