const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", check_animation);

check_animation();

function check_animation() {
    
    const trigger = window.innerHeight / 2;
    // console.log(window.innerHeight / 6 * 4);

    faders.forEach(fade => {
        const top = fade.getBoundingClientRect().top;

        if (trigger > top) {
            fade.classList.add("appear");
        } else {
            fade.classList.remove("appear");
        }
    });
}