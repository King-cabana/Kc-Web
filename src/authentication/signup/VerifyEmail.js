import React, { useDispatch, useState } from "react";
import OtpInput from "react-otp-input";
import { LongButton, Form, AuthBackground } from "../../globalStyles";
import { VerifyBody } from "./SignUpStyled";
import Logo from "../../images/Logo.svg";
import { verifyEmail } from "../../redux/service/authService";
// import { apiFetch } from '../../../redux/authSlice';

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");

  const handleSubmit = () => {
    console.log(otp);
    verifyEmail(otp);
  }


  return (
    <AuthBackground>
      <VerifyBody>
        <img src={Logo} alt="King Cabana Logo" />
        <h5 style={{ marginTop: "5%", fontWeight: "bold", color: "#484848" }}>
          Email Verification
        </h5>
        <p style={{ textAlign: "center", fontSize: "12px" }}>
          Enter the verification code sent to Peterenumah@gmail.com
        </p>

        <Form>
          <label style={{ fontWeight: "bold", color: "#484848" }}>
            input code
          </label>
          <OtpInput
            onChange={setOtp}
            value={otp}
            numInputs={6}
            containerStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
            }}
            inputStyle={{
              width: "40px",
              height: "40px",
              outline: "none",
              margin: "5px",
              borderRadius: "5px",
              border: "1px solid #c4c4c4",
            }}
            // isInputSecure
            separator={<span> </span>}
          />
          <LongButton style={{ marginTop: "5%" }} type="button" onClick={handleSubmit}>Verify</LongButton>
          <p
            style={{
              color: "#ff2957",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "12px",
              marginTop: "20px",
              cursor:'pointer'
            }}
          >
            Resend code
          </p>
        </Form>
      </VerifyBody>
    </AuthBackground>
  );
};

export default VerifyEmail;
