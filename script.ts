const toggleBtn = document.getElementById("Btn") as HTMLButtonElement | null;
const skillsSec = document.getElementById("skillsSec") as HTMLElement | null;

if (toggleBtn && skillsSec) {
  toggleBtn.addEventListener("click", () => {
    skillsSec.classList.toggle("hide");
  });
}
