setTimeout(()=>{
    
    let hostname = window.location.origin;
    let headerimg = document.getElementById("headerimg");
    headerimg.src = hostname + "/img/blockth3.jpeg";

    let mediumimg = document.getElementById("mediumimg");
    mediumimg.src = hostname + "/img/medium.png";

    let linkedinimg = document.getElementById("linkedinimg");
    linkedinimg.src = hostname + "/img/linkedin.png";

    let footerimg = document.getElementById("footerimg");
    footerimg.src = hostname + "/img/blockth3.jpeg";

}, 200)


function openTab(id) {
    let popUp = document.getElementById('popUp');
    popUp.classList.remove("hidden");


    let contents = document.querySelectorAll('.content');
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.add("hidden");
    }

    document.getElementById(`${id}`).classList.remove("hidden");
}

function closepopUp() {
    let popUp = document.getElementById('popUp');
    popUp.classList.add("hidden");
}

function navToggle() {

    let navMenu = document.querySelector(".navMenu");
    navMenu.classList.toggle("hidden");

}

function changeCodeTab(id){
    let codes = document.querySelectorAll(".code");
    let number = id.slice(id.length-1, id.length);
    console.log(number, "id.length::");

    let codeheads = document.querySelectorAll(".codehead");
    for(let i=0; i<codeheads.length; i++){
        codeheads[i].classList.remove("border-l", "border-l-[5px]", "border-[#fe2a5c]");
    }

    codeheads[parseInt(number)-1].classList.add("border-l", "border-l-[5px]", "border-[#fe2a5c]");

    for(let i=0; i<codes.length; i++){
        codes[i].classList.add("hidden");
    }
    document.getElementById(id).classList.remove("hidden");
}

function scrollToSection(id) {
    let value = document.getElementById(id).offsetTop - 72;
    window.scrollTo(0, value);
    let navMenu = document.querySelector(".navMenu");
    navMenu.classList.add("hidden");
}

window.addEventListener("scroll", function () {
    let header = document.querySelector(".header");

    if (window.scrollY > 72) {
        header.classList.add('lg:bg-opacity-80');
    }
    else {
        header.classList.remove('lg:bg-opacity-80');
    }
})

function goTop() {
    window.scrollTo(0, 0);
}

window.addEventListener("scroll", function () {
    let uparrow = document.getElementById("uparrow");

    if (window.scrollY > 400) {
        uparrow.classList.remove('hidden');
    }
    else {
        uparrow.classList.add('hidden');
    }
})

window.addEventListener("scroll", function () {
    let uparrow = document.getElementById("getconnect");

    if (window.scrollY < 250) {
        uparrow.classList.remove('hidden');
    }
    else {
        uparrow.classList.add('hidden');
    }
})
