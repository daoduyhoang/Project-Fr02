const btnTop = document.getElementById("scrollToTop");
btnTop.addEventListener("click", () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener("scroll", (e) => {
	if (this.scrollY >= 350) {
		btnTop.style.display = "block";
	} else {
		btnTop.style.display = "none";
	}
});
const search = document.querySelector(".navbar--search");
const popUpSearch = document.querySelector(".popup__search");
const btnCloseSearch = document.querySelector(".popup__search--close");
const btnCart = document.querySelector(".btn--cart");
const popUpCart = document.querySelector(".popup__cart");
const btnCloseCart = document.querySelector(".popup__cart--close");
search.addEventListener("click", () => {
	popUpSearch.style.display = "block";
	popUpCart.style.display = "none";
});
btnCloseSearch.addEventListener("click", () => {
	popUpSearch.style.display = "none";
});

btnCart.addEventListener("click", () => {
	popUpCart.style.display = "block";
	btnCart.style.border = "2px solid #fff";
});
btnCloseCart.addEventListener("click", () => {
	popUpCart.style.display = "none";
	btnCart.style.border = "2px solid #000";
});
