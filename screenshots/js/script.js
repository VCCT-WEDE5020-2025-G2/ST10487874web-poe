// Accordion functionality with animation
const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    // Close all other accordions first (optional)
    document.querySelectorAll(".accordion-content").forEach((item) => {
      if (item !== content) {
        item.style.maxHeight = null;
      }
    });

    // Toggle the clicked one
    if (content.style.maxHeight) {
      content.style.maxHeight = null; // close
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // open
    }
  });
});
// -----------------------------
// Modal (Popup)
// -----------------------------
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

btn.onclick = function() {
  modal.style.display = "flex";
};

closeBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

