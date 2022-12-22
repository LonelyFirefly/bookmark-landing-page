"use strict";

const leftButton = document.querySelector(".features__button-left");
const centerButton = document.querySelector(".features__button-center");
const rightButton = document.querySelector(".features__button-right");

const leftPage = document.querySelector(".features__slideshow-page_left");
const centerPage = document.querySelector(".features__slideshow-page_center");
const rightPage = document.querySelector(".features__slideshow-page_right");

document.querySelectorAll(".features__button").forEach((item) =>
	item.addEventListener("click", () => {
		leftPage.classList.remove("active");
		centerPage.classList.remove("active");
		rightPage.classList.remove("active");
	})
);

function togglePage(button, page) {
	button.addEventListener("click", () => {
		page.classList.toggle("active");
	});
}

togglePage(leftButton, leftPage);
togglePage(centerButton, centerPage);
togglePage(rightButton, rightPage);

// leftButton.addEventListener("click", () => {
// 	leftPage.classList.toggle("active");
// });
// centerButton.addEventListener("click", () => {
// 	centerPage.classList.toggle("active");
// });
// rightButton.addEventListener("click", () => {
// 	rightPage.classList.toggle("active");
// });
