// about Page
window.addEventListener("scroll",reveal);
function reveal(){
    var reveals=document.querySelectorAll(".reveal");
    for(var i=0;i<reveals.length;i++){

        var windowHeight=window.innerHeight;
        var revealTop=reveals[i].getBoundingClientRect().top;
        var revealPoint=150;

        if(revealTop<windowHeight-revealPoint){
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
    }
}
// change welcome text
let wlcometxt=document.querySelector("#wlcometxt");
document.addEventListener('DOMContentLoaded', function () {
    const texts = ['.','..','...','Learn More About Us','.','..','...','We Are A Family Of Hope And Progres','.','..','...','Welcome!'];
    let currentIndex = 0;
    const textContainer = document.getElementById('text-container');
    function updateText() {
        wlcometxt.innerText = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }
    updateText();
    setInterval(updateText,1500);
});

