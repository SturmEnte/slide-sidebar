const DURATION = 1

const sidebar = document.getElementById('sidebar')
const sidebarBackground = document.getElementById('sidebar-background')

function openSidebar() {
    sidebar.style.left = `0px`
        //sidebarBackground.classList.add('fade-in')
    if (sidebarBackground.hasAttribute('hidden')) {
        sidebarBackground.toggleAttribute('hidden')
    }
    setTimeout(() => {
        sidebarBackground.style.opacity = "1"
    }, 1)
}

function closeSidebar() {
    sidebar.style.left = `-${sidebar.clientWidth}px`
        //sidebarBackground.classList.add('fade-out')
    sidebarBackground.style.opacity = "0"
    setTimeout(() => {
        if (!sidebarBackground.hasAttribute('hidden')) {
            sidebarBackground.toggleAttribute('hidden')
        }
    }, DURATION * 1000)
}

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});

window.addEventListener("load", () => {
    document.body.classList.remove("preload");
})