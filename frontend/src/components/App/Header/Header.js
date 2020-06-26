/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const Header = () => {
  return (
    <div
      css={css`
        font-family: "Noto Sans KR", sans-serif;
        font-size: 1.8rem;
        color: #00654b;
        padding: 10px 25px;
      `}
    >
      <h1
        css={css`
          margin: 0;
          padding: 0;
        `}
      >
        Folium
      </h1>
    </div>
  );
};
