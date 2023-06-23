// <!----------Typed cod---------->

var typingEffect = new Typed(".multiText", {
    strings: ["", "Web Developer.", "Frontend Developer.", "Fullstack Developer."],
    loop: true,
    typeSpeed: 110,
    backSpeed: 70,
    backDelay: 1500
})



// <!---------SwiperJs link--------->

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2100,
        disableOnIntraction: false,

    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// <!---------SwiperJs Dark Mode--------->

const main = document.getElementById("main")
const toggleBtn = document.getElementById("toggle")


toggleBtn.addEventListener("click", () => {
    if (main.classList.contains("dark")) {
        main.classList.remove("dark")
    }
    else {
        main.classList.add("dark")
    }
})

