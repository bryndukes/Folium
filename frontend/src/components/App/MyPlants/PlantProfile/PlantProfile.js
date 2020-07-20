/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import { useFormik } from "formik";
import {
  FormField,
  HorizontalFormField,
  FullWidthFormField,
  TextAreaInputField,
  LargeButton,
} from "../styled";
import {
  ProfileCareCategory,
  ProfileCareLabel,
  ProfileCareDetail,
  ProfileCareItem,
  ProfileCareButton,
} from "./styled";
import monsteraDeliciosa from "../../../../mockdata/images/monstera-deliciosa.png";
import { useEffect } from "react";
import {
  calculateDaysSinceWatering,
  calculateNextWatering,
  calculateDaysSinceFertilizing,
  calculateNextFertilizing,
  calculateMonthsSinceRepotting,
  calculateNextRepotting,
  updatePlant,
  deletePlant,
} from "../../../../CollectionData";
import {
  faPen,
  faEdit,
  faTint,
  faSeedling,
  faIgloo,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PlantProfile = ({ plant, handlePlantDeleted }) => {
  const [hasCareDetails, setHasCareDetails] = useState(
    plant.daysBetweenWatering ||
      plant.daysBetweenFertilizing ||
      plant.monthsBetweenRepotting
  );

  let careSection = null;

  if (hasCareDetails) {
    console.log(hasCareDetails);
    const daysSinceWatering = calculateDaysSinceWatering(plant);
    let daysSinceWateringText;
    {
      if (daysSinceWatering > 1) {
        daysSinceWateringText = daysSinceWatering + " days ago";
      } else if (daysSinceWatering === 1) {
        daysSinceWateringText = "yesterday";
      } else {
        daysSinceWateringText = "today";
      }
    }
    const nextWatering = calculateNextWatering(plant, daysSinceWatering);
    let nextWateringText;
    {
      if (nextWatering > 1) {
        nextWateringText = "in " + nextWatering + " days";
      } else if (nextWatering === 1) {
        nextWateringText = "tomorrow";
      } else if (nextWatering === 0) {
        nextWateringText = "due";
      } else if (nextWatering < 0) {
        nextWateringText = "overdue";
      }
    }

    const daysSinceFertilizing = calculateDaysSinceFertilizing(plant);
    let daysSinceFertilizingText;
    {
      if (daysSinceFertilizing > 1) {
        daysSinceFertilizingText = daysSinceFertilizing + " days ago";
      } else if (daysSinceFertilizing === 1) {
        daysSinceFertilizingText = "yesterday";
      } else {
        daysSinceFertilizingText = "today";
      }
    }
    const nextFertilizing = calculateNextFertilizing(
      plant,
      daysSinceFertilizing
    );
    let nextFertilizingText;
    {
      if (nextFertilizing > 1) {
        nextFertilizingText = "in " + nextFertilizing + " days";
      } else if (nextFertilizing === 1) {
        nextFertilizingText = "tomorrow";
      } else if (nextFertilizing === 0) {
        nextFertilizingText = "due";
      } else if (nextFertilizing < 0) {
        nextFertilizingText = "overdue";
      }
    }

    const monthsSinceRepotting = calculateMonthsSinceRepotting(plant);
    let monthsSinceRepottingText;
    if (monthsSinceRepotting > 1) {
      monthsSinceRepottingText = monthsSinceRepotting + " months ago";
    } else if (monthsSinceRepotting === 1) {
      monthsSinceRepottingText = " 1 month ago";
    } else {
      monthsSinceRepottingText = "this month";
    }
    const nextRepotting = calculateNextRepotting(plant, monthsSinceRepotting);
    let nextRepottingText;
    if (nextRepotting > 1) {
      nextRepottingText = "in " + nextRepotting + " months";
    } else if (nextRepotting === 1) {
      nextRepottingText = "in 1 month";
    } else if (nextRepotting === 0) {
      nextRepottingText = "due";
    } else if (nextRepotting < 0) {
      nextRepottingText = "overdue";
    }

    careSection = (
      <div
        className="careArea"
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <div>
          <ProfileCareCategory>
            <ProfileCareItem>
              <ProfileCareLabel>Last watered: </ProfileCareLabel>
              <ProfileCareDetail>{daysSinceWateringText}</ProfileCareDetail>
            </ProfileCareItem>
            <ProfileCareItem>
              <ProfileCareLabel>Next watering:</ProfileCareLabel>
              <ProfileCareDetail>{nextWateringText}</ProfileCareDetail>
            </ProfileCareItem>
          </ProfileCareCategory>
          <ProfileCareCategory>
            <ProfileCareItem>
              <ProfileCareLabel>Last fertilized: </ProfileCareLabel>
              <ProfileCareDetail>{daysSinceFertilizingText}</ProfileCareDetail>
            </ProfileCareItem>
            <ProfileCareItem>
              <ProfileCareLabel>Next fertilization:</ProfileCareLabel>
              <ProfileCareDetail>{nextFertilizingText}</ProfileCareDetail>
            </ProfileCareItem>
          </ProfileCareCategory>
          <ProfileCareCategory>
            <ProfileCareItem>
              <ProfileCareLabel>Last repotted: </ProfileCareLabel>
              <ProfileCareDetail>{monthsSinceRepottingText}</ProfileCareDetail>
            </ProfileCareItem>
            <ProfileCareItem>
              <ProfileCareLabel>Next repotting: </ProfileCareLabel>
              <ProfileCareDetail>{nextRepottingText}</ProfileCareDetail>
            </ProfileCareItem>
          </ProfileCareCategory>
          <div
            css={css`
              display: flex;
              justify-content: space-around;
            `}
          >
            <ProfileCareButton>
              <FontAwesomeIcon icon={faTint} />
            </ProfileCareButton>
            <ProfileCareButton>
              <FontAwesomeIcon icon={faSeedling} />
            </ProfileCareButton>
            <ProfileCareButton>
              <FontAwesomeIcon icon={faIgloo} />
            </ProfileCareButton>
            <ProfileCareButton>
              <FontAwesomeIcon icon={faEdit} />
            </ProfileCareButton>
          </div>
        </div>
      </div>
    );
  } else {
    careSection = (
      <div
        className="careArea"
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <button
          css={css`
            display: block;
            padding: 5px 7px;
            margin: auto;
            font-family: "Lustria", serif;
            color: #fff;
            font-size: 0.8rem;
            background-color: #005c5b;
            border: 3px solid #005c5b;
            border-radius: 3px;
          `}
        >
          Add Plant Care Info
        </button>
      </div>
    );
  }

  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(
    //plant.imageUrl
    monsteraDeliciosa
  );

  const handlePlantImageChange = (e) => {
    setSelectedImage(e.target.files[0]);

    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(e.target.files[0]);
    formik.setFieldValue("image", e.target.files[0]);
  };

  const handleDeleteButtonClick = () => {
    //TODO: add are you sure check
    //TODO: Make this into a graveyard type thing so you can look at old plants
    deletePlant(plant.collectionPlantId);
    handlePlantDeleted();
  };

  const formik = useFormik({
    initialValues: {
      image: null,
      notes: plant.notes,
    },
    onSubmit: (values) => {
      //TODO: Consider if this should occur in the upper level component?
      //TODO: SOrt out the actual values which need to be submitted.
      const updatedPlant = { ...plant };
      updatedPlant.notes = values.notes;
      updatedPlant.imageUrl =
        "C:\\Users\\bryn.dukes\\source\\repos\\Folium\\mockdata\\images\\monstera-deliciosa.png";
      console.log("Submitting");
      updatePlant(updatedPlant);
      alert("Changes saved");
    },
  });

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
        <form
          onSubmit={formik.handleSubmit}
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
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
                grid-column: 1 / -1;
              `}
            >
              <div
                css={css`
                  font-family: "Lustria", serif;
                  color: #00654b;
                  font-size: 1.7rem;
                `}
              ></div>
              <div
                css={css`
                  font-family: "Lustria", serif;
                  color: #00654b;
                  font-size: 1.5rem;
                `}
              >
                {plant.nickname ? plant.nickname + " (" : ""}
                {plant.commonName ? plant.commonName : ""}
                {plant.nickname ? ")" : ""}
              </div>
              <div
                css={css`
                  font-family: "Lustria", serif;
                  color: #00654b;
                  font-size: 1.1rem;
                  font-style: italic;
                `}
              >
                {plant.scientificName ? plant.scientificName : ""}{" "}
                {plant.variety ? "'" + plant.variety + "'" : ""}
              </div>
            </div>

            <div className="imageArea">
              <HorizontalFormField
                css={css`
                  margin: 0 !important;
                `}
              >
                <label
                  for="image"
                  css={css`
                    cursor: pointer;
                  `}
                >
                  <div
                    className="image-container"
                    css={css`
                      width: 267px;
                      height: 267px;
                      border: 2px solid #005c5b;
                      border-radius: 3px;
                      position: relative;
                    `}
                  >
                    <img
                      src={imagePreviewUrl}
                      alt="Plant Picture"
                      css={css`
                        width: 267px;
                        height: 267px;
                        object-fit: cover;
                      `}
                    />
                    <div
                      css={css`
                        position: absolute;
                        bottom: 10px;
                        right: 10px;
                      `}
                    >
                      <FontAwesomeIcon
                        icon={faPen}
                        css={css`
                          color: white;
                          font-size: 1.8rem;
                        `}
                      />
                    </div>
                  </div>
                </label>
                <input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handlePlantImageChange}
                  css={css`
                    display: none;
                  `}
                />
              </HorizontalFormField>
            </div>
            {careSection}
            <div
              css={css`
                font-family: "Lustria", serif;
                color: #00654b;
                font-size: 1.3rem;
                grid-column: 1 / -1;
                margin-top: 1.2rem;
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
                <TextAreaInputField
                  id="notes"
                  name="notes"
                  type="textarea"
                  onChange={formik.handleChange}
                  value={formik.values.notes}
                />
              </FullWidthFormField>
            </div>
          </div>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <LargeButton
              type="button"
              onClick={handleDeleteButtonClick}
              css={css`
                background-color: #ff9999;
                border-color: #ff9999;
                width: 45px !important;
              `}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </LargeButton>
            <LargeButton type="submit">Save</LargeButton>
          </div>
        </form>
      </div>
    </div>
  );
};
