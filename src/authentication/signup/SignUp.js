import React, { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { KBDisplayXs, KBTextXs } from "../../components/fonts/fontSize";
import {
  AuthBackground,
  Div,
  Form,
  Horizontal,
  InputFieldWrapper,
  LongButton,
  Or,
  SocialIconsHolder,
} from "../../globalStyles";
import google from "../../images/Google.svg";
import linkedin from "../../images/linkedin.svg";
import Logo from "../../images/Logo.svg";
import { register } from "../../redux/service/authService";
import { LogInLink, SignUpBody, SignUpContent } from "./SignUpStyled";
// import { register } from "../../redux/slices/authSlice";

const SignUp = () => {
  const [click, setClick] = useState(false);
  const [visible, setVisibility] = useState(false);

  const [inputs, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function inputChange(e) {
    setInput({ ...inputs, [e.target.name]: e.target.value });
  }

  // const dispatch = useDispatch();
  const handleSignUp = () => {
    alert("handle signup");
    console.log(inputs);
    register(inputs);
  };

  const handleClick = () => {
    setClick(!click);
    setVisibility(!visible);
  };

  const InputType = visible ? "text" : "password";

  return (
    <AuthBackground>
      <SignUpBody>
        <SignUpContent>
          <img style={{ marginTop: "25%" }} src={Logo} alt="King Cabana Logo" />
          <KBDisplayXs
            fontWeight="700"
            style={{ textAlign: "left", color: "#484848", marginTop: "2%" }}
          >
            Sign up
          </KBDisplayXs>

          <Form>
            <label style={{ marginBottom: "2%" }}>Full Name</label>
            <InputFieldWrapper>
              <input
                placeholder="Enter your name"
                name="fullname"
                onChange={inputChange}
              ></input>
            </InputFieldWrapper>

            <label style={{ marginBottom: "2%" }}>E-mail</label>
            <InputFieldWrapper>
              <input
                placeholder="Enter your E-mail"
                name="email"
                onChange={inputChange}
              ></input>
            </InputFieldWrapper>

            <label style={{ marginBottom: "2%" }}>Password</label>
            <InputFieldWrapper>
              <input
                placeholder="Create a password"
                type={InputType}
                // required
                name="password"
                onChange={inputChange}
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
                // required
                name="confirmPassword"
                onChange={inputChange}
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
            <LongButton
              style={{ marginTop: "5%" }}
              type="button"
              onClick={handleSignUp}
            >
              Sign up
            </LongButton>
          </Form>

          <Div style={{ marginTop: "5%" }}>
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
