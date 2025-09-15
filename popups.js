const popups = {}
popups.sadie = {
    url: "https://www.youtube.com/@sadieyayy",
    size: "width=315, height=121"
}
popups.youtomb = {
    url: "https://youtomb.github.io",
    size: "width=315, height=121"
}

var popuplist = [popups.sadie, popups.youtomb]
var windows = []

const SCREEN_WIDTH = window.screen.availWidth
const SCREEN_HEIGHT = window.screen.availHeight
const VELOCITY = 15
const MARGIN = 10
const TICK_LENGTH = 25
function moveWindowBounce () {
    let vx = VELOCITY * (Math.random() > 0.5 ? 1 : -1)
    let vy = VELOCITY * (Math.random() > 0.5 ? 1 : -1)

    setInterval(() => {
        const x = window.screenX
        const y = window.screenY
        const width = window.outerWidth
        const height = window.outerHeight

        if (x < MARGIN) vx = Math.abs(vx)
        if (x + width > SCREEN_WIDTH - MARGIN) vx = -1 * Math.abs(vx)
        if (y < MARGIN + 20) vy = Math.abs(vy)
        if (y + height > SCREEN_HEIGHT - MARGIN) vy = -1 * Math.abs(vy)

        window.moveBy(vx, vy)
    }, TICK_LENGTH)
    bindkeysdown()
}
function randomPos() {
    window.moveTo(Math.random() * SCREEN_WIDTH, Math.random() * SCREEN_HEIGHT)
    bindkeysdown()
}
function download(url){
    const a = document.createElement("a")
    a.href = url
    a.download = url
    a.click()
    setTimeout(() => {
        a.remove()
    }, 10);
}

function openpopup(url, size, sound){
    var newwindow = window.open(url, Math.random(), size + ", menubar=no, status=no, toolbar=no, resizable=no, titlebar=no, alwaysRaised=yes")
    windows.push(newwindow)
    newwindow.toolbar.visible = false
}
function bindkeysdown(){
    document.addEventListener("keydown", function(event) {
        if (event.key == "Control" || event.key == "Meta" || event.key == "w" || event.key == "F4" || event.key == "Alt") {
            openrandompopup(); openrandompopup();
        }        
    })
}

function openrandompopup(){
    var selectedpopup = popuplist[Math.floor(Math.random() * popuplist.length)]
    openpopup(selectedpopup.url, selectedpopup.size)
}
