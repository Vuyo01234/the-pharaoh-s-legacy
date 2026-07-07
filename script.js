document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Lucide Icons if available
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // 2. Main Gallery Page Filtering Logic
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryCards = document.querySelectorAll(".gallery-card");

  if (filterButtons.length > 0 && galleryCards.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const filterValue = btn.getAttribute("data-filter");
        if (!filterValue) return;

        // If the button clicked is already active, prevent default navigation
        if (btn.classList.contains("active")) {
          e.preventDefault();
        }

        // Apply filtering animations to cards on the page
        galleryCards.forEach((card) => {
          const cardCategory = card.getAttribute("data-category");
          if (filterValue === "all" || cardCategory === filterValue) {
            card.classList.remove("hidden");
            card.style.animation = "none";
            card.offsetHeight; // trigger reflow
            card.style.animation = "";
          } else {
            card.classList.add("hidden");
          }
        });
      });
    });
  }


});
