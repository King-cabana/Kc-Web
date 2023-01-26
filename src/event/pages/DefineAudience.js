import React, { useState } from "react";
import {
  ChechkBox,
  Form,
  RadioButton,
  RadioButtonWrapper,
  InputOthers,
  Valueholder,
} from "../../globalStyles";
import { KBTextXl, KBDisplayXs } from "../../components/fonts/fontSize";
import { ButtonContainer } from "./DefineAudienceStyled";
import {
  AlternativeButton,
  AlternativeButton2,
  PrimaryButton,
} from "../../components/button/button";
import {
  OthersInput,
  Radio,
  RadioInput,
  RadioLabel,
} from "../budgetInventory/ContactInfoStyled";

const DefineAudience = () => {
  const [isdisabled, setIsDisabled] = useState(true);
  const [other, setOthers] = useState(false);

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
          height:"100vh",
          padding: "2% 8%",
          display: "flex",
          flexDirection: "column",
          alignItmes: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <KBDisplayXs style={{color:'#484848'}} fontWeight={600}>Define Audience</KBDisplayXs>
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
                  <Valueholder>
                    <RadioButton
                      onChange={(e) => setAge(e.target.value)}
                      value={"17 and younger"}
                    />
                    17 and younger
                  </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <Valueholder>
                    <RadioButton
                      onChange={(e) => setAge(e.target.value)}
                      value={"18-20"}
                    />
                    18-20
                  </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <Valueholder>
                    <RadioButton
                      onChange={(e) => setAge(e.target.value)}
                      value={"21-29"}
                    />
                    21-29
                  </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <Valueholder>
                    <RadioButton
                      onChange={(e) => setAge(e.target.value)}
                      value={"30-39"}
                    />
                    30-39
                  </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <Valueholder>
                    <RadioButton
                      onChange={(e) => setAge(e.target.value)}
                      value={"40-49"}
                    />
                    40-49
                  </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <Valueholder>
                    <RadioButton
                      onChange={(e) => setAge(e.target.value)}
                      value={"50-59"}
                    />
                    50-59
                  </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <Valueholder>
                    <RadioButton
                      onChange={(e) => setAge(e.target.value)}
                      value={"60 and older"}
                    />
                    60 and older
                  </Valueholder>
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
                  <Valueholder>
                  <RadioButton
                    onChange={(e) => setIncomeRange(e.target.value)}
                    value={"0 - 49,999"}
                  />
                  0 - 49,999
                  </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                <Valueholder>
                  <RadioButton />
                  50,000 - 99,999
                  </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                <Valueholder>
                  <RadioButton />
                  100,000 and above
                </Valueholder>
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
                  <Valueholder>
                  <ChechkBox
                    checked={gender.male}
                    onChange={() =>
                      setGender({ ...gender, male: !gender.male })
                    }
                  />
                  Male
                  </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <Valueholder>
                  <ChechkBox />
                  Female
                  </Valueholder>
                </RadioButtonWrapper>

                <RadioButtonWrapper>
                  <Valueholder>
                  <RadioInput
                    type="checkbox"
                    id="others"
                    name="role"
                    value="others"
                    onClick={() => setOthers(!other)}
                  />
                  Others
                  </Valueholder>
                </RadioButtonWrapper>
                <InputOthers
                  type="text"
                  placeholder="Specify for others"
                  display={other ? "flex" : "none"}
                ></InputOthers>
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
                  <Valueholder>
                    <ChechkBox />
                    Christianity
                  </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <Valueholder>
                    <ChechkBox />
                    Islam
                  </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <Valueholder>
                    <RadioInput
                      type="checkbox"
                      id="others"
                      name="role"
                      value="others"
                      onClick={() => setOthers(!other)}
                    />
                    Others
                  </Valueholder>
                </RadioButtonWrapper>
                <InputOthers
                  type="text"
                  placeholder="Specify for others"
                  display={other ? "flex" : "none"}
                ></InputOthers>
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
                  <Valueholder>
                    <ChechkBox />
                    Single
                  </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <Valueholder>
                    <ChechkBox />
                    Married
                  </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <Valueholder>
                    <ChechkBox />
                    Divorced
                  </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox />
                  Widowed
                </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                <Valueholder>
                  <RadioInput
                    type="checkbox"
                    id="others"
                    name="role"
                    value="others"
                    onClick={() => setOthers(!other)}
                  />
                  Others
                </Valueholder>
                </RadioButtonWrapper>
                <InputOthers
                  type="text"
                  placeholder="Specify for others"
                  display={other ? "flex" : "none"}
                ></InputOthers>
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
                <Valueholder>
                  <ChechkBox />
                  Employed
                </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox />
                  Self Employed
                </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox />
                  Unemployed
                </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox />
                  Retired
                </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox />
                  Disable
                </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                <Valueholder>
                  <RadioInput
                    type="checkbox"
                    id="others"
                    name="role"
                    value="others"
                    onClick={() => setOthers(!other)}
                  />
                  Others
                </Valueholder>
                </RadioButtonWrapper>
                <InputOthers
                  type="text"
                  placeholder="Specify for others"
                  display={other ? "flex" : "none"}
                ></InputOthers>
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
                <Valueholder>
                  <ChechkBox />
                  High School
                </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox />
                  College/Polytechnic
                </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox />
                  Bachelor’s
                </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                <Valueholder>
                  <ChechkBox />
                  Master’s
                </Valueholder>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                <Valueholder>
                  <RadioInput
                    type="checkbox"
                    id="others"
                    name="role"
                    value="others"
                    onClick={() => setOthers(!other)}
                  />
                  Others
                  </Valueholder>
                </RadioButtonWrapper>
                <InputOthers
                  type="text"
                  placeholder="Specify for others"
                  display={other ? "flex" : "none"}
                ></InputOthers>
              </div>
            </Form>
            <ButtonContainer>
              <AlternativeButton2
                style={{
                  color: "#FF2957",
                  fontWeight: "600",
                  marginRight: "2rem",
                }}
              >
                Back
              </AlternativeButton2>
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
