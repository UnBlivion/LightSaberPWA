let chooseSide = document.querySelector("#chooseside");
let sabers = document.querySelector("#sabers");
let buttonJedi = document.querySelector(".jedi");
let buttonSith = document.querySelector(".sith");
let lightSaber = document.querySelector(".tuim");
let voltar = document.querySelector(".return");

function escolherSith() {
    chooseSide.style.display = 'none';
    sabers.style.display = 'flex';
    lightSaber.style.background = 'linear-gradient(90deg, #A50D08, red, #A50D08'
    lightSaber.style.boxShadow = '0 0 50px red';
}

function escolherJedi() {
    chooseSide.style.display = 'none';
    sabers.style.display = 'flex';
}

function turnOn(){
    if(lightSaber.style.opacity == 1){
        lightSaber.style.opacity = 0;
    }
    else{
        lightSaber.style.opacity = 1;
    }
}

function retornar(){
    chooseSide.style.display = 'flex';
    sabers.style.display = 'none';
}

voltar.onclick = retornar;
buttonSith.onclick = escolherSith;
buttonJedi.onclick = escolherJedi;
sabers.onclick = turnOn;

// Registra o service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('./service-worker.js')
    .then(function() { 
        console.log('Service Worker Registered'); 
    }, function(error){
        console.error(error);
    });
}