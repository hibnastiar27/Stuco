const btnRegister = document.querySelector("#btnRegister");
const modal = document.querySelector(".bg-modal");
const close = document.querySelector(".close");
// Link
const btnMulai = document.querySelector("#btnMulai");

console.log(btnRegister);
console.log(modal);
console.log(close);

btnRegister.addEventListener("click", () => {
	modal.style.display = "flex";
});

close.addEventListener("click", () => {
	modal.style.display = "none";
});

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

// ref to beranda
btnMulai.addEventListener("click", () => {
	window.location.href = "../beranda/index.html";
});
