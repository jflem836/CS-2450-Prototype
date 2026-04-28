
// Allows screen to be shown and all others to be hidden
// place in button onclick="showScreen('bleh')"
function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.style.display = "none";
  });

  document.getElementById(screenId).style.display = "block";
}
