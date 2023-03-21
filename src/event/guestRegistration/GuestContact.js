import React, { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { ErrorText, KBDisplayXs, KBTextXs } from "../../components/fonts/fontSize";
// import * as globalStyles from "../../globalStyles";
import { GCBody, GCFormPart, GCPicPart, GuestContactBg } from "./GuestContactStyled";
import { Form, InputFieldWrapper, LongButton } from "../../globalStyles";
import TopBar from "../../components/topBar/TopBar";


const GuestContact = () => {
  

  return (
    <>
    <TopBar />
    <GuestContactBg>
        <GCBody>
            <GCFormPart>
             <p style={{fontSize:'22px', fontWeight:'bold'}}>Guest Contact Information</p>
             <p style={{fontSize:'12px'}}>Please provide contact information for a more enjoyable experience.</p> 
            <Form style={{marginTop:'5%'}}onSubmit={""}>
            <label style={{ marginBottom: "2%", fontSize:'14px'}}>First Name</label>
            <InputFieldWrapper>
              <input placeholder="Enter your first name" name="fullName" onChange={""}
              />
            </InputFieldWrapper>

            <label style={{ marginBottom: "2%" , fontSize:'14px' }}>Last Name</label>
            <InputFieldWrapper>
              <input placeholder="Enter your last name" name="fullName" onChange={""}
              />
            </InputFieldWrapper>
           
            <label style={{ marginBottom: "2%", fontSize:'14px' }}>E-mail</label>
            <InputFieldWrapper>
              <input placeholder="Enter your Email address" name="email" onChange={""}
              />
            </InputFieldWrapper>

            <label style={{ marginBottom: "2%", fontSize:'14px' }}>Confirm E-mail</label>
            <InputFieldWrapper>
              <input placeholder="Re-enter your Email address" name="email" onChange={""}
              />
            </InputFieldWrapper>
           
           

          </Form>

            </GCFormPart>
            <GCPicPart/>
        </GCBody>
      
    </GuestContactBg>
    </>
  );
};

export default GuestContact;
