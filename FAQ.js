"use strict";

const faqArrow = document.querySelector(".FAQ_arrow");
const faqArrowSvg = document.getElementById("FAQ-arrow");

faqArrow.addEventListener("click", () => {
	faqArrowSvg.style.stroke = "#FA5959";
});
