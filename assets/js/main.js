// ANIMATION VARIABLES

var tl = gsap.timeline();
var inAnimation = false;

// RESIZE VARIABLES

const widthCutoff = 1024;
const heightCutoff = 100;
var lastX = window.innerWidth;
var lastY = window.innerHeight;

// SIDEBAR VARIABLES

const leftSidebarElement = document.getElementById("about-sidebar");
const rightSidebarElement = document.getElementById("gallery-sidebar");
const leftSidebarContainedElements = document.getElementsByClassName("about-sidebar-container");
const rightSidebarContainedElements = document.getElementsByClassName("gallery-sidebar-container");
var leftSidebarOpen = false;
var rightSidebarOpen = false;

// OTHER VARIABLES

const container = document.getElementById("container");
const headerElement = document.getElementById("header");
const footerElement = document.getElementById("footer");
const signatureElement = document.getElementById("signature");
const scrollNameElements = [document.getElementById("name1"), document.getElementById("name2")];

// MISC. HELPER FUNCTIONS

function allowNextAnimation() {
    inAnimation = false;
}

function makeHidden(elemCollection) {
    for (var i = 0; i < elemCollection.length; i++) {
        elemCollection[i].style.visibility = "hidden";
    }
}

function handleResize() {
    var x = window.innerWidth;
    var y = window.innerHeight;
    if (leftSidebarOpen) {
        if (lastX > widthCutoff && x <= widthCutoff) {
            container.style.marginLeft = "100%";
            leftSidebarElement.style.width = "100%";
        } else if (lastX <= widthCutoff && x > widthCutoff) {
            leftSidebarElement.style.width = "25%";
            container.style.marginLeft = "25%";
        }
    } else if (rightSidebarOpen) {
        if (lastX > widthCutoff && x <= widthCutoff) {
            container.style.marginLeft = "-100%";
            rightSidebarElement.style.width = "100%";
        } else if (lastX <= widthCutoff && x > widthCutoff) {
            rightSidebarElement.style.width = "25%";
            container.style.marginLeft = "-25%";
        }
    } 
    if (lastY > heightCutoff && y <= heightCutoff) {
        headerElement.style.pointerEvents = "none";
        footerElement.style.display = "none";
        container.style.display = "none";
    } else if (lastY <= heightCutoff && y > heightCutoff) {
        headerElement.style.pointerEvents = "all";
        footerElement.style.display = "block";
        container.style.display = "block";
    }
    lastX = x;
    lastY = y;
}

// ANIMATING HELPER FUNCTIONS

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
    if (window.innerWidth <= widthCutoff) {
        leftSidebarElement.style.width = "100%";
        container.style.marginLeft = "100%";
    }

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
    if (window.innerWidth <= widthCutoff) {
        rightSidebarElement.style.width = "100%";
        container.style.marginLeft = "-100%";
    }

    gsap.to("#gallery-sidebar", {duration: 1.5, height: "calc(100% - 36px)", ease: "power3"});

    gsap.to(".gallery-sidebar-container", {duration: .875, delay: 1.25, opacity: 1, visibility: "visible"});
    gsap.to("#centerfold", {duration: .875, delay: 1.25, opacity: 1, onComplete: allowNextAnimation});

    rightSidebarOpen = true;
}

function closeLeftSidebar() {
    container.style.marginLeft = "0"; container.style.height = "calc(100% - 72px)";  container.style.marginLeft = "0%";
    scrollNameElements[0].style.animationPlayState = "paused";
    scrollNameElements[1].style.animationPlayState = "paused";
    gsap.to("#about-sidebar", {duration: 1.15, height: "0", ease: "power3", onComplete: () => {leftSidebarElement.style.width = "0%";}});
    leftSidebarOpen = false;
}

function closeRightSidebar() {
    container.style.marginLeft = "0"; container.style.height = "calc(100% - 72px)";  container.style.marginLeft = "0%";
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

// ONCLICK FUNCTIONS

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

// LOAD, INIT

function init() {
    gsap.defaults({ease: "none"});

    tl.to(".header", {duration: 1.25, top: "0", ease: "power3"})
    .to(".footer", {duration: 1.25, bottom: "0", ease: "power3"})
    .to("#centerfold", {duration: 1, opacity: 1});

    scrollNameElements[0].style.animationPlayState = "paused";
    scrollNameElements[1].style.animationPlayState = "paused";

    window.addEventListener("resize", handleResize)
}

window.addEventListener("load", function(event) {
    if (this.window.innerHeight < 100 || this.window.innerWidth < 250) {
        this.document.body.innerHTML = "Page not accessible on small screens.";
    } else {
        init();
    }
});
