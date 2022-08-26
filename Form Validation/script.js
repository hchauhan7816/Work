$(document).ready(function () {
  $(UsernameValidation).hide();
  $(EmailValidation).hide();
  $(PasswordValidation).hide();
  $(ConfirmPasswordValidation).hide();

  let usernameError = true;
  let emailError = true;
  let passwordError = true;
  let confirmPasswordError = true;

  $(username).keyup(function () {
    usernameValidationFunc();
  });

  function usernameValidationFunc() {
    let value = $(username).val();
    console.log(value);
    if (value.length == 0) {
      $(UsernameValidation).text("Username Cannot be Empty");
      $(UsernameValidation).show();
      usernameError = true;
      return false;
    } else if (value.length < 4) {
      $(UsernameValidation).text(
        "Username should contain atleast 4 characters"
      );
      $(UsernameValidation).show();
      usernameError = true;
      return false;
    } else {
      $(UsernameValidation).hide();
      usernameError = false;
      return true;
    }
  }

  $(email).keyup(function () {
    emailValidationFunc();
  });

  function emailValidationFunc() {
    let value = $(email).val();
    console.log(value);
    let regx = new RegExp(
      /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    );
    if (value.length == 0) {
      $(EmailValidation).text("Email Cannot be Empty");
      $(EmailValidation).show();
      emailError = true;
      return false;
    } else if (!regx.test(value)) {
      $(EmailValidation).text("Email should be in correct format");
      $(EmailValidation).show();
      emailError = true;
      return false;
    } else {
      $(EmailValidation).hide();
      emailError = false;
      return true;
    }
  }

  $(password).keyup(function () {
    passwordValidationFunc();
  });

  function passwordValidationFunc() {
    let value = $(password).val();
    console.log(value);
    let regx = new RegExp(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
    );

    confirmPasswordValidationFunc();
    if (value.length == 0) {
      $(PasswordValidation).text("Password Cannot be Empty");
      $(PasswordValidation).show();
      passwordError = true;
      return false;
    } else if (!regx.test(value)) {
      $(PasswordValidation).text("Password should be in correct format");
      $(PasswordValidation).show();
      passwordError = true;
      return false;
    } else {
      $(PasswordValidation).hide();
      passwordError = false;
      return true;
    }
  }

  $(confirmPassword).keyup(function () {
    confirmPasswordValidationFunc();
  });

  function confirmPasswordValidationFunc() {
    let value = $(confirmPassword).val();
    let pass = $(password).val();
    console.log(value, pass);

    if (value.length == 0) {
      $(ConfirmPasswordValidation).text("Password Cannot be Empty");
      $(ConfirmPasswordValidation).show();
      confirmPasswordError = true;
      return false;
    } else if (pass !== value) {
      $(ConfirmPasswordValidation).text("Passwords do not match");
      $(ConfirmPasswordValidation).show();
      confirmPasswordError = true;
      return false;
    } else {
      $(ConfirmPasswordValidation).hide();
      confirmPasswordError = false;
      return true;
    }
  }

  $(submit).click(function () {
    usernameValidationFunc();
    emailValidationFunc();
    passwordValidationFunc();
    confirmPasswordValidationFunc();

    if (usernameError || emailError || passwordError || confirmPasswordError) {
      return false;
    } else {
      return true;
    }
  });
});
