function enableEdit() {
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
  