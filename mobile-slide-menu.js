"use strict";

let menu = document.querySelector(".header__menu");
let hamburger = document.querySelector(".header__hamburger");
let logo = document.querySelector(".header__logo");

window.addEventListener("resize", () => {
	if (document.documentElement.clientWidth < 657) {
		menu.addEventListener("click", removeMenu);
	} else {
		menu.removeEventListener("click", removeMenu);
	}
});

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
	hamburger.classList.toggle("active");
	menu.classList.toggle("active");
	document.body.classList.toggle("lock");
	changeLogoIcon(logo);
}

function removeMenu(e) {
	let targetItem = e.target;
	console.log(targetItem);
	if (targetItem.closest(".header__link")) {
		toggleMenu();
	}
}

function changeLogoIcon(logo) {
	let logoName = logo.children[0].children[0].children[0];
	let circle = logo.children[0].children[0].children[1].children[0];
	let circleImage = logo.children[0].children[0].children[1].children[1];

	if (
		!hamburger.classList.contains("active") ||
		logo.classList.contains("active")
	) {
		changeLogoIconToDark(logoName, circle, circleImage);
	} else {
		changeLogoIconToLight(logoName, circle, circleImage);
	}
}

function changeLogoIconDependingOnScreenSize() {
	if (window.matchMedia("(max-width: 567px)").matches) {
		logo.classList.add("active");
		changeLogoIcon(logo);
		logo.classList.remove("active");
		console.log("<767");
	} else {
		logo.classList.remove("active");
		changeLogoIcon(logo);
		console.log(">767");
	}
}

function changeLogoIconToDark(logoName, circle, circleImage) {
	logoName.setAttribute("fill", "#242A45");
	circle.setAttribute("fill", "#5267DF");
	circleImage.setAttribute("fill", "#FFF");
}

function changeLogoIconToLight(logoName, circle, circleImage) {
	logoName.setAttribute("fill", "#FFF");
	circle.setAttribute("fill", "#FFF");
	circleImage.setAttribute("fill", "#242A45");
}

// window.addEventListener("resize", changeLogoIconDependingOnScreenSize);

// document.querySelectorAll(".navbar__link").forEach((item) =>
// 	item.addEventListener("click", () => {
// 		menu.classList.remove("active");
// 		closeIcon.classList.remove("active");
// 		hamburger.classList.remove("active");
// 	})
// );
// if (window.matchMedia("(max-width: 567px)").matches) {
// 	console.log("true");
// 	menu.addEventListener("click", (e) => {
// 		let targetItem = e.target;
// 		console.log(targetItem);
// 		if (targetItem.closest(".header__link")) {
// 			toggleMenu();
// 		}
// 	});
// }
