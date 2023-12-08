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
// change text
let wlcometxt=document.querySelector("#wlcometxt");
document.addEventListener('DOMContentLoaded', function () {
    const texts = ['.','..','...','We Strive To Offer The Best','.','..','We Are Not Just A family','.','..','We Beleive In The Future','.','..','We Are A Source Of Hope'];
    let currentIndex = 0;
    const textContainer = document.getElementById('text-container');
    function updateText() {
        wlcometxt.innerText = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }
    updateText();
    setInterval(updateText,1500);
});