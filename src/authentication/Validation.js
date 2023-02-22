function Validation(inputs) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

  if(inputs.fullName === ""){
    error.fullName = "Name should not be empty"
  }

  if (inputs.email === "") {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(inputs.email)) {
    error.email = "Incorrect email";
  }

  if (inputs.password === "") {
    error.password = "Password should not be empty";
  } else if (!password_pattern.test(inputs.password)) {
    error.password =
      "Password should not be less than 8 characters and " +
      "should contain at least one Capital letter, one special character and a number.";
  }

  if (inputs.confirmPassword === ""){
    error.confirmPassword = "Confirm Password should not be empty"
  }
  else if (
    inputs.confirmPassword === "" ||
    inputs.confirmPassword !== inputs.password
  ) {
    error.confirmPassword = "Password not matched";
  }

  return error;
}

export default Validation