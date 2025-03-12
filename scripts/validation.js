const showInputError = (formElement, inputElement, errorMessage) => {
  const errorMessageID = inputElement.id + "-error";
  const errorMessageElement = document.querySelector("#" + errorMessageID);
  errorMessageElement.textContent = errorMessage;
};

const checkInputValidity = (formElement, inputElement) => {
  if (inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  }
};

const setEventListener = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".modal__input"));
  const buttonElement = formElement.querySelector(".modal__submmit-button");

  // toggleButtonState(inputList.buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      // toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = document.querySelectorAll(".modal__form");
  formList.forEach((formElement) => {
    setEventListener(formElement);
  });
};

enableValidation();
