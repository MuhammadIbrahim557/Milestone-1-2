"use strict";
const toggleBtn = document.getElementById("Btn");
const skillsSec = document.getElementById("skillsSec");
if (toggleBtn && skillsSec) {
    toggleBtn.addEventListener("click", () => {
        skillsSec.classList.toggle("hide");
    });
}
