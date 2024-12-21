const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const profileEditButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const EditProfileModal = document.querySelector("#edit-profile-modal");
const EditFormElement = EditProfileModal.querySelector(".modal__form");
const EditModalCloseButton = EditProfileModal.querySelector(
  ".modal__close-button"
);
const EditModalNameInput = EditProfileModal.querySelector(
  "#profile-name-input"
);
const EditModalDescriptionInput = EditProfileModal.querySelector(
  "#profile-description-input"
);

function openModal() {
  EditModalNameInput.value = profileName.textContent;
  EditModalDescriptionInput.value = profileDescription.textContent;
  EditProfileModal.classList.add("modal_opened");
}

function closeModal() {
  EditProfileModal.classList.remove("modal_opened");
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = EditModalNameInput.value;
  profileDescription.textContent = EditModalDescriptionInput.value;
  closeModal();
}

profileEditButton.addEventListener("click", openModal);
EditModalCloseButton.addEventListener("click", closeModal);
EditFormElement.addEventListener("submit", handleEditFormSubmit);
