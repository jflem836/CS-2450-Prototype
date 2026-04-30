// Brings up the different course cards below major and ge courses on course database screen
function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  if (dropdown) {
    dropdown.classList.toggle("open");
  }
}

// Updates save as backup class to "saved state" and back to og state when clicked
function toggleBackup(button) {
  const wrapper = button.parentElement;
  const tooltip = wrapper.querySelector(".icon-tooltip");

  const isSaved = button.classList.toggle("saved");

  if (isSaved) {
    button.textContent = "✅"; // change icon
    tooltip.textContent = "Saved as backup";
  } else {
    button.textContent = "💾";
    tooltip.textContent = "Save as backup class: backup classes added to cart when same class you applied for is full.";
  }
}

// Updates remove class to "removed state" and back to og state when clicked
function toggleRemove(button){
  const wrapper = button.parentElement;
  const tooltip = wrapper.querySelector(".icon-tooltip");

  const isSaved = button.classList.toggle("saved");

  if (isSaved) {
    button.textContent = "↩️"; // change icon
    tooltip.textContent = "Removing when click confirm at bottom, click to undo";
  } else {
    button.textContent = "❌";
    tooltip.textContent = "Removes class from schedule once confirmed";
  }
}

// Locks add courses button until 1 or more courses are selected
function updateAddButtonState() {
  const checkboxes = document.querySelectorAll(".course-select-box");
  const addButton = document.getElementById("add-courses-button");

  const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
  addButton.disabled = !anyChecked;
}

// Checks if there are any checked boxes after run
document.addEventListener("change", (e) => {
  if (e.target.classList.contains("course-select-box")) {
    updateAddButtonState();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  updateAddButtonState();

  const addButton = document.getElementById("add-courses-button");
  if (addButton) {
    addButton.addEventListener("click", () => {
      if (!addButton.disabled) {
        window.location.href = "course-confirm.html";
      }
    });
  }
});