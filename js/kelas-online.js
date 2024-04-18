const card1 = document.querySelector(".menu-card .card1");
const card2 = document.querySelector(".menu-card .card2");
const prev = document.querySelector(
	".pagination .page-item[data-pagination='prev']"
);
const pagination1 = document.querySelector(
	".pagination .page-item[data-pagination='1']"
);
const pagination2 = document.querySelector(
	".pagination .page-item[data-pagination='2']"
);
const next = document.querySelector(
	".pagination .page-item[data-pagination='next']"
);

console.log(card1);
console.log(card2);
console.log(prev);
console.log(pagination1);
console.log(pagination2);
console.log(next);

prev.addEventListener("click", () => {
	prev.classList.add("active");
	next.classList.remove("active");
	pagination1.classList.remove("active");
	pagination2.classList.remove("active");
	if (prev.classList.contains("active")) {
		card1.classList.remove("sembunyi");
		card1.classList.add("aktif");

		card2.classList.remove("aktif");
		card2.classList.add("sembunyi");
	}
});

pagination1.addEventListener("click", () => {
	pagination1.classList.add("active");
	pagination2.classList.remove("active");
	next.classList.remove("active");
	prev.classList.remove("active");
	if (pagination1.classList.contains("active")) {
		card1.classList.remove("sembunyi");
		card1.classList.add("aktif");

		card2.classList.remove("aktif");
		card2.classList.add("sembunyi");
	}
});

pagination2.addEventListener("click", () => {
	pagination2.classList.add("active");
	pagination1.classList.remove("active");
	next.classList.remove("active");
	prev.classList.remove("active");
	if (pagination2.classList.contains("active")) {
		card2.classList.remove("sembunyi");
		card2.classList.add("aktif");

		card1.classList.remove("aktif");
		card1.classList.add("sembunyi");
	}
});

next.addEventListener("click", () => {
	next.classList.add("active");
	prev.classList.remove("active");
	pagination1.classList.remove("active");
	pagination2.classList.remove("active");
	if (next.classList.contains("active")) {
		card2.classList.remove("sembunyi");
		card2.classList.add("aktif");

		card1.classList.remove("aktif");
		card1.classList.add("sembunyi");
	}
});
