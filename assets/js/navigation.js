const navButton = document.getElementById("navToggle");
navButton.addEventListener("click", () => {
  const navList = document.getElementById("navList");
  if (navList.classList.contains("active")) {
    navList.classList.remove("active");
  } else {
    navList.classList.add("active");
  }
});
