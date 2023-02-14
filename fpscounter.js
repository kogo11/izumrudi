let fps = document.querySelector("#fps");
let startTime = Date.now();
let frame = 0;
function updateFps() {
    let time = Date.now();
    frame++;
    if (time - startTime > 1000) {
        fps.textContent = (frame / ((time - startTime) / 1000)).toFixed(1);
        startTime = time;
        frame = 0;
    } 
}
