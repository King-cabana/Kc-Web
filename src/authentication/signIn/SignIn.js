import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  AuthBackground,
  Div,
  Horizontal,
  InputFieldWrapper,
  LongButton,
  Or,
  SocialIconsHolder,
} from "../../globalStyles";
import { SignUpContent, LogInLink, SignUpBody } from "../signup/SignUpStyled";
import Logo from "../../images/Logo.svg";
import { KBDisplayXs, KBTextXs } from "../../components/fonts/fontSize";
import { Form } from "../../globalStyles";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";
import google from "../../images/Google.svg";
import linkedin from "../../images/linkedin.svg";

const SignIn = () => {
  const [click, setClick] = useState(false);
  const [visible, setVisibility] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setVisibility(!visible);
  };

  const InputType = visible ? "text" : "password";

  const navigate = useNavigate();

  const navigateToReset = () => {
    navigate("/resetpassword");
  };


  return (
    <AuthBackground >
      <SignUpBody>
        <SignUpContent>
          <img style={{marginTop:'5%'}} src={Logo} alt="King Cabana Logo" />
          <KBDisplayXs
            fontWeight="700"
            style={{ textAlign: "left", color: "#484848", marginTop: "2%" }}
          >
            log in
          </KBDisplayXs>

          <Form>

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

            <div
              style={{ marginTop: "5%", display: "flex", alignItems: "center", justifyContent:'space-between'}}
            >
              <div style={{display:'flex', alignitems:'center', justifyContent:'center', gap:'5px'}}> 
              <input type="checkbox" required></input>
              <KBTextXs
                style={{
                  textAlign: "center",
                  marginBottom: "0",
                  lineHeight: "1em",
                }}
              >
                Keep me signed in{" "}
              </KBTextXs>
              </div> 
              <p style={{ cursor:'pointer', color: "#ff2957", fontSize:'12px'}} onClick={navigateToReset}>Forgot Password?</p>
            </div>
            <LongButton style={{marginTop:'5%'}}>Log in</LongButton>
          </Form>

          <Div style={{marginTop:'5%'}}>
            <Horizontal />
            <Or>Or Login with</Or>
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

          <LogInLink to="/signup">
            Don't have an account?{" "}
            <span
              style={{ color: "#ff2957", fontWeight: "500", textAlign: "left" }}
            >
              Signup
            </span>
          </LogInLink>
        </SignUpContent>
      </SignUpBody>
    </AuthBackground>
  );
};

export default SignIn;
