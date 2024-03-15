window.addEventListener("DOMContentLoaded", (e) => {
	const toggleSwitch = document.getElementById("toggleSwitch");
	toggleSwitch.addEventListener("click", () => toggleDarkMode());
});

const toggleDarkMode = () => {
	const titleText = document.querySelector(".titleText");
	const sectionTitle = document.querySelectorAll(".sectionTitle");
	const copyText = document.querySelectorAll(".copyText");
	const serviceCards = document.querySelectorAll("#services ul > li");
	const blogCards = document.querySelectorAll("#blog ul > li");
	const priceCards = document.querySelectorAll("#pricing ul > li");
	const overlay = document.querySelector(".overlay");
	const scrollUpButton = document.querySelector("#scrollUpButton");

	document.body.classList.toggle("darkMode");
	titleText.classList.toggle("darkMode");
	overlay.classList.toggle("darkMode");
	scrollUpButton.classList.toggle("darkMode");
	sectionTitle.forEach((element) => element.classList.toggle("darkMode"));
	copyText.forEach((element) => element.classList.toggle("darkMode"));
	serviceCards.forEach((element) => element.classList.toggle("darkMode"));
	blogCards.forEach((element) => element.classList.toggle("darkMode"));
	priceCards.forEach((element) => element.classList.toggle("darkMode"));
};
