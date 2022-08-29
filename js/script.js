document.addEventListener("DOMContentLoaded", function() {
let slider = document.querySelector('.slider');
let viewport = document.querySelector('.viewport').offsetWidth;
let j = 0;

function next () {
    j++;
    if (j <= 2) {
        slider.style.left = -viewport*j + 'px';
    }
    else { j =0;
        slider.style.left = -viewport*j + 'px';   
    }
}
 setInterval (function() {
 next ();
 }, 2000)

})