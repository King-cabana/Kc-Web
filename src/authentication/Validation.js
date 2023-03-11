
 const emailPattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/ ;
 const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;


function validateInputs(inputs) {
  const errors = {};

  if (!inputs) {
    throw new Error("inputs cannot be null or undefined");
  }

  if (!inputs.fullName) {
    errors.fullName = "Name should not be empty";
  }

  if (!inputs.email) {
    errors.email = "Email should not be empty";
  } else if (!emailPattern.test(inputs.email)) {
    errors.email = "Incorrect email format";
  }

  if (!inputs.password) {
    errors.password = "Password should not be empty";
  } else if (!passwordPattern.test(inputs.password)) {
    errors.password =
      "Password should not be less than 8 characters and " +
      "should contain at least one Capital letter, one special character and a number.";
  }

  if (!inputs.confirmPassword) {
    errors.confirmPassword = "Confirm Password should not be empty";
  } else if (inputs.confirmPassword !== inputs.password) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
}

function generateErrorMessages(errors) {
  const messages = {};
  Object.keys(errors).forEach((key) => {
    switch (key) {
      case "fullName":
        messages.fullName = errors.fullName;
        break;
      case "email":
        messages.email = errors.email;
        break;
      case "password":
        messages.password = errors.password;
        break;
      case "confirmPassword":
        messages.confirmPassword = errors.confirmPassword;
        break;
      default:
        break;
    }
  });
  return messages;
}

export default function validation(inputs, emailPattern, passwordPattern) {
  const errors = validateInputs(inputs, emailPattern, passwordPattern);
  return generateErrorMessages(errors);
}