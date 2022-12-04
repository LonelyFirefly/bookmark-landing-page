const navbarMenu = document.querySelector(".navbar__menu");
const hamburger = document.querySelector(".navbar__hamburger");
const header = document.querySelector(".header");
const closeIcon = document.querySelector(".navbar__close-icon");
const body = document.getElementsByTagName("body")[0];
const logoDisable = document.querySelector(".navbar__logo");
const logoActive = document.querySelector(".navbar__logo_active");

closeIcon.addEventListener("click", () => {
	navbarMenu.classList.toggle("active");
	header.classList.toggle("active");
	closeIcon.classList.toggle("active");
	hamburger.classList.toggle("active");
	body.classList.toggle("active");
	logoActive.classList.toggle("active");
	logoDisable.classList.toggle("disable");
	// document
	// 	.querySelector(".navbar__logo")
	// 	.getElementsByTagName("path")[0].style.fill = "000";
});

hamburger.addEventListener("click", () => {
	navbarMenu.classList.toggle("active");
	header.classList.toggle("active");
	closeIcon.classList.toggle("active");
	hamburger.classList.toggle("active");
	body.classList.toggle("active");
	logoActive.classList.toggle("active");
	logoDisable.classList.toggle("disable");
	// document.querySelector(".navbar__logo").style.fill = "FFF";
});

document.querySelectorAll(".navbar__link").forEach((item) =>
	item.addEventListener("click", () => {
		navbarMenu.classList.remove("active");
		header.classList.remove("active");
		closeIcon.classList.remove("active");
		hamburger.classList.remove("active");
		body.classList.remove("active");
	})
);
