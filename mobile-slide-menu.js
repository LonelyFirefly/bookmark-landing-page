"use strict";

let menu = document.querySelector(".header__menu");
let hamburger = document.querySelector(".header__hamburger");
let logo = document.querySelector(".header__logo");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	menu.classList.toggle("active");
	document.body.classList.toggle("lock");
	changeLogoIcon(logo);
});

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

function changeLogoIcon(logo) {
	let logoName = logo.children[0].children[0].children[0];
	let circle = logo.children[0].children[0].children[1].children[0];
	let circleImage = logo.children[0].children[0].children[1].children[1];

	if (!hamburger.classList.contains("active")) {
		changeLogoIconToDark(logoName, circle, circleImage);
	} else {
		changeLogoIconToLight(logoName, circle, circleImage);
	}
	window.addEventListener("resize", function () {
		if (window.matchMedia("(max-width: 567px)").matches) {
			changeLogoIconToLight(logoName, circle, circleImage);
		} else {
			changeLogoIconToDark(logoName, circle, circleImage);
		}
	});

	logo.classList.toggle("active");
}

// hamburger.addEventListener("click", () => {
// 	menu.classList.toggle("active");
// 	changeHamburgerIcon(hamburger);
// 	changeLogoIcon(logo);
// 	changeBodyLayout();
// });

document.querySelectorAll(".navbar__link").forEach((item) =>
	item.addEventListener("click", () => {
		menu.classList.remove("active");
		closeIcon.classList.remove("active");
		hamburger.classList.remove("active");
	})
);
