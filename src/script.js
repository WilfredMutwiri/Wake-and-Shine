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
// home slider
document.addEventListener('DOMContentLoaded', function () {
    // Defined  texts
    const texts = ['Unleash the Possible: Join Our Journey in Community Empowerment and Youth Advancement!','Harmony in Action: Bridging Generations, Transforming Lives in Our Shared Community','Building Bridges, Breaking Barriers: Unleashing the Potential of Every Youth in Our Community','Igniting Change, Inspiring Futures: A Community Hub for Youth Empowerment and Growth','Empowering Tomorrow: Building Stronger Communities, Transforming Young Lives.'];
    // Set initial index
    let currentIndex = 0;
    // Get text container
    const textContainer = document.getElementById('text-container');
    // Function to update text
    function updateText() {
        textContainer.innerText = texts[currentIndex];
        // Increment index or reset to 0 if at the end
        currentIndex = (currentIndex + 1) % texts.length;
    }
    // Initial update
    updateText();
    // Set interval to update
    setInterval(updateText,4000);
});


  


