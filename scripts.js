let rightButton = document.querySelector('#right');
let leftButton = document.querySelector('#left');
let player = document.querySelector('.player');
let playerdefpos = 100;
let max = window.innerWidth;
let direction = '';
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
    if(direction == 'right'){
        if(playerdefpos < max - 200){
            playerdefpos = playerdefpos + 1;
            player.style.left = playerdefpos.toString() + "px";
        }
    }
    if(direction == 'left'){
        if(playerdefpos > 100){
            playerdefpos = playerdefpos - 1;
            player.style.left = playerdefpos.toString() + "px";
        }
    }
    window.requestAnimationFrame(tick);
}
tick();