/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
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
} from "../../../../CollectionData";
import {
  faEdit,
  faTint,
  faSeedling,
  faIgloo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PlantProfileCareArea = ({
  plant,
  handleWaterButtonClick,
  handleFertilizeButtonClick,
  handleRepotButtonClick,
}) => {
  const [hasCareDetails, setHasCareDetails] = useState(
    plant.daysBetweenWatering ||
      plant.daysBetweenFertilizing ||
      plant.monthsBetweenRepotting
  );

  const [lastWatered, setLastWatered] = useState(
    hasCareDetails ? calculateDaysSinceWatering(plant) : null
  );
  const [lastFertilized, setLastFertilized] = useState(
    hasCareDetails ? calculateDaysSinceFertilizing(plant) : null
  );
  const [lastRepotted, setLastRepotted] = useState(
    hasCareDetails ? calculateMonthsSinceRepotting(plant) : null
  );

  useEffect(() => {
    if (hasCareDetails) {
      setLastWatered(calculateDaysSinceWatering(plant));
    }
  }, [plant.lastWatered]);
  useEffect(() => {
    if (hasCareDetails) {
      setLastFertilized(calculateDaysSinceFertilizing(plant));
    }
  }, [plant.lastFertilized]);
  useEffect(() => {
    if (hasCareDetails) {
      setLastRepotted(calculateMonthsSinceRepotting(plant));
    }
  }, [plant.lastRepotted]);

  if (hasCareDetails) {
    let lastWateredText;
    {
      if (lastWatered > 1) {
        lastWateredText = lastWatered + " days ago";
      } else if (lastWatered === 1) {
        lastWateredText = "yesterday";
      } else {
        lastWateredText = "today";
      }
    }
    const nextWatering = calculateNextWatering(plant, lastWatered);
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

    let lastFertilizedText;
    {
      if (lastFertilized > 1) {
        lastFertilizedText = lastFertilized + " days ago";
      } else if (lastFertilized === 1) {
        lastFertilizedText = "yesterday";
      } else {
        lastFertilizedText = "today";
      }
    }
    const nextFertilizing = calculateNextFertilizing(plant, lastFertilized);
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

    let lastRepottedText;
    if (lastRepotted > 1) {
      lastRepottedText = lastRepotted + " months ago";
    } else if (lastRepotted === 1) {
      lastRepottedText = " 1 month ago";
    } else {
      lastRepottedText = "this month";
    }
    const nextRepotting = calculateNextRepotting(plant, lastRepotted);
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

    return (
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
              <ProfileCareDetail>{lastWateredText}</ProfileCareDetail>
            </ProfileCareItem>
            <ProfileCareItem>
              <ProfileCareLabel>Next watering:</ProfileCareLabel>
              <ProfileCareDetail>{nextWateringText}</ProfileCareDetail>
            </ProfileCareItem>
          </ProfileCareCategory>
          <ProfileCareCategory>
            <ProfileCareItem>
              <ProfileCareLabel>Last fertilized: </ProfileCareLabel>
              <ProfileCareDetail>{lastFertilizedText}</ProfileCareDetail>
            </ProfileCareItem>
            <ProfileCareItem>
              <ProfileCareLabel>Next fertilization:</ProfileCareLabel>
              <ProfileCareDetail>{nextFertilizingText}</ProfileCareDetail>
            </ProfileCareItem>
          </ProfileCareCategory>
          <ProfileCareCategory>
            <ProfileCareItem>
              <ProfileCareLabel>Last repotted: </ProfileCareLabel>
              <ProfileCareDetail>{lastRepottedText}</ProfileCareDetail>
            </ProfileCareItem>
            <ProfileCareItem>
              <ProfileCareLabel>Next repotting: </ProfileCareLabel>
              <ProfileCareDetail>{nextRepottingText}</ProfileCareDetail>
            </ProfileCareItem>
          </ProfileCareCategory>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <ProfileCareButton type="button" onClick={handleWaterButtonClick}>
              <FontAwesomeIcon icon={faTint} />
            </ProfileCareButton>
            <ProfileCareButton
              type="button"
              onClick={handleFertilizeButtonClick}
            >
              <FontAwesomeIcon icon={faSeedling} />
            </ProfileCareButton>
            <ProfileCareButton type="button" onClick={handleRepotButtonClick}>
              <FontAwesomeIcon icon={faIgloo} />
            </ProfileCareButton>
            <ProfileCareButton type="button">
              <FontAwesomeIcon icon={faEdit} />
            </ProfileCareButton>
          </div>
        </div>
      </div>
    );
  } else {
    return (
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
};
