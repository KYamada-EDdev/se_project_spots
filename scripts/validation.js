const showInputError = (formElement, inputElement, errorMessage) => {
  const errorMessageID = inputElement.id + "-error";
  const errorMessageElement = formElement.querySelector("#" + errorMessageID);
  errorMessageElement.textContent = errorMessage;
  inputElement.classList.add("modal__input_type_error");
};

const hideInputError = (formElement, inputElement) => {
  const errorMessageID = inputElement.id + "-error";
  const errorMessageElement = formElement.querySelector("#" + errorMessageID);
  errorMessageElement.textContent = "";
  inputElement.classList.remove("modal__input_type_error");
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add("modal__submit-button:disabled");
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove("modal__submit-button:disabled");
  }
};

const setEventListener = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".modal__input"));
  const buttonElement = formElement.querySelector(".modal__submmit-button");

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
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
