import React, { useState } from "react";
import {
  KCProgressBarHolder,
  KCProgressBar,
  ProgressStages,
  ProgressStages2,
  ProgressStages3,
  NumberHolder,
  ProgressStageInner,
  ProgressStageCounter,
  ProgressStagesOutter,
  ProgressStages2Outter,
  ProgressStages3Outter,
} from "./ProgressBarStyled";

const ProgressBar = ({ setActive }) => {
  const [progress, setProgress] = useState(0);

  return (
    <KCProgressBarHolder>
      <KCProgressBar>

      <ProgressStagesOutter>
        <ProgressStages
          onClick={() => setActive("details")}
        >
          <ProgressStageInner>
            <ProgressStageCounter>
              <NumberHolder>1</NumberHolder>
              Event Details
            </ProgressStageCounter>
            {progress}/4
          </ProgressStageInner>
        </ProgressStages>
        </ProgressStagesOutter>

      <ProgressStages2Outter>
        <ProgressStages2 onClick={() => setActive("audience")}>
          <ProgressStageInner>
            <ProgressStageCounter>
              <NumberHolder>2</NumberHolder>
              Define Audience
            </ProgressStageCounter>
            {progress}/1
          </ProgressStageInner>
        </ProgressStages2>
        </ProgressStages2Outter>
        
        <ProgressStages3Outter>
        <ProgressStages3
          onClick={() => setActive("budget")}
          // btrr={"5px"}
          // bbrr={"5px"}
        >
          <ProgressStageInner>
            <ProgressStageCounter>
              <NumberHolder>3</NumberHolder>
              Budget & Take Inventory
            </ProgressStageCounter>
            {progress}/2
          </ProgressStageInner>
        </ProgressStages3>
        </ProgressStages3Outter>
      </KCProgressBar>
    </KCProgressBarHolder>
  );
};

export default ProgressBar;
