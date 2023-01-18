import React, { useState } from "react";
import {
  KCProgressBarHolder,
  KCProgressBar,
  ProgressStages,
  NumberHolder,
  ProgressStageInner,
  ProgressStageCounter,
} from "./ProgressBarStyled";

const ProgressBar = ({ setActive }) => {
  const [progress, setProgress] = useState(0);

  return (
    <KCProgressBarHolder>
      <KCProgressBar>
        <ProgressStages
          onClick={() => setActive("details")}
          bblr={"5px"}
          btlr={"5px"}
        >
          <ProgressStageInner>
            <ProgressStageCounter>
              <NumberHolder>1</NumberHolder>
              Event Details
            </ProgressStageCounter>
            {progress}/4
          </ProgressStageInner>
        </ProgressStages>

        <ProgressStages onClick={() => setActive("audience")}>
          <ProgressStageInner>
            <ProgressStageCounter>
              <NumberHolder>2</NumberHolder>
              Define Audience
            </ProgressStageCounter>
            {progress}/1
          </ProgressStageInner>
        </ProgressStages>

        <ProgressStages
          onClick={() => setActive("budget")}
          btrr={"5px"}
          bbrr={"5px"}
        >
          <ProgressStageInner>
            <ProgressStageCounter>
              <NumberHolder>3</NumberHolder>
              Budget & Take Inventory
            </ProgressStageCounter>
            {progress}/2
          </ProgressStageInner>
        </ProgressStages>
      </KCProgressBar>
    </KCProgressBarHolder>
  );
};

export default ProgressBar;
