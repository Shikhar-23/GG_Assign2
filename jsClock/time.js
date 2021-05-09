
var hr = document.getElementsByClassName("finger")[0];
var min = document.getElementsByClassName("finger")[1];
var sec = document.getElementsByClassName("finger")[2];


setInterval(function(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();


    console.log(typeof(h));
    console.log(h);
    var degree = (h%12) *30 + m/2;
    hr.style.transformOrigin = "bottom";
    min.style.transformOrigin = "bottom";
    sec.style.transformOrigin = "bottom";
    hr.style.transform = `rotate(${degree}deg)`;
    degree = m*6;
    min.style.transform = `rotate(${degree}deg)`;
    degree = s*6;
    sec.style.transform = `rotate(${degree}deg)`;
}, 1000);
