[...document.querySelectorAll(".card")].forEach(button => {
    button.addEventListener("click", () => button.classList.toggle("clicked"));
  });