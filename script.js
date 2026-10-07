/* ========================================
   仮想歯科 はみがきタイム
   JavaScript
======================================== */


/* ---------- スクロールアニメーション ---------- */

const sections = document.querySelectorAll(
    ".section, .cast-card, .event-item, .about-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {

    section.classList.add("fade-in");

    observer.observe(section);

});


/* ---------- ヘッダーのスクロール処理 ---------- */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});
/* ========================================
   CAST スライダー
======================================== */

const castGrid = document.querySelector(".cast-grid");
const castPrev = document.querySelector(".cast-prev");
const castNext = document.querySelector(".cast-next");


function updateCastArrows() {

    if (!castGrid) return;

    const maxScroll =
        castGrid.scrollWidth - castGrid.clientWidth;

    castPrev.disabled =
        castGrid.scrollLeft <= 5;

    castNext.disabled =
        castGrid.scrollLeft >= maxScroll - 5;
}


castNext.addEventListener("click", function () {

    castGrid.scrollBy({
        left: 550,
        behavior: "smooth"
    });

});


castPrev.addEventListener("click", function () {

    castGrid.scrollBy({
        left: -550,
        behavior: "smooth"
    });

});


castGrid.addEventListener(
    "scroll",
    updateCastArrows
);


window.addEventListener(
    "resize",
    updateCastArrows
);


updateCastArrows();