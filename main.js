const openMenu = document.getElementById("open-menu");
const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click",function(){
    hamburger.style.display = "block";
});

closeMenu.addEventListener("click", function(){
    hamburger.style.display = "none";

});