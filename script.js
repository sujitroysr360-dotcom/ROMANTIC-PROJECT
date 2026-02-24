document.getElementById("btn")
.addEventListener("click",function(){

document.getElementById("text").innerHTML =
"I LOVE YOU SHUCHEE ❤️";

this.style.display="none";

let video =
document.getElementById("bg-video");

video.style.display="block";

video.muted=true;

video.play();


});
