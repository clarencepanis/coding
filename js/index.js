let slideIndex = 1;
showSlides(slideIndex);
function next_prev_Slides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    else if (n < 1) {
        slideIndex = slides.length;
    }
    else {
        slideIndex = n;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/* --------------------- Login Modal --------------------- */
document.addEventListener("DOMContentLoaded", function() {
    var loginContent = document.querySelector(".login-holder");
    var btn = document.querySelector(".loginBtn");
    
    btn.onclick = function() {
        if (loginContent.style.display === "block") {
            loginContent.style.display = "none";
        } else {
            loginContent.style.display = "block";
        }
    }
});

    
