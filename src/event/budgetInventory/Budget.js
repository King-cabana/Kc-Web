import React, { useEffect, useState } from "react";
import {
  PrimaryButton,
  PrimaryButton3,
  AlternativeButton2,
} from "../../components/button/button";
import ProgressBar from "../progressBar/ProgressBar";
import CreateEventTopBar from "../topBar/CreateEventTopBar/CreateEventTopBar";
import {
  BudgetInventoryContainer,
  BudgetInventoryHeader,
  BudgetInventorySubtitle,
  BudgetSection,
  BudgetTitle1,
  BudgetTitle2,
  BudgetSubtitle,
  BudgetUpload,
  FormContainer,
  ButtonContainer,
  Supported,
  FileWrapper,
  CustomWrapper,
} from "./BudgetStyled";

const Budget = () => {
  const [file, setFile] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [correctFileSize, setCorrectFileSize] = useState(false);
  const [isDisabled, setisDisabled] = useState(true);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    const MAX_FILE_SIZE = 1024; // 1MB

    if (!file) {
      setErrorMsg("*Please a choose file*");
      setIsSuccess(false);
      setisDisabled(true);
      return;
    }

    const fileSizeKiloBytes = file.size / 1024;

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("*File size is greater than maximum limit*");
      setIsSuccess(false);
      setCorrectFileSize(false);
      setisDisabled(true);
      return;
    }

    setErrorMsg("");
    setIsSuccess(true);
    setCorrectFileSize(true);
    setisDisabled(false);
  }, [file]);

  const handleSubmit = async function (e) {
    e.preventDefault();
    console.log(file);
  };

  return (
    <>
      <BudgetInventoryContainer>
        <BudgetInventoryHeader>
          <BudgetTitle1>Budget & Take Inventory</BudgetTitle1>
          <BudgetInventorySubtitle>
            In order to capture the range of tangible benefits your organization
            has to offer, you need to prepare an inventory of your assets.
          </BudgetInventorySubtitle>
        </BudgetInventoryHeader>

        <BudgetSection>
          <BudgetTitle2>Budget</BudgetTitle2>
          <BudgetUpload>
            <BudgetSubtitle>Event Budget Template</BudgetSubtitle>
            <BudgetInventorySubtitle>
              Work within clear parameters for your event
            </BudgetInventorySubtitle>

            <FormContainer>
              <FileWrapper>
                <CustomWrapper>
                  <input
                    type="file"
                    style={{ cursor: "pointer" }}
                    onChange={handleFileChange}
                  />
                </CustomWrapper>
                <PrimaryButton3>Upload</PrimaryButton3>
              </FileWrapper>
              <Supported>Support files; PDF, JPG, CSV</Supported>
              <Supported
                style={{
                  color: "#ff2957",
                }}
              >
                Not more than 1mb
              </Supported>
              {correctFileSize && <div>{file && `${file.name}`}</div>}
              {isSuccess ? (
                <p style={{ color: "green" }}>Validation successful</p>
              ) : null}
              <p style={{ color: "#ff2957", fontSize: "16px" }}>{errorMsg}</p>

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
                <PrimaryButton onClick={handleSubmit} disabled={isDisabled}>
                  Save & Continue
                </PrimaryButton>
              </ButtonContainer>
            </FormContainer>
          </BudgetUpload>
        </BudgetSection>
      </BudgetInventoryContainer>
    </>
  );
};

export default Budget;
