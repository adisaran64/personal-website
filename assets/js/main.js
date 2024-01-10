var tl = gsap.timeline();

const container = document.getElementById("container");

const leftSidebarElement = document.getElementById("about-sidebar");
const rightSidebarElement = document.getElementById("gallery-sidebar");
const leftSidebarContainedElements = document.getElementsByClassName("about-sidebar-container");
const rightSidebarContainedElements = document.getElementsByClassName("gallery-sidebar-container");

const scrollNameElements = [document.getElementById("name1"), document.getElementById("name2")];

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

function makeHidden(elemCollection) {
    for (var i = 0; i < elemCollection.length; i++) {
        elemCollection[i].style.visibility = "hidden";
    }
}

function openFooter() {
    gsap.to(".footer", {duration: 1, delay: 1.15, bottom: "0", ease: "power3"});
    gsap.to("#centerfold", {duration: 1, delay: 1.15, opacity: 1, onComplete: allowNextAnimation});
}

function closeFooter() {
    gsap.to(".footer", {duration: 1, bottom: "-36px", ease: "power3"});
}

function openLeftSidebar() {
    container.style.marginLeft = "25%"; container.style.height = "100%";
    leftSidebarElement.style.width = "25%";
    scrollNameElements[0].style.animationPlayState = "running";
    scrollNameElements[1].style.animationPlayState = "running";
    gsap.to("#about-sidebar", {duration: 1.5, height: "calc(100% - 36px)", ease: "power3"});
    
    gsap.to(".about-sidebar-container", {duration: .875, delay: 1.5, opacity: 1, visibility: "visible"});
    gsap.to(".hr", {duration: .875, delay: 1.5, width: "calc(100% - 1px)", opacity: 1, ease: "power3"});
    gsap.to("#centerfold", {duration: .875, delay: 1.5, opacity: 1, onComplete: allowNextAnimation});

    leftSidebarOpen = true;
}

function openRightSidebar() {
    container.style.marginLeft = "-25%"; container.style.height = "100%";
    rightSidebarElement.style.width = "25%";
    gsap.to("#gallery-sidebar", {duration: 1.5, height: "calc(100% - 36px)", ease: "power3"});

    gsap.to(".gallery-sidebar-container", {duration: .875, delay: 1.25, opacity: 1, visibility: "visible"});
    gsap.to("#centerfold", {duration: .875, delay: 1.25, opacity: 1, onComplete: allowNextAnimation});

    rightSidebarOpen = true;
}

function closeLeftSidebar() {
    container.style.marginLeft = "0"; container.style.height = "calc(100% - 72px)";
    scrollNameElements[0].style.animationPlayState = "paused";
    scrollNameElements[1].style.animationPlayState = "paused";
    gsap.to("#about-sidebar", {duration: 1.15, height: "0", ease: "power3", onComplete: () => {leftSidebarElement.style.width = "0%";}});
    leftSidebarOpen = false;
}

function closeRightSidebar() {
    container.style.marginLeft = "0"; container.style.height = "calc(100% - 72px)";
    gsap.to("#gallery-sidebar", {duration: 1.15, height: "0", ease: "power3", onComplete: () => {rightSidebarElement.style.width = "0%";}});
    rightSidebarOpen = false;
}

function centerfoldHandling(func1, func2) {
    if (func1 == closeLeftSidebar) {
        gsap.to(leftSidebarContainedElements, {duration: .875, opacity: 0, onComplete: () => makeHidden(leftSidebarContainedElements)});
        gsap.to(".hr", {duration: .875, width: 0, opacity: 0, ease: "power3"});
    } else {
        gsap.to(rightSidebarContainedElements, {duration: .875, opacity: 0, onComplete: () => makeHidden(rightSidebarContainedElements)});
    }
    gsap.to("#centerfold", {duration: .875, opacity: 0, onComplete: () => {func1(), func2();}});
}

function leftSidebarTrigger() {
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

function rightSidebarTrigger() {
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
