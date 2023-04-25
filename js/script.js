const mario = document.querySelector('.mario');   //Essa linha seleciona o elemento HTML que tem a classe "mario" e o atribui à constante mario.
const pipe = document.querySelector('.pipe');  //Essa linha seleciona o elemento HTML que tem a classe "pipe" e o atribui à constante pipe.

// Sobre acima, eu sei que são classes por causa dos pontos antes dos nomes. Se fosse # era um id.

// Abaixo temos uma função chamada jump que adiciona uma classe chamada "jump" ao elemento mario que guardamos acima e depois a remove após 500 milissegundos usando uma função setTimeout.
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump'); 

    }, 500);
}

// Este trecho de código abaixo configura um loop usando setInterval que é executado a cada 10 milissegundos.

const loop = setInterval(() => {

    // só exibe no console do navegador a palavra loop quando isto aqui é executado
    console.log('loop')

    //Dentro deste loop, obtemos a posição atual dos elementos pipe e mario que criamos acima 
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    // só exibe no console do navegador a posição do mario obtida acima.
    console.log(marioPosition);
    
    // verifica se o mario e o cano (pipe) colidiram (ou seja, se a posição do mario está dentro da faixa de pixels que o pipe ocupa. Se ambos estiverem na mesma faixa de pixels da tela, entramos dentro deste IF (se) e consideramos como uma colisão. Assim alteramos a imagem do mario para um Mario morto e interrompemos o loop limpando o intervalo inicial (clear interval).
    if (pipePosition <= 120 && pipePosition > 0  && marioPosition < 90) {

        pipe.style.animation = 'none'; 
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none'; 
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/mario-dead.png';
        mario.style.width = '105px'
        mario.style.marginLeft = '25px'

        clearInterval(loop);


    }  //condicionando a altura do pulo do mario (90) e a parte onde o Mario encosta no cano.

}, 10);


// Esta linha abaixo adiciona um ouvinte de evento a todo o documento (documento é toda a página html) que ouve pressionamentos de teclas e, em seguida, chama a função jump quando uma tecla é empurrada para baixo. Neste caso, pressionar qualquer tecla fará com que o elemento mario pule.

document.addEventListener('keydown' , jump); //função para ao apertar qualquer tecla, o Mário pular.
