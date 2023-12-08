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
//Toggle function
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

//Functions for name field
function enableEdit() {
  toggleEditElements("editableInput", "editBtn", "saveBtn", "cancelBtn");
}

function saveChanges() {
  toggleEditElements("editableInput", "editBtn", "saveBtn", "cancelBtn");
}

function cancelEdit() {
  toggleEditElements("editableInput", "editBtn", "saveBtn", "cancelBtn");
}

//Functions for Gender Field
function enableGenderEdit() {
  toggleEditElements("inputGender", "editGenderBtn", "saveGenderBtn", "cancelGenderBtn");
}

function saveGenderChanges() {
  toggleEditElements("inputGender", "editGenderBtn", "saveGenderBtn", "cancelGenderBtn");
}

function cancelGenderEdit() {
  toggleEditElements("inputGender", "editGenderBtn", "saveGenderBtn", "cancelGenderBtn");
}

//Functions for location field

function enableLocationEdit() {
  toggleEditElements("location", "editLocation", "saveLocation", "cancelLocation");
}

function saveLocationChanges() {
  toggleEditElements("location", "editLocation", "saveLocation", "cancelLocation");
}

function cancelLocationEdit() {
  toggleEditElements("location", "editLocation", "saveLocation", "cancelLocation");
}

//Functions for Summary Field

function enableSummaryEdit() {
  toggleEditElements("editableSummary", "editSummaryBtn", "saveSummaryBtn", "cancelSummaryBtn");
}

function saveSummaryChanges() {
  toggleEditElements("editableSummary", "editSummaryBtn", "saveSummaryBtn", "cancelSummaryBtn");
}

function cancelSummaryEdit() {
  toggleEditElements("editableSummary", "editSummaryBtn", "saveSummaryBtn", "cancelSummaryBtn");
}

//Functions for website

function enableWebsiteEdit() {
  toggleEditElements("editableWebsite", "editWebsiteBtn", "saveWebsiteBtn", "cancelWebsiteBtn");
}

function saveWebsiteChanges() {
  toggleEditElements("editableWebsite", "editWebsiteBtn", "saveWebsiteBtn", "cancelWebsiteBtn");
}

function cancelWebsiteEdit() {
  toggleEditElements("editableWebsite", "editWebsiteBtn", "saveWebsiteBtn", "cancelWebsiteBtn");
}

// Functions for Github

function enableGithubEdit() {
  toggleEditElements("editableGithub", "editGithubBtn", "saveGithubBtn", "cancelGithubBtn");
}

function saveGithubChanges() {
  toggleEditElements("editableGithub", "editGithubBtn", "saveGithubBtn", "cancelGithubBtn");
}

function cancelGithubEdit() {
  toggleEditElements("editableGithub", "editGithubBtn", "saveGithubBtn", "cancelGithubBtn");
}

// Functions for linkedin

function enableLinkedInEdit() {
  toggleEditElements("editableLinkedIn", "editLinkedInBtn", "saveLinkedInBtn", "cancelLinkedInBtn");
}

function saveLinkedInChanges() {
  toggleEditElements("editableLinkedIn", "editLinkedInBtn", "saveLinkedInBtn", "cancelLinkedInBtn");
}

function cancelLinkedInEdit() {
  toggleEditElements("editableLinkedIn", "editLinkedInBtn", "saveLinkedInBtn", "cancelLinkedInBtn");
}

//Functions for Twitter

function enableTwitterEdit() {
  toggleEditElements("editableTwitter", "editTwitterBtn", "saveTwitterBtn", "cancelTwitterBtn");
}

function saveTwitterChanges() {
  toggleEditElements("editableTwitter", "editTwitterBtn", "saveTwitterBtn", "cancelTwitterBtn");
}

function cancelTwitterEdit() {
  toggleEditElements("editableTwitter", "editTwitterBtn", "saveTwitterBtn", "cancelTwitterBtn");
}

//Fuctions for Work

function enableWorkEdit() {
  toggleEditElements("editableWork", "editWorkBtn", "saveWorkBtn", "cancelWorkBtn");
}

function saveWorkChanges() {
  toggleEditElements("editabWork", "editWorkBtn", "saveWorkBtn", "cancelWorkBtn");
}

function cancelWorkEdit() {
  toggleEditElements("editabWork", "editWorkBtn", "saveWorkBtn", "cancelWorkBtn");
}

//Function for Education

function enableEducationEdit() {
  toggleEditElements("editableEducation", "editEducationBtn", "saveEducationBtn", "cancelEducationBtn");
}

function saveEducationChanges() {
  toggleEditElements("editabEducation", "editEducationBtn", "saveEducationBtn", "cancelEducationBtn");
}

function cancelEducationEdit() {
  toggleEditElements("editabEducation", "editEducationBtn", "saveEducationBtn", "cancelEducationBtn");
}

// Functions for Skills

function enableSkillsEdit() {
  toggleEditElements("editableSkills", "editSkillsBtn", "saveSkillsBtn", "cancelSkillsBtn");
}

function saveSkillsChanges() {
  toggleEditElements("editabSkills", "editSkillsBtn", "saveSkillsBtn", "cancelSkillsBtn");
}

function cancelSkillsEdit() {
  toggleEditElements("editabSkills", "editSkillsBtn", "saveSkillsBtn", "cancelSkillsBtn");
}
