//SHOW FULL IMAGE ONCLICK (MENU AND COOKS)

const MENU_IMGS = document.querySelectorAll(
    ".menu__container__item img, .cooks__container__item img"
);
const SHOW_IMG = document.querySelector(".show-img");
const SHOW_IMG_ITEM = document.querySelector(".show-img img");

MENU_IMGS.forEach((MENU_IMG) => {
    MENU_IMG.addEventListener("click", (e) => {
        SHOW_IMG_ITEM.src = e.target.src;
        SHOW_IMG.style.display = "flex";
    });
});

SHOW_IMG.addEventListener("click", () => {
    SHOW_IMG.style.display = "none";
});

//THEME TOGGLER

const BUTTON = document.querySelector("nav button");
const BODY = document.querySelector("body");
let theme = localStorage.getItem("theme") || "light";

if (theme === "dark") {
    BODY.classList.add("dark");
}

BUTTON.addEventListener("click", () => {
    if (theme == "light") {
        BODY.classList.add("dark");
        theme = "dark";
    } else {
        BODY.classList.remove("dark");
        theme = "light";
    }
    localStorage.setItem("theme", theme);
});
