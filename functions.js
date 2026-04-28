
// Allows screen to be shown and all others to be hidden
// place in button onclick="showScreen('bleh')"
function showScreen(screenId) {
  console.log("clicked:", screenId);

  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const target = document.getElementById(screenId);
  console.log(target);

  if (target) {
    target.classList.add("active");
  }
}

// Brings up the different course cards below major and ge courses on course database screen
function toggleDropdown(dropdownId) {
    document.getElementById(dropdownId).classList.toggle("open");
}
