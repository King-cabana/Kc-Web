import React, { useState, useEffect } from "react";
import {
  GCBody,
  GCFormPart,
  GCPicPart,
  GuestContactBg,
  TagHolder,
} from "./GuestContactStyled";
import { Form, InputFieldWrapper} from "../../globalStyles";
import TopBar from "../../components/topBar/TopBar";
import { BudgetTitle2, ButtonContainer } from "../budgetInventory/BudgetStyled";
import { AbsolutePrimaryButton } from "../../components/button/button";
import { useNavigate, useParams } from "react-router";
import { Tags } from "./GuestRegistrationStyled";
import { API_URL_2 } from "../../redux/service/authService";
import axios from "axios";
import { guestRegister } from "../../redux/service/GuestContactRegister";
import { toast } from "react-toastify";

const GuestContact = () => {
  const [event, setEvent] = useState();
  const { id } = useParams();

  const [inputs, setInput] = useState({
    eventId : id,
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
  });

  
  function inputChange(e) {
    setInput({ ...inputs, [e.target.name]: e.target.value });

  }

  const navigate = useNavigate();
  const eventTags = event?.tags.map((tag) => <ul key={tag}>{tag}</ul>);

  useEffect(() => {
    const fetchEvent = async () => {
    const token =  localStorage.getItem("bearerToken")
      try {
        const headers = {
          'Authorization': `Bearer ${token}`,
        };
        const { data } = await axios.get(API_URL_2 + `events/${id}`, { headers });
        setEvent(data);
      } catch (error) {
        if (error?.response?.status === 400) {
          navigate("*");
        }
        throw error;
      }
    };
    fetchEvent();
    return () => {};
  }, [event?.id]);


  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await guestRegister(inputs);
      navigate("/registered");
    } catch (error) {
      error?.response? toast.error(error?.response?.data?.message): 
      toast.error(error.message)
    } finally{
      setInput({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
      });
      
    }
  };
  

  return (
    <>
      <TopBar />
      <GuestContactBg>
        <GCBody>
          <GCFormPart>
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              Guest Contact Information
            </p>
            <p style={{ fontSize: "12px" }}>
              Please provide contact information for a more enjoyable
              experience.
            </p>
            <Form style={{ marginTop: "5%" }} onSubmit={handleRegister}>
              <label style={{ marginBottom: "2%", fontSize: "14px" }}>
                First Name
              </label>
              <InputFieldWrapper>
                <input
                  placeholder="Enter your first name"
                  name="firstName"
                  onChange={inputChange}
                />
              </InputFieldWrapper>

              <label style={{ marginBottom: "2%", fontSize: "14px" }}>
                Last Name
              </label>
              <InputFieldWrapper>
                <input
                  placeholder="Enter your last name"
                  name="lastName"
                  onChange={inputChange}
                />
              </InputFieldWrapper>

              <label style={{ marginBottom: "2%", fontSize: "14px" }}>
                E-mail
              </label>
              <InputFieldWrapper>
                <input
                  placeholder="Enter your Email address"
                  name="email"
                  onChange={inputChange}
                />
              </InputFieldWrapper>

              <label style={{ marginBottom: "2%", fontSize: "14px" }}>
                Confirm E-mail
              </label>
              <InputFieldWrapper>
                <input
                  placeholder="Re-enter your Email address"
                  name="confirmEmail"
                  onChange={inputChange}
                />
              </InputFieldWrapper>
            </Form>
          </GCFormPart>
          <GCPicPart />
        </GCBody>

        <TagHolder>
          <BudgetTitle2>Tags</BudgetTitle2>
          <Tags style={{ padding: "1% 0%" }}>
            {event?.tags ? eventTags : "---"}
          </Tags>
        </TagHolder>
      </GuestContactBg>

        <ButtonContainer style={{ margin: "0rem"}}>
        <AbsolutePrimaryButton onClick={handleRegister}>
          Register
        </AbsolutePrimaryButton>
      </ButtonContainer>
     
    </>
  );
};

export default GuestContact;
