//Name corrector
const name1 = prompt("input player 1 name here:");
var first = name1.slice(0, 1).toLocaleUpperCase();
var left = name1.slice(1, name1.length);
var player1 = first + left;

document.querySelector("div.player1").innerHTML = player1;

const name2 = prompt("input player 2 name here");
var first = name2.slice(0, 1).toLocaleUpperCase();
var left = name2.slice(1, name2.length);
var player2 = first + left;

document.querySelector("div.player2").innerHTML = player2;

//score changer 1


let a = document.querySelector("div.score1");

let p1 = 0;

let score = a.innerHTML = p1;

document.querySelector("button.button1").addEventListener("click", function () {
  a.innerHTML = p1++;
});


//score changer 2

let b = document.querySelector("div.score2");

let p2 = 0;

let score2 = b.innerHTML = p2;


document.querySelector("button.button2").addEventListener("click", function () {
  b.innerHTML = p2++;
});

//win stats

  document.querySelector("button.end-game").addEventListener("click", function () {
  if (p1 > p2) {
    document.querySelector("div.alert").innerHTML = player1 + " win!!!"
  }
  else if (p2 > p1) {
    document.querySelector("div.alert").innerHTML = player2 + " win!!!"
  }
  else {
    document.querySelector("div.alert").innerHTML = "tie";
  }
})
