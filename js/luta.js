let stamina1 = document.getElementById('stamina1');
let stamina2 = document.getElementById('stamina2');
let danger1 = 0;
let danger2 = 0;
let contador = 99;


function tempo() {
    let timmer = setInterval(function () {
        contador--;
        document.getElementById("tempo").innerHTML = contador;
        if (contador == 0 && danger1 > danger2) {
            alert("Game Over Player 2 Wins");
            clearInterval(clearInterval(timmer));

        } else if (contador == 0 && danger1 < danger2) {
            alert("Game Over Player 1 Wins");
            clearInterval(clearInterval(timmer));
        } else if (contador == 0 && danger1 == danger2) {
            alert("Game Over Empate");
            clearInterval(clearInterval(timmer));
        }

    }, 1000);
}
tempo();

function btnPlay(x) {
    danger(x);

    if (danger1 == 100) {
        danger1 = 0;
        danger2 = 0;
        contador = 99;
        alert("Game Over Player 2 Wins");

    } else if (danger2 == 100) {
        alert("Game Over Player 1 Wins");
        danger1 = 0;
        danger2 = 0;
        contador = 99;
    }

}

function danger(x) {
    if (x == 1) {
        danger2 = danger2 + 5;
        stamina2.style = " width: " + danger2 + "%";

    } else {
        danger1 = danger1 + 5;
        stamina1.style = " width: " + danger1 + "%";
    }
}

function reset() {
    alert("Nova Rodada");
    stamina2.style = " width: 0%";
    stamina1.style = " width: 0%";
    contador = 99;
    clearInterval(clearInterval(timmer));

}