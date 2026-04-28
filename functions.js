
// Allows screen to be shown and all others to be hidden
// place in button onclick="showScreen('bleh')"
function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(screenId).classList.add("active");
}

// Brings up the different course cards below major and ge courses on course database screen
function toggleDropdown(dropdownId) {
    document.getElementById(dropdownId).classList.toggle("open");
}
