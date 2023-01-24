import React, { useState, useEffect } from "react";
import CreateEventTopBar from "../topBar/CreateEventTopBar/CreateEventTopBar";
import ProgressBar from "../progressBar/ProgressBar";
import { BodyHolder, WavyBackground } from "./TestStyled";
import Layout from "../../components/layoutComponent/Layout";
import DefineAudience from "./DefineAudience";
import Budget from "../budgetInventory/Budget";
import FirstCreateEvent from "../createEvent/FirstCreateEvent";

const Test = ({ children }) => {
  // const [progress, setProgress] = useState(0)
  // const [age, setAge] = useState()
  // const [incomeRange, setIncomeRange] = useState(null)
  // const [gender, setGender] = useState({ male: false, female: false, other: { state: false, text: '' } })

  // useEffect(() => {
  //     const checkProgress = [age, incomeRange]
  //     setProgress(checkProgress.filter(x => x && x).length)
  // }, [age, incomeRange])

  const [active, setActive] = useState("details");
  return (
    <>
      <WavyBackground>
        <CreateEventTopBar />
        <ProgressBar setActive={setActive} />
        <Layout>
          {active === "budget" ? (
            <Budget />
          ) : active === "audience" ? (
            <DefineAudience />
          ) : (
            <FirstCreateEvent/>
          )}
        </Layout>
      </WavyBackground>
    </>
  );
};

export default Test;
