let isVisible = true;

function toggleBalance() {
  const balanceElement = document.getElementById("balance");
  const button = document.querySelector(".toggle-btn");

  if (isVisible) {
    balanceElement.textContent = "******";
    button.textContent = "Show Balance";
  } else {
    balanceElement.textContent = "$800,000";
    button.textContent = "Hide Balance";
  }

  isVisible = !isVisible;
}

// Automatically set current time on page load
window.onload = function () {
  const timeElement = document.getElementById("current-time");
  if (timeElement) {
    const now = new Date();
    timeElement.textContent = now.toLocaleString();
  }
};
