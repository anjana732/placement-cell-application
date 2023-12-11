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
  toggleEditElements("editableWork", "editWorkBtn", "saveWorkBtn", "cancelWorkBtn");
}

function cancelWorkEdit() {
  toggleEditElements("editableWork", "editWorkBtn", "saveWorkBtn", "cancelWorkBtn");
}

//Function for Education

function enableEducationEdit() {
  toggleEditElements("editableEducation", "editEducationBtn", "saveEducationBtn", "cancelEducationBtn");
}

function saveEducationChanges() {
  toggleEditElements("editableEducation", "editEducationBtn", "saveEducationBtn", "cancelEducationBtn");
}

function cancelEducationEdit() {
  toggleEditElements("editableEducation", "editEducationBtn", "saveEducationBtn", "cancelEducationBtn");
}

// Functions for Skills

function enableSkillsEdit() {
  toggleEditElements("editableSkills", "editSkillsBtn", "saveSkillsBtn", "cancelSkillsBtn");
}

function saveSkillsChanges() {
  toggleEditElements("editableSkills", "editSkillsBtn", "saveSkillsBtn", "cancelSkillsBtn");
}

function cancelSkillsEdit() {
  toggleEditElements("editableSkills", "editSkillsBtn", "saveSkillsBtn", "cancelSkillsBtn");
}

//Functions for course

function enableCourseEdit() {
  toggleEditElements("editableCourse", "editCourseBtn", "saveCourseBtn", "cancelCourseBtn");
}

function saveCourseChanges() {
  toggleEditElements("editableCourse", "editCourseBtn", "saveCourseBtn", "cancelCourseBtn");
}

function cancelCourseEdit() {
  toggleEditElements("editableCourse", "editCourseBtn", "saveCourseBtn", "cancelCourseBtn");
}

//Function for CGPA

function enableCGPAEdit() {
  toggleEditElements("editableCGPA", "editCGPABtn", "saveCGPABtn", "cancelCGPABtn");
}

function saveCGPAChanges() {
  toggleEditElements("editableCGPA", "editCGPABtn", "saveCGPABtn", "cancelCGPABtn");
}

function cancelCGPAEdit() {
  toggleEditElements("editableCGPA", "editCGPABtn", "saveCGPABtn", "cancelCGPABtn");
}

