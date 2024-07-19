window.onload = function () {
	alert(
		"(Temporary alert!) Hail, fellow adventurer! This website in the digital realm has just been unlocked. At the moment, my projects are preparing for deployment, with many others on the horizon. Would you like to explore my GitHub until then? Feel free to invoke my assistance with any inquiries. May your journey be filled with thrilling discoveries and enchanted encounters! 🧙‍♂️"
	);
};

let navLinks = document.querySelectorAll("a.inner-link");

navLinks.forEach((item) => {
	item.addEventListener("click", function () {
		console.log(item);
		document.querySelector("nav ul li a.active").classList.remove("active");
		document
			.querySelector(`nav ul li a[href='${item.getAttribute("href")}']`)
			.classList.add("active");
		document.querySelector("main > section.active").classList.remove("active");
		document
			.querySelector(`main > section${item.getAttribute("href")}`)
			.classList.add("active");
	});
});

document
	.querySelector("#sidebar .toggle-sidebar")
	.addEventListener("click", function () {
		document.querySelector("#sidebar").classList.toggle("open");
	});

var typed = new Typed(".field h2", {
	strings: [
		"Software Engineer",
		"Full-stack developer",
		"A Human being who loves coding",
		"Aspire to be a Software Architect",
	],
	loop: true,
	typeSpeed: 60,
	backSpeed: 15,
});

for (let i = 1; i <= 15; i++) {
	let meteor = document.createElement("span");
	meteor.classList = "meteor";
	document.querySelector("#home .meteor-shower").append(meteor);
}

const shuffleInstance = new Shuffle(
	document.querySelector("#my_work .work-items"),
	{
		itemSelector: ".item",
	}
);

const filterButtons = document.querySelectorAll("#my_work .filters button");

filterButtons.forEach((item) => {
	item.addEventListener("click", workFilter);
});

function workFilter() {
	const clickedButton = event.currentTarget;
	const clickedButtonGroup = clickedButton.getAttribute("data-group");
	const activeButton = document.querySelector(
		"#my_work .filters button.active"
	);

	activeButton.classList.remove("active");
	clickedButton.classList.add("active");

	shuffleInstance.filter(clickedButtonGroup);
}

var workModal = new bootstrap.Modal(document.getElementById("workModal"));
const workElements = document.querySelectorAll("#my_work .work-items .wrap");

workElements.forEach((item) => {
	item.addEventListener("click", function () {
		document
			.querySelector("#workModal .modal-body img")
			.setAttribute("src", item.getAttribute("data-image"));
		document.querySelector("#workModal .modal-body .title").innerText =
			item.getAttribute("data-title");
		document.querySelector("#workModal .modal-body .description").innerText =
			item.getAttribute("data-description");
		// document.querySelector("#workModal .modal-body .client .value").innerText =
		// 	item.getAttribute("data-client");
		// document.querySelector(
		// 	"#workModal .modal-body .completed .value"
		// ).innerText = item.getAttribute("data-completed");
		document.querySelector("#workModal .modal-body .skills .value").innerText =
			item.getAttribute("data-skills");
		document
			.querySelector("#workModal .modal-body .github-link a")
			.setAttribute("href", item.getAttribute("data-github-link"));

		workModal.show();
	});
});

var workModalElement = document.getElementById("workModal");
workModalElement.addEventListener("show.bs.modal", function (event) {
	document.getElementById("my_work").classList.add("blur");
	document.getElementById("sidebar").classList.add("blur");
});

workModalElement.addEventListener("hide.bs.modal", function (event) {
	document.getElementById("my_work").classList.remove("blur");
	document.getElementById("sidebar").classList.remove("blur");
});

// document
// 	.getElementById("style-switcher")
// 	.addEventListener("change", function () {
// 		document.body.classList.toggle("light-mode", this.checked);
// 	});

// document.getElementById('style-switcher').addEventListener('change', function () {
//     document.body.classList.toggle('light-mode', this.checked);
//     });

// Function to handle style switcher change

// Function to handle style switcher change
function handleStyleSwitcherChange() {
	const isLightMode = this.checked;

	document.body.classList.toggle("light-mode", isLightMode);
	localStorage.setItem("isLightMode", isLightMode);
}
document
	.getElementById("style-switcher")
	.addEventListener("change", handleStyleSwitcherChange);

document.addEventListener("DOMContentLoaded", function () {
	const isLightModeStored = localStorage.getItem("isLightMode");
	if (isLightModeStored === "true") {
		// If light mode is stored, set the switch as checked and add the 'light-mode' class
		document.getElementById("style-switcher").checked = true;
		document.body.classList.add("light-mode");
	} else {
		// Otherwise, leave the switch as unchecked and remove the 'light-mode' class
		document.getElementById("style-switcher").checked = false;
		document.body.classList.remove("light-mode");
	}
});
