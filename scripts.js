let rightButton = document.querySelector('#right');
let leftButton = document.querySelector('#left');
let player = document.querySelector('.player');
let playerdefpos = 100;
let max = window.innerWidth;
let direction = '';
let lastTime = Date.now();
rightButton.addEventListener('mousedown', () => {
    direction = 'right';
});
rightButton.addEventListener('mouseup', () => {
    direction = '';
});
leftButton.addEventListener('mousedown', () => {
    direction = 'left';
});
leftButton.addEventListener('mouseup', () => {
    direction = '';
});
tick = () => {
    updateFps();
    let time = Date.now();
    let deltaTime = time - lastTime;
    deltaTime /= 1000;
    lastTime = time;
    if(direction == 'right'){
        if(playerdefpos < max - 200){
            playerdefpos = playerdefpos + 1000 * deltaTime;
            player.style.left = playerdefpos.toString() + "px";
        }
    }
    if(direction == 'left'){
        if(playerdefpos > 100){
            playerdefpos = playerdefpos - 1000 * deltaTime;
            player.style.left = playerdefpos.toString() + "px";
        }
    }
    window.requestAnimationFrame(tick);
}
tick();
document.addEventListener('keydown', function(event) {
if (event.code == 'ArrowLeft'){
    direction = 'left'
}

else if (event.code == 'ArrowRight'){
    direction = 'right'
}
else {
    direction = ''
}
});