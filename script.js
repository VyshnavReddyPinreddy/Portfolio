let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }
  lastScrollY = window.scrollY;
});

document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 1;
  const cards = document.querySelectorAll(".card");
  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");
  const totalCards = cards.length;

  function showCard(index) {
    cards.forEach((card) => {
      card.classList.remove("active");
      if (parseInt(card.dataset.index) === index) {
        card.classList.add("active");
      }
    });
  }

  leftBtn.addEventListener("click", () => {
    currentIndex = currentIndex - 1 < 1 ? totalCards : currentIndex - 1;
    showCard(currentIndex);
  });

  rightBtn.addEventListener("click", () => {
    currentIndex = currentIndex + 1 > totalCards ? 1 : currentIndex + 1;
    showCard(currentIndex);
  });

  showCard(currentIndex);
});

document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".project-card");
  const leftBtn = document.querySelector(".arrow-btn.left");
  const rightBtn = document.querySelector(".arrow-btn.right");

  let currentIndex = 0;

  function showCard(index) {
    projectCards.forEach((card, i) => {
      card.classList.toggle("active", i === index);
    });
  }

  leftBtn.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + projectCards.length) % projectCards.length;
    showCard(currentIndex);
  });

  rightBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % projectCards.length;
    showCard(currentIndex);
  });

  showCard(currentIndex);
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("Script running");
  const buttons = document.querySelectorAll(".line-button");
  const eduBlocks = document.querySelectorAll(".edu");

  function showEducation(year) {
    eduBlocks.forEach((block) => {
      block.classList.remove("active");
    });

    const target = document.querySelector(`.edu.year-${year}`);
    if (target) {
      target.classList.add("active");
    }

    buttons.forEach((btn) => {
      if (btn.getAttribute("data-year") === year) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  showEducation("2027");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const year = button.getAttribute("data-year");
      showEducation(year);
    });
  });
});

const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "☀️";
  } else {
    darkModeToggle.textContent = "🌙";
  }
});

