import React, { useState } from "react";
import {
  AuthBackground,
  Div,
  Horizontal,
  InputFieldWrapper,
  LongButton,
  Or,
  SocialIconsHolder,
} from "../../globalStyles";
import { SignUpContent, LogInLink, SignUpBody } from "./SignUpStyled";
import Logo from "../../images/Logo.svg";
import { KBDisplayXs, KBTextXs } from "../../components/fonts/fontSize";
import { Form } from "../../globalStyles";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";
import google from "../../images/Google.svg";
import linkedin from "../../images/linkedin.svg";

const SignUp = () => {
  const [click, setClick] = useState(false);
  const [visible, setVisibility] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setVisibility(!visible);
  };

  const InputType = visible ? "text" : "password";

  return (
    <AuthBackground >
      <SignUpBody>
        <SignUpContent>
          <img style={{marginTop:'25%'}} src={Logo} alt="King Cabana Logo" />
          <KBDisplayXs
            fontWeight="700"
            style={{ textAlign: "left", color: "#484848", marginTop: "2%" }}
          >
            Sign up
          </KBDisplayXs>

          <Form>
            <label style={{ marginBottom: "2%" }}>Full Name</label>
            <InputFieldWrapper>
              <input placeholder="Enter your name"></input>
            </InputFieldWrapper>

            <label style={{ marginBottom: "2%" }}>E-mail</label>
            <InputFieldWrapper>
              <input placeholder="Enter your E-mail"></input>
            </InputFieldWrapper>

            <label style={{ marginBottom: "2%" }}>Password</label>
            <InputFieldWrapper>
              <input
                placeholder="Create a password"
                type={InputType}
                required
              ></input>
              {click ? (
                <HiOutlineEyeOff
                  onClick={handleClick}
                  style={{
                    margin: "auto",
                    top: "auto",
                    marginRight: "3%",
                    color: "#C4C4C4",
                  }}
                />
              ) : (
                <HiOutlineEye
                  onClick={handleClick}
                  style={{
                    margin: "auto",
                    top: "auto",
                    marginRight: "3%",
                    color: "#C4C4C4",
                  }}
                />
              )}
            </InputFieldWrapper>

            <label style={{ marginBottom: "2%" }}>Confirm Password</label>
            <InputFieldWrapper>
              <input
                placeholder="Re-enter password"
                type={InputType}
                required
              ></input>
              {click ? (
                <HiOutlineEyeOff
                  onClick={handleClick}
                  style={{
                    margin: "auto",
                    top: "auto",
                    marginRight: "3%",
                    color: "#C4C4C4",
                  }}
                />
              ) : (
                <HiOutlineEye
                  onClick={handleClick}
                  style={{
                    margin: "auto",
                    top: "auto",
                    marginRight: "3%",
                    color: "#C4C4C4",
                  }}
                />
              )}
            </InputFieldWrapper>

            <div
              style={{ marginTop: "5%", display: "flex", alignItems: "center" }}
            >
              <input type="checkbox" required></input>
              <KBTextXs
                style={{
                  textAlign: "center",
                  marginBottom: "0",
                  lineHeight: "1em",
                }}
              >
                I agree to King Cabana’s{" "}
                <span style={{ color: "#ff2957" }}>Terms of service</span> and{" "}
                <span style={{ color: "#ff2957" }}>Privacy Policy</span>
              </KBTextXs>
            </div>
            <LongButton style={{marginTop:'5%'}}>Sign up</LongButton>
          </Form>

          <Div style={{marginTop:'5%'}}>
            <Horizontal />
            <Or>Or Signup with</Or>
            <Horizontal />
          </Div>

          <div style={{ marginTop: "5%", marginBottom: "5%" }}>
            <InputFieldWrapper
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <SocialIconsHolder style={{ border: "transparent" }}>
                <img src={google} alt="google" />
              </SocialIconsHolder>
              <p
                style={{
                  marginBottom: "0",
                  fontWeight: "600",
                  fontSize: "12px",
                }}
              >
                Sign up with Google
              </p>
            </InputFieldWrapper>
            <InputFieldWrapper
              style={{
                marginTop: "3%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <SocialIconsHolder style={{ border: "transparent" }}>
                <img src={linkedin} alt="linkedin" />
              </SocialIconsHolder>
              <p
                style={{
                  marginBottom: "0",
                  fontWeight: "600",
                  fontSize: "12px",
                }}
              >
                Sign up with linkedin
              </p>
            </InputFieldWrapper>
          </div>

          <LogInLink to="/logIn">
            Already have an account?{" "}
            <span
              style={{ color: "#ff2957", fontWeight: "500", textAlign: "left" }}
            >
              Login
            </span>
          </LogInLink>
        </SignUpContent>
      </SignUpBody>
    </AuthBackground>
  );
};

export default SignUp;
