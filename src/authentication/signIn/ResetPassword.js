import React, { useState } from "react";
import {
  AuthBackground,
  InputFieldWrapper,
  LongButton,
} from "../../globalStyles";
import { SignUpContent, SignUpBody } from "../signup/SignUpStyled";
import Logo from "../../images/Logo.svg";
import { KBDisplayXs } from "../../components/fonts/fontSize";
import { Form } from "../../globalStyles";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";

const SignIn = () => {
  const [click, setClick] = useState(false);
  const [visible, setVisibility] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setVisibility(!visible);
  };

  const InputType = visible ? "text" : "password";

  return (
    <AuthBackground>
      <SignUpBody>
        <SignUpContent>
          <img style={{ marginTop: "5%" }} src={Logo} alt="King Cabana Logo" />
          <KBDisplayXs
            fontWeight="bold"
            style={{ textAlign: "center", color: "#484848", marginTop: "2%" }}
          >
            Reset Password
          </KBDisplayXs>

          <Form>
            <label style={{ marginBottom: "2%" }}>Password</label>
            <InputFieldWrapper>
              <input
                placeholder="Create a new password"
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

            <LongButton style={{ marginTop: "5%" }}>Submit</LongButton>

          </Form>
        </SignUpContent>
      </SignUpBody>
    </AuthBackground>
  );
};

export default SignIn;
