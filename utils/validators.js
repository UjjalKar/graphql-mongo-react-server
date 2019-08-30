module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  let errors = {};
  if (username.trim() === "") {
    errors.username = "Username connot be empty!";
  }
  if (email.trim() === "") {
    errors.email = "email connot be empty!";
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "Email is not valid!";
    }
  }
  if (password === "") {
    errors.password = "Password connot be empty!";
  } else if (password !== confirmPassword) {
    errors.password = "Password must match!";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};

module.exports.validateLoginInput = (username, password) => {
  let errors = {};
  if (username.trim() === "") {
    errors.username = "Username connot be empty!";
  }
  if (password === "") {
    errors.password = "Password connot be empty!";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};
