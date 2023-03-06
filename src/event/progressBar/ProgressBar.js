import React, { useState } from "react";
import { useEffect } from "react";
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
import {IoIosCheckmarkCircle} from "react-icons/io"

const ProgressBar = ({ setActive, name, number }) => {
  const [progress, setProgress] = useState({
    eventdetails: 0,
    defineaudience: 0,
    "budget&inventory": 0,
  });

  useEffect(() => {
    if (name === "eventdetails") {
      setProgress({ ...progress, eventdetails: number });
    }
    if (name === "defineaudience") {
      setProgress({ ...progress, eventdetails: 4, defineaudience: number });
    }
    if (name === "budget&inventory") {
      setProgress({
        ...progress,
        eventdetails: 4,
        defineaudience: 1,
        "budget&inventory": number,
      });
    }
  }, [number, name]);

  return (
    <KCProgressBarHolder>
      <KCProgressBar>
        <ProgressStagesOutter>
          <ProgressStages onClick={() => setActive("details")}>
            <ProgressStageInner>
              <ProgressStageCounter>
                <NumberHolder>{progress.eventdetails === 4? <IoIosCheckmarkCircle/> : 1}</NumberHolder>
                Event Details
              </ProgressStageCounter>
              {progress.eventdetails}/4
            </ProgressStageInner>
          </ProgressStages>
        </ProgressStagesOutter>

        <ProgressStages2Outter>
          <ProgressStages2 onClick={() => setActive("audience")}>
            <ProgressStageInner>
              <ProgressStageCounter>
                <NumberHolder>{progress.defineaudience === 1? <IoIosCheckmarkCircle/> : 2}</NumberHolder>
                Define Audience
              </ProgressStageCounter>
              {progress.defineaudience}/1
            </ProgressStageInner>
          </ProgressStages2>
        </ProgressStages2Outter>

        <ProgressStages3Outter>
          <ProgressStages3
            onClick={() => setActive("budget")}
          >
            <ProgressStageInner>
              <ProgressStageCounter>
                <NumberHolder>{progress["budget&inventory"] === 2? <IoIosCheckmarkCircle/> : 3}</NumberHolder>
                Budget & Take Inventory
              </ProgressStageCounter>
              {progress["budget&inventory"]}/2
            </ProgressStageInner>
          </ProgressStages3>
        </ProgressStages3Outter>
      </KCProgressBar>
    </KCProgressBarHolder>
  );
};

export default ProgressBar;
