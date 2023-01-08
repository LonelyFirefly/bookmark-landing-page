"use strict";

let menu = document.querySelector(".navbar__menu");
let hamburger = document.querySelector(".navbar__hamburger");
let logo = document.querySelector(".navbar__logo");
let header = document.querySelector("header");

console.log(window.scrollTop);
console.log(window.pageXOffset);

function changeHamburgerIcon(hamburger) {
	hamburger.innerHTML =
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15"><path fill="#000000" fill-rule="evenodd" d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"/></svg>';

	hamburger.classList.toggle("active");
	if (!hamburger.classList.contains("active")) {
		hamburger.innerHTML =
			'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="#242A45" fill-rule="evenodd" d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"/></svg>';
	}
}

function changeLogoIcon(logo) {
	let logoName = logo.children[0].children[0].children[0];
	let circle = logo.children[0].children[0].children[1].children[0];
	let circleImage = logo.children[0].children[0].children[1].children[1];

	if (logo.classList.contains("active")) {
		logoName.setAttribute("fill", "#242A45");
		circle.setAttribute("fill", "#5267DF");
		circleImage.setAttribute("fill", "#FFF");
	} else {
		logoName.setAttribute("fill", "#FFF");
		circle.setAttribute("fill", "#FFF");
		circleImage.setAttribute("fill", "#242A45");
	}
	logo.classList.toggle("active");
}

function changePaddingMargin() {
	let navbarHeader = document.querySelector(".navbar__header");
	let activeMenu = document.querySelector(".navbar__menu.active");
	if (menu.classList.contains("active")) {
		header.style.padding = "0";
		header.style.height = "auto";
		navbarHeader.style.paddingLeft = "11%";
		navbarHeader.style.paddingRight = "6%";
		navbarHeader.style.marginTop = "45px";
		document.body.style.marginTop = "0px";
	} else {
		header.style.paddingLeft = "11%";
		header.style.paddingRight = "6%";
		header.style.paddingBottom = "80px";

		header.style.height = "46px";
		navbarHeader.style.paddingLeft = "";
		navbarHeader.style.paddingRight = "";
		navbarHeader.style.marginTop = "0";
		document.body.style.marginTop = "45px";
	}
}

function changeBodyScroll() {
	if (menu.classList.contains("active")) {
		document.body.style.position = "fixed";
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.position = "";
		document.body.style.overflow = "";
	}
}

function changeBodyLayout() {
	changePaddingMargin();
	changeBodyScroll();
}

hamburger.addEventListener("click", () => {
	menu.classList.toggle("active");
	changeHamburgerIcon(hamburger);
	changeLogoIcon(logo);
	changeBodyLayout();
});

document.querySelectorAll(".navbar__link").forEach((item) =>
	item.addEventListener("click", () => {
		menu.classList.remove("active");
		closeIcon.classList.remove("active");
		hamburger.classList.remove("active");
	})
);
