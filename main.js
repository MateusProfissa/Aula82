var canvas = document.getElementById("meucanvas");
var contexto = canvas.getContext("2d");
var rover_lagura = 100;
var rover_altura = 90;
var fundo = "mars.jpg";
var rover = "rover.png";
var rover_x = 10;
var rover_y = 10;
var img_plano_de_fundo, img_rover;


function adicionar() {
    img_plano_de_fundo = new Image();
    img_plano_de_fundo.onload = carregar_pdf;
    img_plano_de_fundo.src = fundo;

    img_rover = new Image();
    img_rover.onload = carregar_rover;
    img_rover.src = rover;
}

function carregar_pdf() {
    contexto.drawImage(img_plano_de_fundo, 0, 0, canvas.width, canvas.height);
}

function carregar_rover() {
    contexto.drawImage(img_rover, rover_x, rover_y, rover_altura, rover_lagura);
}

window.addEventListener("keydown", tecla_pressionada);
function tecla_pressionada(e) {
    var tecla = e.keyCode;
    if (tecla=="38") {
        console.log("Cima");
        cima();
    }
    if (tecla=="40") {
        console.log("Baixo");
        baixo();
    }
    if (tecla=="39") {
        console.log("Direita");
        direita();
    }
    if (tecla=="37") {
        console.log("Esquerda");
        esquerda();
    }
}

function cima() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("Tecla para cima sendo pressionada, x = " + rover_x + " y = " + rover_y);
        carregar_pdf();
        carregar_rover();
    }
}
function baixo() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("Tecla para baixo sendo pressionada, x = " + rover_x + " y = " + rover_y);
        carregar_pdf();
        carregar_rover();
    } 
}
function direita() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("Tecla para direita sendo pressionada, x = " + rover_x + " y = " + rover_y);
        carregar_pdf();
        carregar_rover();
    }
}
function esquerda() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("Tecla para esquerda sendo pressionada, x = " + rover_x + " y = " + rover_y);
        carregar_pdf();
        carregar_rover();
    }
}