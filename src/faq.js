
// change text
let wlcometxt=document.querySelector("#wlcometxt");
document.addEventListener('DOMContentLoaded', function () {
    const texts = ['~Frequently Asked Questions ~','.'];
    let currentIndex = 0;
    const textContainer = document.getElementById('text-container');
    function updateText() {
        wlcometxt.innerText = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }
    updateText();
    setInterval(updateText,1500);
});