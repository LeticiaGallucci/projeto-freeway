let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 95, 150, 210, 270, 315];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3]
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro () {
  for (let i = 0; i < imagensCarros.length; i++) {
    image(imagensCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro () {
  for (let i = 0; i < imagensCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialCarro () {
  for (let i = 0; i < imagensCarros.length; i++) {
    if (passouTodaTela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTodaTela (xCarro) {
  return xCarro < -50
}