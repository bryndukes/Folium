/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import { useFormik } from "formik";
import { addPlant } from "../../../../CollectionData";
import {
  FormLabel,
  FormField,
  TextInputField,
  NumericInputField,
  TextAreaInputField,
  HorizontalFormField,
  HorizontalFormLabel,
  FullWidthFormField,
} from "../styled";

export const AddPlantForm = ({ handleNewPlantAdded }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(
    "images/upload_image_placeholder.png"
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

  const imagePreview = imagePreviewUrl ? (
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
        src={imagePreviewUrl}
        alt="New Plant Picture"
        css={css`
          width: 267px;
          height: 267px;
          object-fit: cover;
        `}
      />{" "}
    </div>
  ) : (
    <div className="previewText image-container">
      Please select an Image for Preview
    </div>
  );

  const formik = useFormik({
    initialValues: {
      image: null,
      commonName: "",
      scientificName: "",
      variety: "",
      nickname: "",
      daysBetweenWatering: null,
      daysBetweenFertilizing: null,
      monthsBetweenRepotting: null,
      notes: "",
    },
    onSubmit: (values) => {
      alert("New " + values.commonName + " added");
      //TODO: Consider if this should occur in the upper level component?
      //TODO: SOrt out the actual values which need to be submitted.
      const newPlant = {
        commonName: values.commonName,
        scientificName: values.scientificName,
        variety: values.variety,
        nickname: values.nickname,
        notes: values.notes,
        imageUrl:
          "C:\\Users\\bryn.dukes\\source\\repos\\Folium\\mockdata\\images\\monstera-deliciosa.png",
      };
      addPlant(newPlant);
      handleNewPlantAdded();
    },
  });

  //TODO: Improve how this works using the Formik components etc.
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
              <FormField>
                <label
                  for="image"
                  css={css`
                    cursor: pointer;
                  `}
                >
                  {imagePreview}
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
              </FormField>
            </div>
            <div className="detailsArea">
              <FormField>
                <FormLabel htmlFor="commonName">Common Name</FormLabel>
                <TextInputField
                  id="commonName"
                  name="commonName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.commonName}
                />
              </FormField>
              <FormField>
                <FormLabel htmlFor="scientificName">Scientific Name</FormLabel>
                <TextInputField
                  id="scientificName"
                  name="scientificName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.scientificName}
                />
              </FormField>
              <FormField>
                <FormLabel htmlFor="variety">Variety/Cultivar</FormLabel>
                <TextInputField
                  id="variety"
                  name="variety"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.variety}
                />
              </FormField>
              <FormField>
                <FormLabel htmlFor="nickname">Nickname</FormLabel>
                <TextInputField
                  id="nickname"
                  name="nickname"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.nickname}
                />
              </FormField>
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
                <HorizontalFormLabel htmlFor="daysBetweenWatering">
                  Days Between Watering
                </HorizontalFormLabel>
                <NumericInputField
                  id="daysBetweenWatering"
                  name="daysBetweenWatering"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.daysBetweenWatering}
                />
              </HorizontalFormField>
              <HorizontalFormField>
                <HorizontalFormLabel htmlFor="daysBetweenFertilizing">
                  Days Between Fertilizing
                </HorizontalFormLabel>
                <NumericInputField
                  id="daysBetweenFertilizing"
                  name="daysBetweenFertilizing"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.daysBetweenFertilizing}
                />
              </HorizontalFormField>
            </div>
            <div className="careArea">
              <HorizontalFormField>
                <HorizontalFormLabel htmlFor="monthsBetweenRepotting">
                  Months Between Repotting
                </HorizontalFormLabel>
                <NumericInputField
                  id="monthsBetweenRepotting"
                  name="monthsBetweenRepotting"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.monthsBetweenRepotting}
                />
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
          <div>
            <button
              type="submit"
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
              Add Plant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
