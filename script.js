
let flag = 0
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// var a = document.querySelector("#elem1")
// var abc = a.getAttribute("data-image")
// console.log(abc)

function page4(){
    var elemC = document.querySelector("#elem-container") 
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter",function(){
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave",function(){
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".element")
    elems.forEach(function(e){
        e.addEventListener("mouseenter",function(){
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
    }


function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("#logo")

    function menuOpen() {
        console.log("clicked");
            full.style.top = 0
            flag = 1
        }
    
    function menuClose() {
        console.log("clicked");
        full.style.top = "-100%"
        flag = 0
    }
    var menu2 = document.querySelector("#full-scr h3")
    menu.addEventListener("click", menuOpen);
    menu2.addEventListener("click", menuClose);


}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}
swiper()
page4()
menuAnimation()
loaderAnimation()