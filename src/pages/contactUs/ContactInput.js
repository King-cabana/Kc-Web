import React, { useState } from "react";
import {
  Container,
  Form,
  ContactInfo,
  ContactText,
  InputInfo,
  InputBoxLabel,
  InputBox,
} from "./ContactUsStyled";

const ContactInput = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dropMessage, setDropMessage] = useState("");

  async function sendMessage() {
    let item = { firstName, lastName, email, phoneNumber, dropMessage };
    console.log(item);
  }

  return (
    <>
      <Container>
        <Form>
          <ContactInfo>Contact us</ContactInfo>
          <ContactText>
            Fill the form and our team is waiting to attend to you asap
          </ContactText>

          <InputInfo>
            <InputBoxLabel>
              <label>First Name</label>
              <InputBox>
                <input
                  placeholder="Enter Your First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </InputBox>
            </InputBoxLabel>
            <InputBoxLabel>
              <label>Last Name</label>
              <InputBox>
                <input
                  placeholder="Enter Your Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </InputBox>
            </InputBoxLabel>
            <InputBoxLabel>
              <label>E - Mail</label>
              <InputBox>
                <input
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputBox>
            </InputBoxLabel>
            <InputBoxLabel>
              <label>Phone Number</label>
              <InputBox>
                <input
                  placeholder="Enter Your Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </InputBox>
            </InputBoxLabel>
            <InputBoxLabel>
              <label>Drop Messages</label>
              <InputBox>
                <textarea
                  placeholder="What will you like us to provide you?"
                  value={dropMessage}
                  onChange={(e) => setDropMessage(e.target.value)}
                />
              </InputBox>
            </InputBoxLabel>

            <button type="submit" onClick={sendMessage} width="250px">
              send message
            </button>
          </InputInfo>
        </Form>
      </Container>
    </>
  );
};

export default ContactInput;
