const mario = document.querySelector('.mario');   //seletor CSS
const pipe = document.querySelector('.pipe'); 

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump'); 

    }, 500);
} //função que adiciona a class de pulo, determina o tempo para remover a class jump baseado no tempo dele cair.

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);
    
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




document.addEventListener('keydown' , jump); //função para ao apertar qualquer tecla, o Mário pular.
