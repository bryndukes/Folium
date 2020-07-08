/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { HorizontalFormField, FullWidthFormField } from "../styled";
import { ProfileLabel, ProfileDetail } from "./styled";
import monsteraDeliciosa from "../../../../mockdata/images/monstera-deliciosa.png";

export const PlantProfile = ({ plant }) => {
  return (
    <div
      css={css`
        height: calc(100vh - 12rem - 1rem - 16px);
        display: flex;
        flex-direction: column;
        background-color: #d0dfb2;
        border-radius: 3px;
      `}
    >
      <div
        css={css`
          height: 100%;
          padding: 1rem 2rem;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: #005c5b transparent;
          ::-webkit-scrollbar {
            width: 6px;
          }
          ::-webkit-scrollbar-track {
            background: transparent;
          }
          ::-webkit-scrollbar-thumb {
            background-color: #005c5b;
            border-radius: 20px;
            border: 3px solid #005c5b;
          }
        `}
      >
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(auto-fit, 270px);
            grid-gap: 0.5rem 2rem;
          `}
        >
          <div
            css={css`
              font-family: "Lustria", serif;
              color: #00654b;
              font-size: 1.3rem;
              grid-column: 1 / -1;
            `}
          >
            Bio
          </div>
          <div className="imageArea">
            <HorizontalFormField>
              <div
                className="image-container"
                css={css`
                  width: 267px;
                  height: 267px;
                  border: 2px solid #005c5b;
                  border-radius: 3px;
                `}
              >
                <img
                  src={monsteraDeliciosa}
                  alt="Plant Picture"
                  css={css`
                    width: 267px;
                    height: 267px;
                    object-fit: cover;
                  `}
                />
              </div>
            </HorizontalFormField>
          </div>
          <div className="detailsArea">
            <HorizontalFormField>
              <ProfileLabel>Common Name: </ProfileLabel>
              <ProfileDetail>{plant.commonName}</ProfileDetail>
            </HorizontalFormField>
            <HorizontalFormField>
              <ProfileLabel>Scientific Name: </ProfileLabel>
              <ProfileDetail>{plant.scientificName}</ProfileDetail>
            </HorizontalFormField>
            <HorizontalFormField>
              <ProfileLabel>Variety/Cultivar: </ProfileLabel>
              <ProfileDetail>{plant.variety}</ProfileDetail>
            </HorizontalFormField>
            <HorizontalFormField>
              <ProfileLabel>Nickname: </ProfileLabel>
              <ProfileDetail>{plant.nickname}</ProfileDetail>
            </HorizontalFormField>
          </div>
          <div
            css={css`
              font-family: "Lustria", serif;
              color: #00654b;
              font-size: 1.3rem;
              grid-column: 1 / -1;
            `}
          >
            Care
          </div>
          <div className="careArea">
            <HorizontalFormField>
              <ProfileLabel>Days until next watering: </ProfileLabel>
              <ProfileDetail>TBC</ProfileDetail>
            </HorizontalFormField>
            <HorizontalFormField>
              <ProfileLabel>Days until next fertilization: </ProfileLabel>
              <ProfileDetail>TBC</ProfileDetail>
            </HorizontalFormField>
          </div>
          <div className="careArea">
            <ProfileLabel>Months until repotting: </ProfileLabel>
            <ProfileDetail>TBC</ProfileDetail>
          </div>
          <div
            css={css`
              font-family: "Lustria", serif;
              color: #00654b;
              font-size: 1.3rem;
              grid-column: 1 / -1;
            `}
          >
            Notes
          </div>
          <div
            className="notesArea"
            css={css`
              grid-column: 1 / -1;
            `}
          >
            <FullWidthFormField>
              <ProfileDetail>{plant.notes}</ProfileDetail>
            </FullWidthFormField>
          </div>
          <div
            css={css`
              grid-column: 1 / -1;
            `}
          >
            <button
              css={css`
                display: block;
                padding: 10px;
                margin-left: auto;
                font-family: "Lustria", serif;
                color: #fff;
                font-size: 1.1rem;
                background-color: #005c5b;
                border: 3px solid #005c5b;
                border-radius: 3px;
              `}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
