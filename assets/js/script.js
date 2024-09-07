let navLinks = document.querySelectorAll("a.inner-link");

navLinks.forEach((item) => {
	item.addEventListener("click", function () {
		// console.log(item);
		document.querySelector("nav ul li a.active").classList.remove("active");
		document
			.querySelector(`nav ul li a[href='${item.getAttribute("href")}']`)
			.classList.add("active");
		document.querySelector(`main > section${item.getAttribute("href")}`);
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
const workElements = document.querySelectorAll("#my_work .work-items .details");

workElements.forEach((item) => {
	item.addEventListener("click", function () {
		const imageSrc = item.getAttribute("data-image");
		const titleText = item.getAttribute("data-title");
		const descriptionText = item.getAttribute("data-description");
		const skillsText = item.getAttribute("data-skills");
		const projectLink = item.getAttribute("data-project-link");
		const githubLink = item.getAttribute("data-github-link");

		// Update the modal content
		document
			.querySelector("#workModal .modal-body img")
			.setAttribute("src", imageSrc);
		document.querySelector("#workModal .modal-body .title").innerText =
			titleText;
		document.querySelector("#workModal .modal-body .description").innerText =
			descriptionText;
		document.querySelector("#workModal .modal-body .skills .value").innerText =
			skillsText;

		// Handle project link elements
		const projectLinkDiv = document.querySelector(
			"#workModal .modal-body .project-link"
		);
		const projectLinkIcon = projectLinkDiv.querySelector("i");
		const projectLinkAnchor = projectLinkDiv.querySelector("a");

		if (projectLink === null || projectLink.trim() === "") {
			projectLinkDiv.style.display = "none"; // Hide the entire div
		} else {
			projectLinkAnchor.setAttribute("href", projectLink);
			projectLinkAnchor.style.display = "inline";
			projectLinkIcon.style.display = "inline";
			projectLinkDiv.style.display = "flex"; // Show the div
		}

		// Handle GitHub link elements
		const githubLinkDiv = document.querySelector(
			"#workModal .modal-body .github-link"
		);
		const githubLinkIcon = githubLinkDiv.querySelector("i");
		const githubLinkAnchor = githubLinkDiv.querySelector("a");

		if (githubLink === null || githubLink.trim() === "") {
			githubLinkDiv.style.display = "none"; // Hide the entire div
		} else {
			githubLinkAnchor.setAttribute("href", githubLink);
			githubLinkAnchor.style.display = "inline";
			githubLinkIcon.style.display = "inline";
			githubLinkDiv.style.display = "flex"; // Show the div
		}

		// Show the modal
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
