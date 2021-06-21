var randomVariable1 = Math.floor(Math.random() * 6) + 1; // pick a random number between 1 and 6

document.querySelector(".img1").setAttribute("src", "images/dice" + randomVariable1 + ".png"); // select the img1 class and change its src attribute to the image corresponding to the random number that we have generated

var randomVariable2 = Math.floor(Math.random() * 6) + 1; // pick a random number between 1 and 6

document.querySelector(".img2").setAttribute("src", "images/dice" + randomVariable2 + ".png"); // select the img2 class and change its src attribute to the image corresponding to the random number that we have generated

if (randomVariable1 < randomVariable2)
    document.querySelector("h1").textContent = "Player 2 Wins!🚩"
else if (randomVariable1 > randomVariable2)
    document.querySelector("h1").textContent = "🚩Player 1 Wins!"
else
    document.querySelector("h1").textContent = "Draw!"
