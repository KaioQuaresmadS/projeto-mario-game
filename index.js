const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


const jump = () => {
    mario.classList.add('jump');

    setTimeout (() => {

        mario.classList.remove('jump')
    } , 500); //Função e tempo
};

const loop = setInterval(() => { // Ligado a perder o game

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',''); //+ na frente na ajuda a transformar string em números
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagem/game-over.png'
        mario.style.width = '75px'
        mario.tyle.marginLeft = '50px'

        clearInterval(loop);
    }

},10);


document.addEventListener('keydown', jump);