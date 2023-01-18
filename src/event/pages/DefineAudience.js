import React, { useState } from "react";
import {
  ChechkBox,
  Form,
  RadioButton,
  RadioButtonWrapper,
} from "../../globalStyles";
import { KBTextXl, KBDisplayXs } from "../../components/fonts/fontSize";
import { ButtonContainer } from "./DefineAudienceStyled";
import {
  AlternativeButton,
  PrimaryButton,
} from "../../components/button/button";

const DefineAudience = () => {
  const [isdisabled, setIsDisabled] = useState(true);

  const [progress, setProgress] = useState(0);
  const [age, setAge] = useState();
  const [incomeRange, setIncomeRange] = useState(null);
  const [gender, setGender] = useState({
    male: false,
    female: false,
    other: { state: false, text: "" },
  });

  return (
    <div>
      <div
        style={{
          backgroundColor: "#F3F0F0   ",
          width: "100%",
          padding: "2% 8%",
          display: "flex",
          flexDirection: "column",
          alignItmes: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <KBDisplayXs fontWeight={600}>Define Audience</KBDisplayXs>
          <p style={{ fontSize: "16px" }}>
            Define your audience in terms of everyone who cares about what you
            do and the larger theme, not just the people who will attend.
          </p>
        </div>
        <div
          style={{
            width: "100%",
            height: "70vh",
            backgroundColor: "white",
            overflowY: "scroll",
            padding: "4%",
            marginTop: "3%",
          }}
        >
          <div>
            <KBTextXl fontWeight={500}>Age {age} </KBTextXl>
            <p>What age range best describes your community?</p>
            <Form>
              <div style={{ marginTop: "2%" }}>
                <RadioButtonWrapper>
                  <div
                    style={{
                      height: "inherit",
                      width: "fit-content",
                      gap: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <RadioButton
                      onChange={(e) => setAge(e.target.value)}
                      value={"17 and younger"}
                    />
                    17 and younger
                  </div>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <div
                    style={{
                      height: "inherit",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <RadioButton
                      onChange={(e) => setAge(e.target.value)}
                      value={"18-20"}
                    />
                    <div>18-20 </div>
                  </div>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <RadioButton
                    onChange={(e) => setAge(e.target.value)}
                    value={"21-29"}
                  />
                  21-29
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <RadioButton
                    onChange={(e) => setAge(e.target.value)}
                    value={"30-39"}
                  />
                  30-39
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <RadioButton
                    onChange={(e) => setAge(e.target.value)}
                    value={"40-49"}
                  />
                  40-49
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <RadioButton
                    onChange={(e) => setAge(e.target.value)}
                    value={"50-59"}
                  />
                  50-59
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <RadioButton
                    onChange={(e) => setAge(e.target.value)}
                    value={"60 and older"}
                  />
                  60 and older
                </RadioButtonWrapper>
              </div>
            </Form>
          </div>

          <div style={{ marginTop: "3%" }}>
            <KBTextXl fontWeight={500}>Income range</KBTextXl>
            <p>
              What income range (in Naira) best describes the people connected
              to your event?
            </p>
            <Form>
              <div style={{ marginTop: "2%" }}>
                <RadioButtonWrapper>
                  <RadioButton
                    onChange={(e) => setIncomeRange(e.target.value)}
                    value={"0 - 49,999"}
                  />
                  0 - 49,999
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <RadioButton />
                  50,000 - 99,999
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <RadioButton />
                  100,000 and above
                </RadioButtonWrapper>
              </div>
            </Form>
          </div>

          <div style={{ marginTop: "3%" }}>
            <KBTextXl fontWeight={500}>Gender</KBTextXl>
            <p>
              Select one or more of the most predominant of your audience or
              specify for others
            </p>
            <Form>
              <div style={{ marginTop: "2%" }}>
                <RadioButtonWrapper>
                  <ChechkBox
                    checked={gender.male}
                    onChange={() =>
                      setGender({ ...gender, male: !gender.male })
                    }
                  />
                  Male
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <ChechkBox />
                  Female
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <ChechkBox
                    checked={gender.other.state}
                    onChange={() =>
                      setGender({ ...gender, other: !gender.other.state })
                    }
                  />
                  Others
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <input
                    style={{
                      outline: "transparent",
                      border: "transparent",
                      width: "100%",
                    }}
                    placeholder="Specify for others"
                  />
                </RadioButtonWrapper>
              </div>
            </Form>
          </div>

          <div style={{ marginTop: "3%" }}>
            <KBTextXl fontWeight={500}>Religion</KBTextXl>
            <p>
              Select one or more of the most predominant of your audience or
              specify for “others”
            </p>
            <Form>
              <div style={{ marginTop: "2%" }}>
                <RadioButtonWrapper>
                  <ChechkBox />
                  Christianity
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <ChechkBox />
                  Islam
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <ChechkBox />
                  Others
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <input
                    style={{
                      outline: "transparent",
                      border: "transparent",
                      width: "100%",
                    }}
                    placeholder="Specify for others"
                  />
                </RadioButtonWrapper>
              </div>
            </Form>
          </div>

          <div style={{ marginTop: "3%" }}>
            <KBTextXl fontWeight={500}>Marital Status</KBTextXl>
            <p>
              Select one or more of the most predominant of your audience or
              specify for “others”
            </p>
            <Form>
              <div style={{ marginTop: "2%" }}>
                <RadioButtonWrapper>
                  <ChechkBox />
                  Single
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <ChechkBox />
                  Married
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <ChechkBox />
                  Divorced
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <ChechkBox />
                  Widowed
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <ChechkBox />
                  Others
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <input
                    style={{
                      outline: "transparent",
                      border: "transparent",
                      width: "100%",
                    }}
                    placeholder="Specify for others"
                  />
                </RadioButtonWrapper>
              </div>
            </Form>
          </div>

          <div style={{ marginTop: "3%" }}>
            <KBTextXl fontWeight={500}>Employment status</KBTextXl>
            <p>
              Select one or more of the most predominant of your audience or
              specify for “others”
            </p>
            <Form>
              <div style={{ marginTop: "2%" }}>
                <RadioButtonWrapper>
                  <ChechkBox />
                  Employed
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <ChechkBox />
                  Self Employed
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <ChechkBox />
                  Unemployed
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <ChechkBox />
                  Retired
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <ChechkBox />
                  Disable
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <ChechkBox />
                  Others
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <input
                    style={{
                      outline: "transparent",
                      border: "transparent",
                      width: "100%",
                    }}
                    placeholder="Specify for others"
                  />
                </RadioButtonWrapper>
              </div>
            </Form>
          </div>

          <div style={{ marginTop: "3%" }}>
            <KBTextXl fontWeight={500}>Educational level</KBTextXl>
            <p>
              Select one or more of the most predominant of your audience or
              specify for “others”
            </p>
            <Form>
              <div style={{ marginTop: "2%" }}>
                <RadioButtonWrapper>
                  <ChechkBox />
                  High School
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <ChechkBox />
                  College/Polytechnic
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <ChechkBox />
                  Bachelor’s
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <ChechkBox />
                  Master’s
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <ChechkBox />
                  Others
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <input
                    style={{
                      outline: "transparent",
                      border: "transparent",
                      width: "100%",
                    }}
                    placeholder="Specify for others"
                  />
                </RadioButtonWrapper>
              </div>
            </Form>
            <ButtonContainer>
              <AlternativeButton
                style={{
                  color: "#FF2957",
                  fontWeight: "600",
                  marginRight: "2rem",
                }}
              >
                Back
              </AlternativeButton>
              <PrimaryButton disabled={isdisabled}>
                Save & Continue
              </PrimaryButton>
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefineAudience;
