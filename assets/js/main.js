var tl = gsap.timeline();

const container = document.getElementById("container");
const scrollNameElements = [document.getElementById("name1"), document.getElementById("name2")];
const leftSidebarElements = ["#about-overview", "#contact-overview", ".scroll"];
const rightSidebarElements =[];

var inAnimation = false;
var leftSidebarOpen = false;
var rightSidebarOpen = false;

function init() {
    gsap.defaults({ease: "none"});

    tl.to(".header", {duration: 1.25, top: "0", ease: "power3"})
    .to(".footer", {duration: 1.25, bottom: "0", ease: "power3"})
    .to("#centerfold", {duration: 1, opacity: 1});


    scrollNameElements[0].style.animationPlayState = "paused";
    scrollNameElements[1].style.animationPlayState = "paused";
}

function allowNextAnimation() {
    inAnimation = false;
}

function closeFooter() {
    gsap.to(".footer", {duration: 1, bottom: "-36px", ease: "power3"});
}

function openFooter() {
    gsap.to(".footer", {duration: 1, delay: 1.5, bottom: "0", ease: "power3"});
    gsap.to("#centerfold", {duration: 1, delay: 1.5, opacity: 1});
}

function openLeftSidebar() {
    container.style.marginLeft = "25%"; container.style.height = "100%";
    scrollNameElements[0].style.animationPlayState = "running";
    scrollNameElements[1].style.animationPlayState = "running";

    gsap.to("#about-sidebar", {duration: 1.5, width: "25%", height: "calc(100% - 36px)", ease: "power3"});
    gsap.to(leftSidebarElements, {duration: .875, delay: 1.5, opacity: 1});
    gsap.to(".hr", {duration: .875, delay: 1.5, width: "calc(100% - 1px)", opacity: 1, ease: "power3"});
    gsap.to("#centerfold", {duration: .875, delay: 1.5, opacity: 1, onComplete: allowNextAnimation});

    leftSidebarOpen = true;
}

function openRightSidebar() {
    container.style.marginLeft = "-25%"; container.style.height = "100%";
    gsap.to("#gallery-sidebar", {duration: 1.5, width: "25%", height: "calc(100% - 36px)", ease: "power3"});

    // right elements go here, duration .875, delay 1.5
    gsap.to("#centerfold", {duration: .875, delay: 1.5, opacity: 1, onComplete: allowNextAnimation});

    rightSidebarOpen = true;
}

function closeLeftSidebar() {
    container.style.marginLeft = "0"; container.style.height = "calc(100% - 72px)";
    scrollNameElements[0].style.animationPlayState = "paused";
    scrollNameElements[1].style.animationPlayState = "paused";
    gsap.to("#about-sidebar", {duration: 1.5, width: "0", height: "0", ease: "power3", onComplete: allowNextAnimation});
    leftSidebarOpen = false;
}

function closeRightSidebar() {
    container.style.marginLeft = "0"; container.style.height = "calc(100% - 72px)";
    gsap.to("#gallery-sidebar", {duration: 1.5, width: "0", height: "0", ease: "power3", onComplete: allowNextAnimation});
    rightSidebarOpen = false;
}

function centerfoldHandling(func1, func2) {
    if (func1 == closeLeftSidebar) {
        gsap.to(leftSidebarElements, {duration: .875, opacity: 0});
        gsap.to(".hr", {duration: .875, width: 0, opacity: 0, ease: "power3"});
    } else {
        // put 
    }
    gsap.to("#centerfold", {duration: .875, opacity: 0, onComplete: () => {func1(), func2();}});
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
