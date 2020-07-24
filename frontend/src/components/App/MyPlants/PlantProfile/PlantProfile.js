/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
  FormField,
  HorizontalFormField,
  FullWidthFormField,
  TextAreaInputField,
  LargeButton,
} from "../styled";
import monsteraDeliciosa from "../../../../mockdata/images/monstera-deliciosa.png";
import { updatePlant, deletePlant } from "../../../../CollectionData";
import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PlantProfileCareArea } from "./PlantProfileCareArea";

export const PlantProfile = ({
  selectedPlant,
  handlePlantUpdated,
  handlePlantDeleted,
}) => {
  const [plant, setPlant] = useState(selectedPlant);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(
    //plant.imageUrl
    monsteraDeliciosa
  );

  //To ensure that the plant is updated when the lastWatered, etc. updates are made from the buttons
  useEffect(() => updatePlant(plant), [plant]);

  const handlePlantImageChange = (e) => {
    setSelectedImage(e.target.files[0]);

    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(e.target.files[0]);
    formik.setFieldValue("image", e.target.files[0]);
  };

  const handleWaterButtonClick = () => {
    setPlant({ ...plant, lastWatered: new Date() });
  };
  const handleFertilizeButtonClick = () => {
    setPlant({ ...plant, lastFertilized: new Date() });
  };
  const handleRepotButtonClick = () => {
    setPlant({ ...plant, lastRepotted: new Date() });
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
      handlePlantUpdated();
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
            <PlantProfileCareArea
              plant={plant}
              handleWaterButtonClick={handleWaterButtonClick}
              handleFertilizeButtonClick={handleFertilizeButtonClick}
              handleRepotButtonClick={handleRepotButtonClick}
            />
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
                  css={css`
                    height: 200px !important;
                  `}
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
