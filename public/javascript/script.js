//const { start } = require("repl");

// JavaScript for toggle menu
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// GSAP Animation

// gsap.from(" .heading", {
//     opacity: 0,
//     y: -50,
//     duration: 1
// })

// gsap.from(".nav-part1 .tag", {
//     opacity: 0,
//     x: -50,
//     duration: 1,
//     delay: 1,
//     stagger: 0.5
// })


// gsap.from(".card", {
//     opacity: 0,
//     x: -50,
//     duration: 1,
//     delay: 2,
//     stagger: 0.5,
//     // scrollTrigger: {
//     //     trigger: ".card",
//     //     start:" bottom bottom",
//     //     end: "bottom start"
//     // }
// })

