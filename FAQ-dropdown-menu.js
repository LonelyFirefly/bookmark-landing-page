"use strict";

const menuItems = document.querySelectorAll(".FAQ__menu-item");

menuItemToggle();

function menuItemToggle() {
	menuItems.forEach((menuItem) => {
		let arrow = menuItem.querySelector(".FAQ__arrow");
		let answer = menuItem.querySelector(".FAQ__answer");

		arrow.addEventListener("click", (arrow) => {
			answer.classList.toggle("active");
			let element = arrow.currentTarget.children[0].children[0];

			if (element.getAttribute("stroke") === "#5267DF") {
				element.setAttribute("stroke", "#FA5959");
				element.setAttribute("d", "M 1 9 l 8 -8 l 8 8");
			} else {
				element.setAttribute("stroke", "#5267DF");
				element.setAttribute("d", "M1 1l8 8 8-8");
			}
		});
	});
}
