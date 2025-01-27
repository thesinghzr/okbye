let targetDate = new Date("2025-06-03T00:00:00");

function fun() {
    document.body.innerHTML = "";

    let goback = document.createElement("div");
    goback.id = "goback";
    goback.style.width = "30%";
    goback.style.height = "20px";
    goback.style.border = "1px solid black";
    goback.style.borderRadius = "3px";
    goback.style.backgroundColor = "#afacac";
    goback.innerText = " < Go Back";
    goback.style.textAlign = "center"; 
    goback.style.margin = "10px";
    goback.style.cursor = "pointer";  
    document.body.appendChild(goback);

    let timer = document.createElement("div");
    timer.className = "timer";
    timer.id = "timer";
    timer.style.width = "100%";
    timer.style.height = "50px"; 
    timer.style.borderRadius = "2px";
    timer.style.backgroundColor = "#afacac";
    timer.style.marginTop = "30px";
    timer.style.marginBottom = "50px";
    timer.style.textAlign = "center"; 
    document.body.appendChild(timer);

    goback.addEventListener("click", () => {
        document.body.innerHTML = "";
        document.body.innerHTML = `<div id="mainDiv">
            <div id="firstDiv"> Click Me </div>
        </div>`;

        document.getElementById("firstDiv").addEventListener("click", (event) => {
            fun();
        });
    });

    const timerInterval = setInterval(updateTimer);  

    for (let i = 0; i < 100; i++) {
        setTimeout(addText, i * 300);  
    }
}

document.getElementById("firstDiv").addEventListener("click", (event) => {
    fun();
});

function addText() {
    let textDiv = document.createElement("div");
    textDiv.style.border = "1px solid black";
    textDiv.style.borderRadius = "3px";
    textDiv.style.width = "100%";
    textDiv.style.height = "60px";
    textDiv.style.borderRadius = "2px";
    textDiv.style.backgroundColor = "#afacac"; 
    textDiv.style.marginTop = "5px";

    let text = "";

    for (let i = 0; i < 15; i++) {
        text += "ILoveYou ";
    }
    textDiv.innerText = text;
    textDiv.style.textAlign = "center"; 

    document.body.appendChild(textDiv);
}

function updateTimer() {
    const now = new Date();
    const timeRemaining = targetDate - now;

    const timerElement = document.getElementById("timer");
    if (!timerElement) return;  

    if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    timerElement.innerText = `
        ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds
    `;
}
