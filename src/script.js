// make menuIcon resonsive
let menuIcon=document.querySelector("#menu");
let menuBar=document.querySelector("#menuBar")
let menuClickCounter=2;
menuIcon.addEventListener("click",()=>{
    menuBar.style.visibility="visible";
    menuClickCounter ++;
    console.log(menuClickCounter)
    if(menuClickCounter>=2){
        menuBar.style.visibility="hidden";
        menuClickCounter=0;
    }
});
// home text changer
document.addEventListener('DOMContentLoaded', function () {
    const texts = ['Unleash the Possible: Join Our Journey in Community Empowerment and Youth Advancement!','Harmony in Action: Bridging Generations, Transforming Lives in Our Shared Community','Building Bridges, Breaking Barriers: Unleashing the Potential of Every Youth in Our Community','Igniting Change, Inspiring Futures: A Community Hub for Youth Empowerment and Growth','Empowering Tomorrow: Building Stronger Communities, Transforming Young Lives.'];
    let currentIndex = 0;
    const textContainer = document.getElementById('text-container');
    function updateText() {
        textContainer.innerText = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }
    updateText();
    setInterval(updateText,4000);
});
window.addEventListener("scroll",reveal);
function reveal(){
    var reveals=document.querySelectorAll("#reveal");
    for(var i=0;i<reveals.length;i++){

        var windowHeight=window.innerHeight;
        var revealTop=reveals[i].getBoundingClientRect().top;
        var revealPoint=200;

        if(revealTop<windowHeight-revealPoint){
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
    }
}

  


