import React, { useState } from "react";
import CreateEventTopBar from "../topBar/CreateEventTopBar/CreateEventTopBar";
import ProgressBar from "../progressBar/ProgressBar";
import { BodyHolder, WavyBackground } from "./TestStyled";
import Layout from "../../components/layoutComponent/Layout";
import DefineAudience from "./DefineAudience";
import Budget from "../budgetInventory/Budget";
import FirstCreateEvent from "../createEvent/FirstCreateEvent";
import SecondCreateEvent from "../createEvent/SecondCreateEvent";
import { useParams } from "react-router";

const Test = ({ children }) => {
  const { name, number } = useParams();

  // const [progress, setProgress] = useState(0)
  // const [age, setAge] = useState()
  // const [incomeRange, setIncomeRange] = useState(null)
  // const [gender, setGender] = useState({ male: false, female: false, other: { state: false, text: '' } })

  // useEffect(() => {
  //     const checkProgress = [age, incomeRange]
  //     setProgress(checkProgress.filter(x => x && x).length)
  // }, [age, incomeRange])

  // useLayoutEffect(() => {
  //   setPage();
  // }, [link]);
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
            <>
              {name === "eventdetails" && number === "1" && (
                <FirstCreateEvent />
              )}
              {name === "eventdetails" && number === "2" && (
                <SecondCreateEvent />
              )}
              {name === "eventdetails" && number === "3" && (
                <SecondCreateEvent />
              )}
              {name === "eventdetails" && number === "4" && (
                <SecondCreateEvent />
              )}
              {/* {page.page === "2" && <SecondCreateEvent />} */}
            </>
            // typeof page?.page
          )}
        </Layout>
      </WavyBackground>
    </>
  );
};

export default Test;
