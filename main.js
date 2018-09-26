let chooseSide = document.querySelector("#chooseside");
let sabers = document.querySelector("#sabers");
let sabre = document.querySelector('.sabre');
let buttonJedi = document.querySelector(".jedi");
let buttonSith = document.querySelector(".sith");
let lightSaber = document.querySelector(".tuim");
let voltar = document.querySelector(".return");
let zunim = new Audio('lightsaber_03.wav');

function escolherSith() {
    chooseSide.style.display = 'none';
    sabers.style.display = 'flex';
    lightSaber.style.background = 'linear-gradient(90deg, #A50D08, red, #A50D08'
    lightSaber.style.boxShadow = '0 0 50px red';
}

function escolherJedi() {
    chooseSide.style.display = 'none';
    sabers.style.display = 'flex';
    lightSaber.style.background = 'linear-gradient(90deg, rgb(26, 136, 26), rgb(3, 187, 3), rgb(26, 136, 26))'
    lightSaber.style.boxShadow = '0 0 50px green';
}

function turnOn() {
    if (lightSaber.style.transform == 'translateY(0px) scaleY(1)') {
        lightSaber.style.transform = 'translateY(calc(100% - 30vh)) scaleY(0)';
        sabre.style.overflowX = 'hidden';
    }
    else {
        lightSaber.style.transform = 'translateY(0) scaleY(1)';
        sabre.style.overflowX = 'visible';
        zunim.play();
    }
}

function retornar() {
    chooseSide.style.display = 'flex';
    sabers.style.display = 'none';
}

voltar.onclick = retornar;
buttonSith.onclick = escolherSith;
buttonJedi.onclick = escolherJedi;
sabre.onclick = turnOn;

// Registra o service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function () {
            console.log('Service Worker Registered');
        }, function (error) {
            console.error(error);
        });
}