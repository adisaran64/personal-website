var tl = gsap.timeline();
var inAnimation = false;
var leftSidebarOpen = false;
var rightSidebarOpen = false;

function init() {
    tl.to(".header", {duration: 1.25, top: "0", ease: "power3"})
    .to(".footer", {duration: 1.25, bottom: "0", ease: "power3"})
    .to("#centerfold", {duration: 1, opacity: 1, ease: "none"})

    new Gradient({canvas: "#left-gradient", colors: ['#240b36', '#6f0000', '#03001e']})
    new Gradient({canvas: "#right-gradient", colors: ['#3a2f6b','#41a0ae','#3ec995']})
}

function allowNextAnimation() {
    inAnimation = false;
}

function closeFooter() {
    gsap.to(".footer", {duration: 1, bottom: "-36px", ease: "power3"})
}

function openFooter() {
    gsap.to(".footer", {duration: 1, delay: 1, bottom: "0", ease: "power3"})
    gsap.to("#centerfold", {duration: 1, delay: 1, opacity: 1})
}

function openLeftSidebar() {
    gsap.to("#about-sidebar", {duration: 2, width: "25%", height: "calc(100% - 36px)", ease: "power3"})
    gsap.to(".container", {duration: 1.75, marginLeft: "25%", height: "100%", ease: "expoScale"})
    gsap.to("#vertical-line-left", {duration: 1.75, marginTop: "0", ease: "circ"})
    gsap.to("#vertical-line-right", {duration: 1.75, marginTop: "0", ease: "circ"})
    gsap.to("#left-gradient", {duration: 0, delay: 1.75, display: "block"})
    gsap.to("#left-gradient", {duration: 1, delay: 1.75, opacity: 1})
    gsap.to("#centerfold", {duration: 1, delay: 1.75, opacity: 1, onComplete: allowNextAnimation})
    leftSidebarOpen = true;
}

function openRightSidebar() {
    gsap.to("#gallery-sidebar", {duration: 2, width: "25%", height: "calc(100% - 36px)", ease: "power3"})
    gsap.to(".container", {duration: 1.75, marginLeft: "-25%", height: "100%", ease: "expoScale"})
    gsap.to("#vertical-line-left", {duration: 1.75, marginTop: "0", ease: "circ"})
    gsap.to("#vertical-line-right", {duration: 1.75, marginTop: "0", ease: "circ"})
    gsap.to("#right-gradient", {duration: 0, delay: 1.75, display: "block"})
    gsap.to("#right-gradient", {duration: 1, delay: 1.75, opacity: 1})
    gsap.to("#centerfold", {duration: 1, delay: 1.75, opacity: 1, onComplete: allowNextAnimation})
    rightSidebarOpen = true;
}

function closeLeftSidebar() {
    gsap.to("#about-sidebar", {duration: 1.85, width: "0", height: "0", ease: "power3"},)
    gsap.to(".container", {duration: 1.75, marginLeft: "0", height: "calc(100% - 72px)", ease: "expoScale", onComplete: allowNextAnimation})
    gsap.to("#vertical-line-left", {duration: 1.75, marginTop: "8px", ease: "circ"})
    gsap.to("#vertical-line-right", {duration: 1.75, marginTop: "8px", ease: "circ"})
    leftSidebarOpen = false;
}

function closeRightSidebar() {
    gsap.to("#gallery-sidebar", {duration: 1.85, width: "0", height: "0", ease: "power3"},)
    gsap.to(".container", {duration: 1.75, marginLeft: "0", height: "calc(100% - 72px)", ease: "expoScale", onComplete: allowNextAnimation})
    gsap.to("#vertical-line-left", {duration: 1.75, marginTop: "8px", ease: "circ"})
    gsap.to("#vertical-line-right", {duration: 1.75, marginTop: "8px", ease: "circ"})
    rightSidebarOpen = false;
}

function leftSidebar() {
    if (tl.progress() == 1 && !inAnimation) {
        inAnimation = true
        if (!leftSidebarOpen) {
            if (!rightSidebarOpen) {
                gsap.to("#centerfold", {duration: 1, opacity: 0, onComplete: () => {closeFooter(), openLeftSidebar();}})
            } else {
                gsap.to("#centerfold", {duration: 1, opacity: 0})
                gsap.to("#right-gradient", {duration:1, opacity: 0})
                gsap.to("#right-gradient", {duration:0, delay: 1, display: "none", onComplete: () => {closeRightSidebar(), openLeftSidebar();}})
            }
        } else {
            gsap.to("#centerfold", {duration: 1, opacity: 0})
            gsap.to("#left-gradient", {duration:1, opacity: 0})
            gsap.to("#left-gradient", {duration:0, delay: 1, display:"none", onComplete: () => {closeLeftSidebar(), openFooter();}})
        }
    }
}

function rightSidebar() {
    if (tl.progress() == 1 && !inAnimation) {
        inAnimation = true
        if (!rightSidebarOpen) {
            if (!leftSidebarOpen) {
                gsap.to("#centerfold", {duration: 1, opacity: 0, onComplete: () => {closeFooter(), openRightSidebar();}})
            } else {
                gsap.to("#centerfold", {duration: 1, opacity: 0})
                gsap.to("#left-gradient", {duration:1, opacity: 0})
                gsap.to("#left-gradient", {duration:0, delay: 1, display:"none", onComplete: () => {closeLeftSidebar(), openRightSidebar();}})
            }
        } else {
            gsap.to("#centerfold", {duration: 1, opacity: 0})
            gsap.to("#right-gradient", {duration:1, opacity: 0})
            gsap.to("#right-gradient", {duration:0, delay: 1, display: "none", onComplete: () => {closeRightSidebar(), openFooter();}})
        }
    }
}

window.addEventListener("load", function(event) {
    init();
});
