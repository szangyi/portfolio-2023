const m1 = document.querySelector("#m-1");
const m2 = document.querySelector("#m-2");
const m3 = document.querySelector("#m-3");
const m4 = document.querySelector("#m-4");
const m5 = document.querySelector("#m-5");
const m6 = document.querySelector("#m-6");
const m7 = document.querySelector("#m-7");
const m8 = document.querySelector("#m-8");
const m9 = document.querySelector("#m-9");
const m10 = document.querySelector("#m-10");



// 1-elements timeline

if (screen.width > 768) {
    var tl1 = gsap.timeline({

        scrollTrigger: {
            trigger: "#trigger",
            start: "center top",
        },
        paused: true,
        defaults: {
            duration: .4,
            scale: 1,
        }
    });
} else {
    var tl1 = gsap.timeline({

        scrollTrigger: {
            trigger: "#trigger-2",
            start: "20% bottom",
        },
        paused: true,
        defaults: {
            duration: .4,
            scale: 1,
        }
    });
}



// message 1 - L
tl1.to(
    m1.children[0], { opacity: 1 },
    "=0"
);
tl1.to(
    m1.children[1], {},
    "=-.2"
);

tl1.to(
    m1.querySelector('.section-container').children[0], {},
    "=1"
);
tl1.to(
    m1.querySelector('.section-container').children[1], {},
    "=.5"
);

// message 2 - R
tl1.to(
    m2.children[0], { opacity: 1 },
    "=1"
);
tl1.to(
    m2.children[1], {},
    "=-.2"
);

tl1.to(
    m2.querySelector('.section-container').children[0], {},
    "=1"
);

// message 3 - L
tl1.to(
    m3.children[0], { opacity: 1 },
    "=1"
);
tl1.to(
    m3.children[1], {},
    "=-.2"
);

tl1.to(
    m3.querySelector('.section-container').children[0], {},
    "=1"
);

// message 4 - R
tl1.to(
    m4.children[0], { opacity: 1 },
    "=1.5"
);
tl1.to(
    m4.children[1], {},
    "=-.2"
);

tl1.to(
    m4.querySelector('.section-container').children[0], {},
    "=1"
);
tl1.to(
    m4.querySelector('.section-container').children[1], {},
    "=.5"
);

// message 5 - L
tl1.to(
    m5.children[0], { opacity: 1 },
    "=1"
);
tl1.to(
    m5.children[1], {},
    "=-.2"
);

tl1.to(
    m5.querySelector('.section-container').children[0], {},
    "=1"
);

// message 6 - R - BEERB
tl1.to(
    m6.children[0], { opacity: 1 },
    "=1.5"
);
tl1.to(
    m6.children[1], {},
    "=-.2"
);

tl1.to(
    m6.querySelector('.section-container').children[0], {},
    "=1"
);
tl1.to(
    m6.querySelector('.section-container').children[1], {},
    "=.5"
);

// message 7 - L
tl1.to(
    m7.children[0], { opacity: 1 },
    "=1"
);
tl1.to(
    m7.children[1], {},
    "=-.2"
);

tl1.to(
    m7.querySelector('.section-container').children[0], {},
    "=1"
);


// message 8 - R 
tl1.to(
    m8.children[0], { opacity: 1 },
    "=1"
);
tl1.to(
    m8.children[1], {},
    "=-.2"
);

tl1.to(
    m8.querySelector('.section-container').children[0], {},
    "=1.5"
);
tl1.to(
    m8.querySelector('.section-container').children[1], {},
    "=0"
);

tl1.to(
    m8.querySelector('.section-container').children[2], {},
    "=1"
);
tl1.to(
    m8.querySelector('.section-container').children[3], {},
    "=.5"
);



// message 9 - L
tl1.to(
    m9.children[0], { opacity: 1 },
    "=1"
);
tl1.to(
    m9.children[1], {},
    "=-.2"
);

tl1.to(
    m9.querySelector('.section-container').children[0], {},
    "=1"
);



// message 10 - R 
tl1.to(
    m10.children[0], { opacity: 1 },
    "=1"
);
tl1.to(
    m10.children[1], {},
    "=-.2"
);

tl1.to(
    m10.querySelector('.section-container').children[0], {},
    "=1.5"
);
tl1.to(
    m10.querySelector('.section-container').children[1], {},
    "=0"
);

tl1.to(
    m10.querySelector('.section-container').children[2], {},
    "=1"
);
tl1.to(
    m10.querySelector('.section-container').children[3], {},
    "=.5"
);
tl1.to(
    m10.querySelector('.section-container').children[4], {},
    "=.5"
);