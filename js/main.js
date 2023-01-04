// SIDEMENU
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.body.classList.toggle('nav-open');
});




// FLIP
document.getElementById('flip-card').addEventListener('click', function() {
    document.getElementById('flip-card').classList.toggle('flipped');
});




// NAME TEXT ANIMATION
var textWrapper = document.querySelector('.namep .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

setTimeout(() => {
    anime.timeline({ loop: false })
        .add({
            targets: '.namep .letter',
            translateY: ["1.1em", 0],
            translateZ: 0,
            duration: 750,
            delay: (el, i) => 50 * i
        })
}, 1000);