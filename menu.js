const navbarMenu = document.querySelector(".navbar__menu");
const hamburger = document.querySelector(".navbar__hamburger");

hamburger.addEventListener("click", () => {
	navbarMenu.classList.toggle("active");
});

document.querySelectorAll(".navbar__link").forEach((item) =>
	item.addEventListener("click", () => {
		navbarMenu.classList.remove("active");
	})
);
