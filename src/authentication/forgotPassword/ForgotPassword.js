import React, { useState } from "react";
import {
  AuthBackground,
  InputFieldWrapper,
  LongButton,
} from "../../globalStyles";
import { SignUpContent, SignUpBody, LogInLink } from "../signup/SignUpStyled";
import Logo from "../../images/Logo.svg";
import { KBDisplayXs, KBTextS } from "../../components/fonts/fontSize";
import { Form } from "../../globalStyles";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { forgotPassword } from "../../redux/service/authService";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
     await forgotPassword(email);
     alert("An Otp has been sent to " + email)
     navigate("/forgotpassword-otp-verification")
    } catch (error) {
      alert(error.response.data);
    } finally{
      setEmail("");
    }
  };

  return (
    <AuthBackground>
      <SignUpBody>
        <SignUpContent>
          <img style={{ marginTop: "5%" }} src={Logo} alt="King Cabana Logo" />
          <KBDisplayXs
            fontWeight="bold"
            style={{ textAlign: "center", color: "#484848", marginTop: "5%" }}
          >
            Forgot Password?
          </KBDisplayXs>
          <KBTextS
            style={{ marginTop: "3%", marginBottom: "5%", fontSize: "12px" }}
          >
            Enter your registered email to receive your password reset
            instructions{" "}
          </KBTextS>

          <Form onSubmit={handleSubmit}>
            <label style={{ marginBottom: "2%" }}>E-mail</label>
            <InputFieldWrapper>
              <input
                placeholder="Enter your E-mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </InputFieldWrapper>

            <LongButton
              style={{ marginTop: "5%" }}
              type="submit"
            >
              Submit
            </LongButton>

            <LogInLink
              style={{
                marginTop: "5%",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
              to="/logIn"
            >
              <ArrowLongLeftIcon
                className="h-6 h-6 text-gray-500"
                style={{ width: "20px", color: "#ff2957" }}
              />
              <span
                style={{
                  color: "#ff2957",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                Back to login page
              </span>
            </LogInLink>
          </Form>
        </SignUpContent>
      </SignUpBody>
    </AuthBackground>
  );
};

export default ForgotPassword;
