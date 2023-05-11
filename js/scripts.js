const dateInput = document.getElementById("date-of-birth");
const genderInputs = document.querySelectorAll('input[name="gender"]');
const akanNameFound = document.getElementById("akan-name");

// Map day of week to Akan names
const akanNames = {
  male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
  female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
};

// Event listener for findName function
document.getElementById("#find-button").addEventListener("click", findName);

function findName() {
  // Get input values
  const selectedGender = document.querySelector('input[name="gender"]:checked');
  const dateOfBirth = new Date(dateInput.value);
  const dayOfWeek = dateOfBirth.getDay();

  let akanName = "Invalid date of birth";

  if (selectedGender) {
    const gender = selectedGender.value;
    akanName = akanNames[gender][dayOfWeek];
  } else {
    akanName = "Select a gender";
  }

  akanNameFound.textContent = `Your Akan name is ${akanName}`;
}
