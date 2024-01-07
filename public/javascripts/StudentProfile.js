let originalData = {};
// Function to enable editing
function enableEdit() {
  // Save the original data before the user starts editing
  originalData = {};

  // Enable all editable fields
  document.querySelectorAll('input[disabled], textarea[disabled], select[disabled]').forEach((element) => {
    // Save the original value before enabling editing
    originalData[element.id] = element.value;

    // Check if it's a select element
    element.removeAttribute('disabled');
  });

  // Show the Save and Cancel buttons, hide the Edit button
  document.getElementById('editBtn').style.display = 'none';
  document.getElementById('saveBtn').style.display = 'inline-block';
  document.getElementById('cancelBtn').style.display = 'inline-block';
}


// Function to save changes
function saveChanges() {
  // Get the edited data from the form
  const formData = {
    name: document.getElementById('name').value,
    regNo: document.getElementById('roll').value,
    gender: document.getElementById('gender').value,
    birthday: document.getElementById('birthday').value,
    summary: document.getElementById('summary').value,
    website: document.getElementById('website').value,
    github: document.getElementById('github').value,
    linkedIn: document.getElementById('linkedin').value,
    work: document.getElementById('work').value,
    education: document.getElementById('education').value,
    skills: document.getElementById('skills').value,
    course: document.getElementById('course').value,
    cgpa: document.getElementById('cgpa').value,
    // Add other fields as needed
  };

  // Perform logic to save changes by sending data to the server
  fetch(`/student/StudentUpdate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to update profile: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      // Update was successful, you can perform additional actions if needed
      console.log('Profile updated successfully:', data);
    })
    .catch(error => {
      console.error('Error updating profile:', error);
    })
    .finally(() => {
      // Disable all editable fields
      document.querySelectorAll('input:not([disabled]), textarea:not([disabled]), select:not([disabled])').forEach((element) => {
        element.setAttribute('disabled', 'disabled');
      });

      // Hide the Save and Cancel buttons, show the Edit button
      document.getElementById('editBtn').style.display = 'inline-block';
      document.getElementById('saveBtn').style.display = 'none';
      document.getElementById('cancelBtn').style.display = 'none';
    });
}

// Function to cancel edits
function cancelEdit() {
  // Disable all editable fields
  document.querySelectorAll('input:not([disabled]), textarea:not([disabled]), select:not([disabled])').forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });

  // Hide the Save and Cancel buttons, show the Edit button
  document.getElementById('editBtn').style.display = 'inline-block';
  document.getElementById('saveBtn').style.display = 'none';
  document.getElementById('cancelBtn').style.display = 'none';
}

// You can add more functions or modify these as needed
