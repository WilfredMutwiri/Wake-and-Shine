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

