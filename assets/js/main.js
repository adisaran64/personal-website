var tl = gsap.timeline();
var inAnimation = false;
var leftSidebarOpen = false;
var rightSidebarOpen = false;

function init() {
    tl.to(".header", {duration: 1.25, top: "0", ease: "power3"})
    .to(".footer", {duration: 1.25, bottom: "0", ease: "power3"})
    .to("#centerfold", {duration: 1, opacity: 1, ease: "none"});
}

function allowNextAnimation() {
    inAnimation = false;
}

function closeFooter() {
    gsap.to(".footer", {duration: 1, bottom: "-36px", ease: "power3"});
}

function openFooter() {
    gsap.to(".footer", {duration: 1, delay: 1.5, bottom: "0", ease: "power3"});
    gsap.to("#centerfold", {duration: 1, delay: 1.5, opacity: 1, ease: "none"});
}

function openLeftSidebar() {
    gsap.to("#about-sidebar", {duration: 2, width: "25%", height: "calc(100% - 36px)", ease: "power3"});
    gsap.to(".container", {duration: 1.75, marginLeft: "25%", height: "100%", ease: "expoScale"});
    gsap.to("#centerfold", {duration: 1, delay: 1.75, opacity: 1, ease: "none", onComplete: allowNextAnimation});
    leftSidebarOpen = true;
}

function openRightSidebar() {
    gsap.to("#gallery-sidebar", {duration: 2, width: "25%", height: "calc(100% - 36px)", ease: "power3"});
    gsap.to(".container", {duration: 1.75, marginLeft: "-25%", height: "100%", ease: "expoScale"});
    gsap.to("#centerfold", {duration: 1, delay: 1.75, opacity: 1, ease: "none", onComplete: allowNextAnimation});
    rightSidebarOpen = true;
}

function closeLeftSidebar() {
    gsap.to("#about-sidebar", {duration: 1.85, width: "0", height: "0", ease: "power3"},);
    gsap.to(".container", {duration: 1.75, marginLeft: "0", height: "calc(100% - 72px)", ease: "expoScale", onComplete: allowNextAnimation});
    leftSidebarOpen = false;
}

function closeRightSidebar() {
    gsap.to("#gallery-sidebar", {duration: 1.85, width: "0", height: "0", ease: "power3"},);
    gsap.to(".container", {duration: 1.75, marginLeft: "0", height: "calc(100% - 72px)", ease: "expoScale", onComplete: allowNextAnimation});
    rightSidebarOpen = false;
}

function centerfoldHandling(func1, func2) {
    gsap.to("#centerfold", {duration: 1, opacity: 0, ease: "none", onComplete: () => {func1(), func2();}});
}

function leftSidebar() {
    if (tl.progress() == 1 && !inAnimation) {
        inAnimation = true;
        if (!leftSidebarOpen) {
            if (!rightSidebarOpen) {
                centerfoldHandling(closeFooter, openLeftSidebar);
            } else {
                centerfoldHandling(closeRightSidebar, openLeftSidebar);
            }
        } else {
            centerfoldHandling(closeLeftSidebar, openFooter);
        }
    }
}

function rightSidebar() {
    if (tl.progress() == 1 && !inAnimation) {
        inAnimation = true;
        if (!rightSidebarOpen) {
            if (!leftSidebarOpen) {
                centerfoldHandling(closeFooter, openRightSidebar);
            } else {
                centerfoldHandling(closeLeftSidebar, openRightSidebar);
            }
        } else {
            centerfoldHandling(closeRightSidebar, openFooter);
        }
    }
}

window.addEventListener("load", function(event) {
    init();
});
