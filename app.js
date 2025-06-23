// Opciones
var opt_piedra = document.getElementById("piedra");
var opt_papel = document.getElementById("papel");
var opt_tijera = document.getElementById("tijera");
// Iniciar Juego
var start = document.getElementById("start_game");
// Jugadores
var img_opt_player1 = document.getElementById("player1");
var img_opt_player2 = document.getElementById("player2");
//Recuento
var ptos_player1 = document.getElementById("player1").innerText;
var ptos_player2 = document.getElementById("player2").innerText;
// Play
var select_player1;
var select_player2;
var vs;

start.onclick = function(){            
    select_player2 = opt_random(val_opt_random.toString());
    display_option_player2(select_player2);
    game_vs(select_player1,select_player2);

    console.log(select_player1,select_player2.toString());
}

// Player 1

opt_piedra.onclick = function () {
    select_player1 = "fuego";
    img_opt_player1.src = "./imag/fuego.jpg";
    img_opt_player2.src = "./imag/cpu.svg";
}

opt_papel.onclick = function () {
    select_player1 = "arbol";
    img_opt_player1.src = "./imag/arbol.jpg";
    img_opt_player2.src = "./imag/cpu.svg";
}

opt_tijera.onclick = function () {
    select_player1 = "agua";
    img_opt_player1.src = "./imag/agua.png";
    img_opt_player2.src = "./img/cpu.svg";
}

//Player 2 CPU

var val_opt_random = ["fuego","arbol","agua"];
function opt_random() {
    return [...val_opt_random]
    .sort(()=>Math.random() > 0.5 ? 1:-1)
    .slice(0,1);
}

function game_vs(select_player1,select_player2){ 

    if (select_player1 == "fuego") {
        if (select_player2 == "fuego") {
            vs = "same";
        } else if (select_player2 == "arbol") {
            vs = "p2win";
         }else {
            vs = "p1win";
        } 
    } else if (select_player1 == "arbol") {
        if (select_player2 == "arbol") {
            vs = "same";
        } else if (select_player2 == "agua") {
            vs = "p2win";
        } else {
            vs = "p1win";
        }
    } else if (select_player1 == "agua") {
        if (select_player2 == "agua") {
            vs = "same";
        } else if (select_player2 == "fuego") {
            vs = "p2win";
        } else {
            vs = "p1win";
        }
    }

    if (vs == "p1win") {
        document.getElementById("result").innerText = "Player 1 gana";
        document.getElementById("result").style.color = "#3FA796";
        ptos_player1++;
        document.getElementById("ptos_player1").innerText = ptos_player1;
    } else if (vs == "same") {
        document.getElementById("result").innerText = "Empate";
        document.getElementById("result").style.color = "#FEC260";
    } else if (vs == "p2win") {
        document.getElementById("result").innerText = "Player 2 gana";
        document.getElementById("result").style.color = "#A10035";
        ptos_player2++;
        document.getElementById("ptos_player2").innerText = ptos_player2;
    }
}

function display_option_player2(select_player2){
    if (select_player2 == "fuego") {
        img_opt_player2.src = "./imag/fuego.jpg";
    } else if (select_player2 == "arbol"){
        img_opt_player2.src = "./imag/arbol.jpg";
    } else {
        img_opt_player2.src = "./imag/agua.png";
    }
}

const reload = document.getElementById('reset');
reload.addEventListener('click', _ => {
    location.reload();
});
