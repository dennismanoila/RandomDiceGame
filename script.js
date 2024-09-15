var randomNumber1 = Math.floor(Math.random()*6) + 1;
document.querySelector(".dice-player1").setAttribute("src", "./images/dice" + randomNumber1 +".png");
var randomNumber2 = Math.floor(Math.random()*6) + 1;
document.querySelector(".dice-player2").setAttribute("src", "./images/dice" + randomNumber2 +".png");
if(randomNumber1>randomNumber2)
    document.querySelector("h1").textContent = "Player 1 wins!";
else if(randomNumber1<randomNumber2)
    document.querySelector("h1").textContent = "Player 2 wins!";
else
    document.querySelector("h1").textContent = "Draw!";

document.querySelector(".details").addEventListener("mouseenter", function() {
    document.querySelector(".content").classList.add("invisible");
    this.classList.add("visible");
    document.querySelector(".details-container").classList.remove("invisible");
    document.querySelector(".details-container").classList.add("visible");
    document.querySelector("body").style.backgroundColor = "#0E0F11";
});

document.querySelector(".details").addEventListener("mouseleave", function() {
    document.querySelector(".content").classList.remove("invisible");
    this.classList.remove("visible");
    document.querySelector(".details-container").classList.add("invisible");
    document.querySelector(".details-container").classList.remove("visible");
    document.querySelector("body").style.backgroundColor = "#393E46";
});