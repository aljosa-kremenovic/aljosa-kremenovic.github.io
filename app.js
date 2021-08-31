//Dark mode
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
toggle.onclick = function () {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}


//Cursor follow on mouse move
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top:" + e.clientY + "px; ";
});




//Hover Effect
new hoverEffect({
    parent:document.querySelector('.distortion'),
    intensity: 0.2,
    image1: './images/5.png',
    image2: './images/4.png',
    speedIn: 2,
    speedOut: 5,

    displacementImage:  './images/heightMap.png'

});


//Resume tabs
const tabs = document.querySelectorAll('[data-tab-target]');
const tabsContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        const target = document.querySelector(tab.dataset.tabTarget);

        tabsContents.forEach(tabContent => {
            tabContent.classList.remove('active');

        })

        target.classList.add('active');

        tabs.forEach(tab => {
              tab.classList.remove('active');
          })

        e.target.classList.add("active");

    })
})


//Back to Top Button
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})


//Reveal on Scroll
window.addEventListener('scroll', reveal);

    function reveal(){
        var reveals = document.querySelectorAll('.reveal');

        for(var i = 0; i < reveals.length; i++){

            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if(revealtop < windowheight - revealpoint){
                reveals[i].classList.add('active');
            }
            else{
                reveals[i].classList.remove('active');
            }
        }
    }


