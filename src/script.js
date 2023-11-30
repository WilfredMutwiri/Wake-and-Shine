
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
// reveal more nav info
let navCounter=2;
let navArrow=document.getElementById("navArrow");
let moreNav=document.getElementById("moreNav");
navArrow.addEventListener("click",()=>{
    navCounter++;
    moreNav.style.visibility="visible";
    if(navCounter>=2){
    moreNav.style.visibility="hidden";
    navCounter=0;
}
})
let navCounter2=2;
let navArrow2=document.getElementById("navArrow2");
let moreNav2=document.getElementById("moreNav2");
navArrow2.addEventListener("click",()=>{
    navCounter2++;
    moreNav2.style.visibility="visible";
    if(navCounter2>=2){
    moreNav2.style.visibility="hidden";
    navCounter2=0;
}
})
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
    const texts = ['Unleash the Possible: Join Our Journey in Community Empowerment and Youth Advancement!','Harmony in Action: Bridging Generations, Transforming Lives in Our Shared Community','An empowered community with the understanding of utilizing resources rationally for living dignified lives.','Igniting Change, Inspiring Futures: A Community Hub for Youth Empowerment and Growth','Empowering Tomorrow: Building Stronger Communities, Transforming Young Lives.'];
    let currentIndex = 0;
    const textContainer = document.getElementById('text-container');
    function updateText() {
        textContainer.innerText = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }
    updateText();
    setInterval(updateText,4000);
});
// achievements changer
let achieveHolder=document.getElementById("achieveHolder");
let achieveP=document.getElementById("achieveP");
achieveHolder.addEventListener("mouseenter",()=>{
    achieveP.style.visibility="visible";
})
let achieveHolder2=document.getElementById("achieveHolder2");
let achieveP2=document.getElementById("achieveP2");
achieveHolder.addEventListener("mouseenter",()=>{
    achieveP2.style.visibility="visible";
})
let achieveHolder3=document.getElementById("achieveHolder3");
let achieveP3=document.getElementById("achieveP3");
achieveHolder.addEventListener("mouseenter",()=>{
    achieveP3.style.visibility="visible";
})
let achieveHolder4=document.getElementById("achieveHolder4");
let achieveP4=document.getElementById("achieveP4");
achieveHolder.addEventListener("mouseenter",()=>{
    achieveP4.style.visibility="visible";
})
// testimony changer
let testimoner=document.getElementById("testimoner");
let testimoners=["Mr William Mutegi Zachary :","Mr Daniel Muchomba Nthiga:","Mr David Mwendwa Mutugi:","Mr Evans Mwiyathi Nthatu:","Peninah Makena Musee:","Norah Kathii Kirugo:"]
let testiTitle=document.getElementById("TestTitle");
let testiTitles=["Secretary","Chairperson","Organizing Secretary","Vice Secretary","Member","Member"]
let testimony=document.getElementById("testimony");
let testimonies=["'I was always feeling hopeless about the future. But then I joined Wake and Shine, and everything changed. The group has helped me develop a positive outlook on life and see the possibilitiesthat lie ahead. I've also learned how to be a positive influence on others.I'm so grateful for Wake and Shine,and I'm now excited about the future.'",
"'I was always starting projects but never finishing them. But then I joined Wake and Shine, and everything changed. The group has helped me develop my organizational skills and learn how to manage my time effectively. I've also learned how to persevere and not give up on my goals.I'm so grateful for Wake and Shine, and I'm now able to accomplish anything I set my mind to.'",
"'I was stuck in a rut and didn't know how to get out. But Wake and Shine has helped me set goalsand take action to achieve them. I'm finally making progress in my life,and I'm so proud of myself. I can't wait to see what the future holds!'",
"'Before I joined Wake and Shine, I was living paycheck to paycheck and drowning in debt.I didn't know how to manage my money or make it last until the end of the month. But thenI joined Wake and Shine, and everything changed. The group taught me how to budget, save,and invest my money. I'm now debt-free and have a healthy savings account.I'm so grateful for Wake and Shine for teaching me how to take control of my finances.'",
"'I was scared to start my own business when I joined Wake and Shine. I didn'tknow anything about business or how to get started. But then I joined Wake and Shine,and everything changed. The group taught me about business planning, marketing, and finance.I'm now the proud owner of my own successful business. I'm so grateful for Wake and Shine forgiving me the confidence and skills I need to succeed as an entrepreneur.'",
"'Before I joined Wake and Shine, I was feeling disconnected from my community. I didn't know my neighbors and I didn't feel like I belonged anywhere. But then I joined Wake and Shine,and everything changed. The group has helped me get involved in my community and meet new people.I'm now actively involved in local projects and I feel like I'm making a difference.'"];
let testiFrwdIcon=document.getElementById("testiFrwdIcon");
let testiBackIcon=document.getElementById("testiBackIcon");
let Counter=0;
testiFrwdIcon.addEventListener("click",()=>{
    testimoner.innerHTML=testimoners[Counter];
    testiTitle.innerHTML=testiTitles[Counter];
    testimony.innerHTML=testimonies[Counter];
    Counter++;
    if(Counter>=testimoners.length){
        Counter=0;
    }
})
testiBackIcon.addEventListener("click",()=>{
    testimoner.innerHTML=testimoners[Counter];
    testiTitle.innerHTML=testiTitles[Counter];
    testimony.innerHTML-testimonies[Counter];
    Counter--;
    if(Counter<=testimoners.length){
        Counter=1;
    }
})



  


