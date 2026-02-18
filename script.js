// script.js (ご提示のファイルと同じ)
const main = document.getElementById("main");
const foot_banner = document.querySelector('.foot-banner');
const screen_height = window.innerHeight;

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    scrollAdd(scrollY);
});

window.onload = function () {
    main.classList.add("active");
}

function scrollAdd(scrollY) {
    if (scrollY > window.innerHeight / 100) {
        foot_banner.classList.add("active");
    } else if (scrollY < window.innerHeight / 100) {
        foot_banner.classList.remove("active");
    }
}

// Subtitle Animation
const subtitle = document.querySelector('.top-sub-title');
if (subtitle) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                subtitle.classList.add('in-view');
            } else {
                subtitle.classList.remove('in-view'); // Toggle off to replay
            }
        });
    }, { threshold: 0 }); // Trigger immediately when any part is visible

    observer.observe(subtitle);
}