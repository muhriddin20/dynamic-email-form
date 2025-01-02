const container = document.querySelector(".container");
const openEmailBoxBtn = document.querySelector(".email__btn");
const submitEmailBtn = document.querySelector(".submit__btn");

openEmailBoxBtn.addEventListener("click", () => {
  container.classList.add("show");
});

submitEmailBtn.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.remove("show");
});
