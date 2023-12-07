/*function enableEdit() {
  var inputField = document.getElementById("editableInput");
  var editBtn = document.getElementById("editBtn");
  var saveBtn = document.getElementById("saveBtn");
  var cancelBtn = document.getElementById("cancelBtn");

  inputField.removeAttribute("disabled");
  editBtn.style.display = "none";
  saveBtn.style.display = "inline-block";
  cancelBtn.style.display = "inline-block";
}

function saveChanges() {
  var inputField = document.getElementById("editableInput");
  var editBtn = document.getElementById("editBtn");
  var saveBtn = document.getElementById("saveBtn");
  var cancelBtn = document.getElementById("cancelBtn");

  inputField.setAttribute("disabled", "true");
  editBtn.style.display = "inline-block";
  saveBtn.style.display = "none";
  cancelBtn.style.display = "none";
}

function cancelEdit() {
  var inputField = document.getElementById("editableInput");
  var editBtn = document.getElementById("editBtn");
  var saveBtn = document.getElementById("saveBtn");
  var cancelBtn = document.getElementById("cancelBtn");

  inputField.setAttribute("disabled", "true");
  editBtn.style.display = "inline-block";
  saveBtn.style.display = "none";
  cancelBtn.style.display = "none";
}
function enableGenderEdit() {
  var inputField = document.getElementById("inputGender");
  var editGenderBtn = document.getElementById("editGenderBtn");
  var saveGenderBtn = document.getElementById("saveGenderBtn");
  var cancelGenderBtn = document.getElementById("cancelGenderBtn");

  inputField.removeAttribute("disabled");
  editGenderBtn.style.display = "none";
  saveGenderBtn.style.display = "inline-block";
  cancelGenderBtn.style.display = "inline-block";
}
function saveGenderChanges() {
  var inputField = document.getElementById("inputGender");
  var editGenderBtn = document.getElementById("editGenderBtn");
  var saveGenderBtn = document.getElementById("saveGenderBtn");
  var cancelGenderBtn = document.getElementById("cancelGenderBtn");

  inputField.setAttribute("disabled", "true");
  editGenderBtn.style.display = "inline-block";
  saveGenderBtn.style.display = "none";
  cancelGenderBtn.style.display = "none";
}

function cancelGenderEdit() {
  var inputField = document.getElementById("inputGender");
  var editGenderBtn = document.getElementById("editGenderBtn");
  var saveGenderBtn = document.getElementById("saveGenderBtn");
  var cancelGenderBtn = document.getElementById("cancelGenderBtn");

  inputField.setAttribute("disabled", "true");
  editGenderBtn.style.display = "inline-block";
  saveGenderBtn.style.display = "none";
  cancelGenderBtn.style.display = "none";
}
function enableLocationEdit() {
  var inputField = document.getElementById("location");
  var editLocation = document.getElementById("editLocationBtn");
  var saveLocation = document.getElementById("saveLocationBtn");
  var cancelLocation = document.getElementById("cancelLocationBtn");

  inputField.removeAttribute("disabled");
  editLocation.style.display = "none";
  saveLocation.style.display = "inline-block";
  cancelLocation.style.display = "inline-block";
}

function saveLocationChanges() {
  var inputField = document.getElementById("location");
  var editLocation = document.getElementById("editLocationBtn");
  var saveLocation = document.getElementById("saveLocationBtn");
  var cancelLocation = document.getElementById("cancelLocationBtn");

  inputField.setAttribute("disabled", "true");
  editLocation.style.display = "inline-block";
  saveLocation.style.display = "none";
  cancelLocation.style.display = "none";
}

function cancelLocationEdit() {
  var inputField = document.getElementById("location");
  var editLocation = document.getElementById("editLocationBtn");
  var saveLocation = document.getElementById("saveLocationBtn");
  var cancelLocation = document.getElementById("cancelLocationBtn");

  inputField.setAttribute("disabled", "true");
  editLocation.style.display = "inline-block";
  saveLocation.style.display = "none";
  cancelLocation.style.display = "none";
}*/

function toggleEditElements(inputId, editBtnId, saveBtnId, cancelBtnId) {
  var inputField = document.getElementById(inputId);
  var editBtn = document.getElementById(editBtnId);
  var saveBtn = document.getElementById(saveBtnId);
  var cancelBtn = document.getElementById(cancelBtnId);

  inputField.toggleAttribute("disabled");
  editBtn.style.display = inputField.disabled ? "inline-block" : "none";
  saveBtn.style.display = inputField.disabled ? "none" : "inline-block";
  cancelBtn.style.display = inputField.disabled ? "none" : "inline-block";
}

function enableEdit() {
  toggleEditElements("editableInput", "editBtn", "saveBtn", "cancelBtn");
}

function saveChanges() {
  toggleEditElements("editableInput", "editBtn", "saveBtn", "cancelBtn");
}

function cancelEdit() {
  toggleEditElements("editableInput", "editBtn", "saveBtn", "cancelBtn");
}

function enableGenderEdit() {
  toggleEditElements("inputGender", "editGenderBtn", "saveGenderBtn", "cancelGenderBtn");
}

function saveGenderChanges() {
  toggleEditElements("inputGender", "editGenderBtn", "saveGenderBtn", "cancelGenderBtn");
}

function cancelGenderEdit() {
  toggleEditElements("inputGender", "editGenderBtn", "saveGenderBtn", "cancelGenderBtn");
}
