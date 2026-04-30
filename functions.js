// Brings up the different course cards below major and ge courses on course database screen
function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  if (dropdown) {
    dropdown.classList.toggle("open");
  }
}