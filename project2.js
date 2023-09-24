"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".box");
// console.log(btnOpenModal);

for (let i = 0; i < btnOpenModal.length; i++)
    btnOpenModal[i].addEventListener("click", function() {
        console.log(`Button ${i} click`);
        // console.log(btnOpenModal[i]);
        // console.log(btnOpenModal[i].innerHTML);
        modal.classList.remove("hidden");
        // modal.style.display = "block";
        overlay.classList.remove("hidden");
    });

btnClose.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
document.addEventListener("keydown", function(e) {
    console.log(e);
    console.log(e.key);
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});