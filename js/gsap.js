const m1 = document.querySelector("#m-1");
const m2 = document.querySelector("#m-2");



// 1-elements timeline
const tl1 = gsap.timeline({

    scrollTrigger: {
        trigger: "#trigger",
        start: "center top",
        onEnter() {
            document.querySelector("#m-1 .typing-indicator").classList.add('disable');
        },
    },
    paused: true,
    defaults: {
        duration: .4,
        // ease: "power4",
        scale: 1,
    }
});

// message 1
tl1.to(
    m1.children[0], {},
    "=0"
);
tl1.to(
    m1.querySelector('.section-container').children[0], {}, 
	"=0"
);
tl1.to(
    m1.querySelector('.section-container').children[1], {},
    "=.5"
);

// message 2
tl1.to(
    m2.children[0], {},
    "=.8"
);
tl1.to(
    m2.children[0], {},
    "=.8"
);

// message 3