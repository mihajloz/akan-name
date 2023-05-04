function findName() {
  // get input values
  let dateInput = document.getElementById("date-of-birth");
  let gender = document.querySelector('input[name="gender"]:checked');

  // get day of week
  let dateOfBirth = new Date(dateInput.value);
  let dayOfWeek = dateOfBirth.getDay();

  let akanName;

  if (gender.value === "male") {
    switch (dayOfWeek) {
      case 0:
        akanName = "Kwasi";
        break;
      case 1:
        akanName = "Kwadwo";
        break;
      case 2:
        akanName = "Kwabena";
        break;
      case 3:
        akanName = "Kwaku";
        break;
      case 4:
        akanName = "Yaw";
        break;
      case 5:
        akanName = "Kofi";
        break;
      case 6:
        akanName = "Kwame";
        break;
      default:
        akanName = "Invalid date of birth";
        break;
    }
  } else if (gender.value === "female") {
    switch (dayOfWeek) {
      case 0:
        akanName = "Akosua";
        break;
      case 1:
        akanName = "Adwoa";
        break;
      case 2:
        akanName = "Abenaa";
        break;
      case 3:
        akanName = "Akua";
        break;
      case 4:
        akanName = "Yaa";
        break;
      case 5:
        akanName = "Afua";
        break;
      case 6:
        akanName = "Ama";
        break;
      default:
        akanName = "Invalid date of birth";
        break;
    }
  } else {
    akanName = "Select a gender";
  }

  let akanNameFound = document.getElementById("akan-name");
  akanNameFound.textContent = `Your Akan name is ${akanName}`;
}
