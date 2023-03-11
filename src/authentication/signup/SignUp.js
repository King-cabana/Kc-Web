import React, { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { ErrorText, KBDisplayXs, KBTextXs } from "../../components/fonts/fontSize";
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
import Validation from "../Validation";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { ImSpinner6 } from "react-icons/im";

const SignUp = () => {
  const [click, setClick] = useState(false);
  const [visible, setVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const [errors, setErrors] = useState({});

  const [inputs, setInput] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  function inputChange(e) {
    setInput({ ...inputs, [e.target.name]: e.target.value });
  
    const isFilled = Object.values(inputs).every((value) => value.trim() !== "");
    setAllFieldsFilled(isFilled);
  
    setDisabledButton(!isFilled || !allFieldsFilled);
  }

  const handleClick = () => {
    setClick(!click);
    setVisibility(!visible);
  };

  const InputType = visible ? "text" : "password";

  function handleValidation(e) {
    setErrors(Validation(inputs));
    // setDisabledButton(Object.keys(errors).length > 0);
  }

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await register(inputs);
      toast.success("Success, An Otp as been sent to your inbox.")
      navigate("/verifyemail");
    } catch (error) {
      setLoading(false);
      // toast.error(error?.response?.data);
      error?.response? toast.error(error?.response?.data?.message): 
      toast.error(error.message)
    } finally{
      setInput({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      
    }
    sessionStorage.setItem("email", inputs.email);
  };
  

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

          <Form onSubmit={handleSignUp}>
            <label style={{ marginBottom: "2%" }}>Full Name</label>
            <InputFieldWrapper>
              <input placeholder="Enter your name" name="fullName" onChange={inputChange}
              />
            </InputFieldWrapper>
            {errors.fullName && (
              <ErrorText>
                {errors.fullName}
              </ErrorText>
            )}

            <label style={{ marginBottom: "2%" }}>E-mail</label>
            <InputFieldWrapper>
              <input placeholder="Enter your E-mail" name="email" onChange={inputChange}
              />
            </InputFieldWrapper>
            {errors.email && (
              <ErrorText>
                {errors.email}
              </ErrorText>
            )}

            <label style={{ marginBottom: "2%" }}>Password</label>
            <InputFieldWrapper>
              <input placeholder="Create a password" type={InputType} name="password" onChange={inputChange}
              />
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
            {errors.password && (
              <ErrorText>
                {errors.password}
              </ErrorText>
            )}

            <label style={{ marginBottom: "2%" }}>Confirm Password</label>
            <InputFieldWrapper>
              <input placeholder="Re-enter password" type={"password"} name="confirmPassword" onChange={inputChange}
              />
            </InputFieldWrapper>
            {errors.confirmPassword && (
              <ErrorText>
                {errors.confirmPassword}
              </ErrorText>
            )}

            <div
              style={{ marginTop: "5%", display: "flex", alignItems: "center", gap:"10px" }}
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
                <span>Terms of service</span> and{" "}
                <span>Privacy Policy</span>
              </KBTextXs>
            </div>
            <LongButton
              style={{ marginTop: "5%" }}
              type="submit"
              disabled={disabledButton}
              onClick={handleValidation}
            >
              {loading ? <ImSpinner6 size={"1.5rem"} /> : "Sign up"}
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
            Already have an account?
            <span>
              Login
            </span>
          </LogInLink>
        </SignUpContent>
      </SignUpBody>
    </AuthBackground>
  );
};

export default SignUp;
