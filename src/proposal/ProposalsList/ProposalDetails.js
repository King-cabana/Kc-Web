import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  EventPlanningTable,
  SM,
  TableHead,
  TableTr,
  TdLarge,
  TdMedium,
  TdSmall,
  ViewButton,
  LoadingSection,
} from "../../event/eventPlanning/EventPlanningStyled";
import {
  AlignCenter,
  OptionsContainer,
  OptionsText,
} from "./ProposalsListStyled";
import { SlOptionsVertical } from "react-icons/sl";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AbsolutePrimaryButton } from "../../components/button/button";
import { API_URL_2 } from "../../redux/service/authService";
import { setEventCreated } from "../../redux/slices/eventCreatedSlice";

const ProposalDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [options, setOptions] = useState(false);
  const [active, setActive] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.userDetails);
  const organizer = useSelector((state) => state.eventOrganizerProfile);
  const [createdProposal, setCreatedProposal] = useState([]);

  const filteredProposals = createdProposal.filter((proposal) =>
    active.some((event) => event.id === proposal.eventId)
  );
  const toggleOptions = () => {
    setOptions(!options);
  };

  useEffect(() => {
    // console.log(organizer);
    // console.log(event);
    const fetchOrganizerEvents = async () => {
      try {
        const { data } = await axios.get(
          API_URL_2 + `events/organizer-profile/${organizer?.id}`,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
        dispatch(setEventCreated(data));

        setCreatedProposal([
          // {
          //   id: 1,
          //   eventId: 6,
          //   eventSponsor: "Coca Cola",
          //   eventBudgetAddOn: "#40million for entertainment",
          // },
          // {
          //   id: 2,
          //   eventId: 10,
          //   eventSponsor: "Pepsi",
          //   eventBudgetAddOn: "2 billion for entertainment",
          // },
          // {
          //   id: 3,
          //   eventId: 15,
          //   eventSponsor: "Pepsi",
          //   eventBudgetAddOn: "2 billion for entertainment",
          // },
        ]);

        // Filter createdProposal for events that are active
        // const filteredProposals = createdProposal.filter((proposal) =>
        //   data.some((event) => event.id === proposal.eventId)
        // );

        // Push the matching id and eventId into active
        const updatedActive = data.map((event) => {
          const matchingProposal = filteredProposals.find(
            (proposal) => proposal.eventId === event.id
          );
          if (matchingProposal) {
            return {
              ...event,
              proposalId: matchingProposal.id,
              proposalEventId: matchingProposal.eventId,
              eventSponsor: matchingProposal.eventSponsor,
              eventBudgetAddOn: matchingProposal.eventBudgetAddOn,
            };
          }
          return event;
        });
        setActive(updatedActive);
        // console.log(active);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrganizerEvents();
  }, [createdProposal, organizer?.id, user?.token]);

  return (
    <div
      style={{ overflowX: "auto" }}
      onClick={() => options === true && setOptions(false)}
    >
      {loading ? (
        <LoadingSection style={{ width: "100vw" }}>
          <ReactLoading type="spin" color="#FF2957" height={100} width={50} />
        </LoadingSection>
      ) : (
        <div style={{ marginBottom: "10rem" }}>
          {active?.map((data, index) => (
            <EventPlanningTable key={index}>
              <tbody>
                <TableHead>
                  <TdLarge
                    style={{ fontWeight: "600", padding: "1.5rem 1rem" }}
                  >
                    Proposal for {data.eventName} <br />
                    <SM>
                      {data.eventStartDate} at {data.eventStartTime} {data.id}
                    </SM>
                  </TdLarge>
                  <TdMedium style={{ border: "none", textAlign: "end" }}>
                    <AbsolutePrimaryButton
                      onClick={() =>
                        navigate(`/event/proposal/proposal-buildup/${data.id}`)
                      }
                    >
                      Generate Proposal
                    </AbsolutePrimaryButton>
                  </TdMedium>
                </TableHead>
                {data.eventSponsors && (
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
                        To {data.eventSponsor}
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
                )}
              </tbody>
            </EventPlanningTable>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProposalDetails;
