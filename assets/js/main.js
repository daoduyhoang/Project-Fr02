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
