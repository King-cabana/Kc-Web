import React, { useState } from "react";
import {
  EventPlanningTable,
  SM,
  TableHead,
  TableTr,
  TdLarge,
  TdMedium,
  TdSmall,
  ViewButton,
} from "../../event/eventPlanning/EventPlanningStyled";
import {
  AlignCenter,
  OptionsContainer,
  OptionsText,
} from "./ProposalsListStyled";
import { SlOptionsVertical } from "react-icons/sl";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AbsolutePrimaryButton } from "../../components/button/button";

const ProposalDetails = () => {
  const [options, setOptions] = useState(false);

  const toggleOptions = () => {
    setOptions(!options);
  };

  return (
    <div
      style={{ overflowX: "auto" }}
      onClick={() => options === true && setOptions(false)}
    >
      <EventPlanningTable style={{ marginBottom: "10rem" }}>
        <tbody>
          <TableHead>
            <TdLarge style={{ fontWeight: "600", padding: "1.5rem 1rem" }}>
              Proposal for Kofoworola Ademola Hall Week “23 <br />
              <SM>Tuesday, January 22, 2023 at 7:00 PM WAT</SM>
            </TdLarge>
            <TdMedium style={{ border: "none", textAlign: "end" }}>
              <AbsolutePrimaryButton>Generate Proposal</AbsolutePrimaryButton>
            </TdMedium>
          </TableHead>

          <TableTr
          // backgroundColor={data.selected ? "#f9e6ea" : "white"}
          //   onClick={() => handleApiClick(data, index)}
          >
            <TdLarge style={{ padding: "1rem 0.5rem" }}>
              <AlignCenter>
                <HiOutlineDocumentText
                  style={{ marginRight: "0.5rem" }}
                  size="1.5rem"
                />
                Kofoworola Ademola Hall Week Proposal to Cocacola
              </AlignCenter>
            </TdLarge>

            <TdSmall style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  right: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <ViewButton
                // onClick={(event) => handleViewButtonClick(event, data)}
                >
                  View
                </ViewButton>
              </div>
              <div>
                <SlOptionsVertical
                  onClick={toggleOptions}
                  style={{
                    position: "absolute",
                    right: "1rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
              </div>

              {options && (
                <OptionsContainer>
                  <OptionsText>Edit</OptionsText>
                  <OptionsText color="#FF4646">Delete</OptionsText>
                </OptionsContainer>
              )}
            </TdSmall>
          </TableTr>
        </tbody>
      </EventPlanningTable>
    </div>
  );
};

export default ProposalDetails;
