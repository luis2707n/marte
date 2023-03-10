canvas = document.getElementById("pizarron");
contexto = canvas.getContext("2d");

arreglo_fondos=["marte.jpg","marte2.jpg","marte3.jpg","marte4.jpg","marte5.jpg"];

rover_ancho = 100;
rover_alto = 90;

random_number=Math.floor(Math.random()*5);
console.log(random_number);
fondo_imagen =arreglo_fondos[random_number];
rover_imagen = "rover.png";

roverX = 10;
roverY = 10;

function agregar(){
    fondo= new Image();
    fondo.onload= uploadBackground;
    fondo.src=fondo_imagen;
    
    rover= new Image();
    rover.onload=uploadrover;
    rover.src=rover_imagen;
}

function uploadBackground(){
    contexto.drawImage(fondo,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    contexto.drawImage(rover, roverX,roverY,rover_ancho,rover_alto);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38"){
        arriba();
        console.log("arriba");
    }
    
    if(keyPressed=="40"){
        abajo();
        console.log("abajo");
    }
    if(keyPressed=="37"){
        izquierda();
        console.log("izquierda");
    }
    if(keyPressed=="39"){
        derecha();
        console.log("derecha");
    }
}
    function arriba(){
        if(roverY>=0){
            roverY=roverY -10;
            uploadBackground();
            uploadrover();
        }
    }

    function abajo(){
        if(roverY<=500){
            roverY=roverY +10;
            uploadBackground();
            uploadrover();
       }
    }

    function izquierda(){
        if(roverX>=0){
            roverX=roverX -10;
            uploadBackground();
            uploadrover();
        }
    }

    function derecha(){
        if(roverX<=700){
            roverX=roverX +10;
            uploadBackground();
            uploadrover();
        }
    }