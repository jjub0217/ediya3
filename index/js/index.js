const close_btn = document.querySelector(".close-btn")
const li_first = document.getElementById("firstitem");
const lastitem = document.getElementById("lastitem");
const mainli = document.querySelectorAll("main ul li");
const header = document.querySelector("header");

close_btn.addEventListener("keydown", li_firstFocus);
li_first.addEventListener("keydown", function(event)
{
    if(event.shiftKey && event.keyCode=="9")
    {
        close_btn.focus();
        event.preventDefault();
    }
});
function li_firstFocus(e)
{
    if(e.keyCode === 9 && !e.shiftKey)
    {
        li_first.focus();
        e.preventDefault();
    }
    else if(e.shiftKey && e.keyCode === 9)
    {
        lastitem.focus();
        e.preventDefault();
    }
    else
    {
        return false;
    }
}
window.addEventListener('keydown', esc);
function esc(e) {
    if (e.keyCode === 27) {
        close();
    }
    else
    {
        return false;
    }
}

function close() {
    if (header.className == "load active") {
        header.classList.remove("active");
    } else {
        console.log("not active");
    }
}

function toggle() //버거바 토글 영역
{
    const header = document.querySelector("header");
    header.classList.toggle("active");
}

function curtaintoggle() {
    const curtain = document.getElementById("curtain");
    curtain.classList.toggle("active");
}

function clickEventHandler(e) {
    e.target.classList.toggle("active");
}

function closeBtn(e) {
    const ppp = e.target.offsetParent.parentNode;
    ppp.classList.toggle("active");
}
window.onload = function()
{
    header.classList.toggle("load");
    Array.from(mainli).forEach(card => card.classList.add("load"));
}