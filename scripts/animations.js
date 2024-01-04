var tl = gsap.timeline();
var inAnimation = false;
var leftSidebarOpen = false;
var rightSidebarOpen = false;

function init() {
    tl.to(".header", {duration: 2, top: "0", ease: "power3"})
    .to("#vertical-line-left", {duration: 1.5, height: "calc(100% - 16px)", ease: "circ"}, .75)
    .to("#vertical-line-right", {duration: 1.5, height: "calc(100% - 16px)", ease: "circ"}, .75)
    .to(".footer", {duration: 1.5, bottom: "0", ease: "power3"}, 1.75)

    new Gradient({canvas: "#about-text", colors: ['#a960ee','#ff333d','#90e0ff','#ffcb57']})
    new Gradient({canvas: "#date-text", colors: ['#a960ee','#ff333d','#90e0ff','#ffcb57']})
}

function allowNextAnimation() {
    inAnimation = false;
}

function closeFooter() {
    gsap.to(".footer", {duration: 1, bottom: "-36px", ease: "power3"})
}

function openFooter() {
    gsap.to(".footer", {duration: .75, delay: 1, bottom: "0", ease: "power3"})
}

function openLeftSidebar() {
    gsap.to("#about-text", {duration: 2, width: "25%", height: "calc(100% - 36px)", ease: "power3"})
    gsap.to(".container", {duration: 1.75, marginLeft: "25%", height: "100%", ease: "expoScale", onComplete: allowNextAnimation})
    gsap.to("#vertical-line-left", {duration: 1.75, marginTop: "0", ease: "circ"})
    gsap.to("#vertical-line-right", {duration: 1.75, marginTop: "0", ease: "circ"})
    leftSidebarOpen = true;
}

function openRightSidebar() {
    gsap.to("#date-text", {duration: 2, width: "25%", height: "calc(100% - 36px)", ease: "power3"})
    gsap.to(".container", {duration: 1.75, marginLeft: "-25%", height: "100%", ease: "expoScale", onComplete: allowNextAnimation})
    gsap.to("#vertical-line-left", {duration: 1.75, marginTop: "0", ease: "circ"})
    gsap.to("#vertical-line-right", {duration: 1.75, marginTop: "0", ease: "circ"})
    rightSidebarOpen = true;
}

function closeLeftSidebar() {
    gsap.to("#about-text", {duration: 1.85, width: "0", height: "0", ease: "power3"},)
    gsap.to(".container", {duration: 1.75, marginLeft: "0", height: "calc(100% - 72px)", ease: "expoScale", onComplete: allowNextAnimation})
    gsap.to("#vertical-line-left", {duration: 1.75, marginTop: "8px", ease: "circ"})
    gsap.to("#vertical-line-right", {duration: 1.75, marginTop: "8px", ease: "circ"})
    leftSidebarOpen = false;
}

function closeRightSidebar() {
    gsap.to("#date-text", {duration: 1.85, width: "0", height: "0", ease: "power3"},)
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
                closeFooter()
            } else {
                closeRightSidebar();
            }
            openLeftSidebar()
        } else {
            closeLeftSidebar()
            openFooter()
        }
    }
}

function rightSidebar() {
    if (tl.progress() == 1 && !inAnimation) {
        inAnimation = true
        if (!rightSidebarOpen) {
            if (!leftSidebarOpen) {
                closeFooter()
            } else {
                closeLeftSidebar()
            }
            openRightSidebar()
        } else {
            closeRightSidebar()
            openFooter()
        }
    }
}

window.addEventListener("load", function(event) {
    init();
});
