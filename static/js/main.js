function animateProgress() {
    document.querySelectorAll("#skill progress").forEach((el) => {
        if (el.dataset.max) {
            const max = parseInt(el.dataset.max);
            let val = parseInt(el.getAttribute("value"));
            const id = setInterval(frame, 10);

            function frame() {
                if (val <= max) {
                    el.setAttribute("value", val++);
                } else {
                    clearInterval(id);
                }
            }
        }
    });
}

function changeNavbarColor() {
    const navbar = document.querySelector("nav");

    if (window.scrollY > 200) {
        navbar.classList.add("nav__color__change");
    } else {
        navbar.classList.remove("nav__color__change");
    }
}

function onLoad() {
    changeNavbarColor();
    animateProgress();
}

function onScroll() {
    changeNavbarColor();
}

window.onload = onLoad;
window.onscroll = onScroll;
