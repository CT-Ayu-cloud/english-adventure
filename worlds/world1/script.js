const player = document.getElementById("player");

let x = 120;
let y = 500;
const speed = 6;

// ====== ANIMATION ======
let frame = 0;
let moving = false;

function showFrame() {

    const folder = moving ? "Walking" : "Idle";

    player.style.backgroundImage =
        `url("../../assets/assets/player/explorer/0_Forest_Ranger_${folder}_${String(frame).padStart(3,"0")}.png")`;

    frame++;

    if(frame > 23){
        frame = 0;
    }
}

setInterval(showFrame,80);

// ====== MOVEMENT ======

player.style.left = x + "px";
player.style.top = y + "px";

document.addEventListener("keydown",function(e){

    moving = true;

    switch(e.key){

        case "ArrowUp":
        case "w":
        case "W":
            y -= speed;
            break;

        case "ArrowDown":
        case "s":
        case "S":
            y += speed;
            break;

        case "ArrowLeft":
        case "a":
        case "A":
            x -= speed;
            break;

        case "ArrowRight":
        case "d":
        case "D":
            x += speed;
            break;

        default:
            return;
    }

    player.style.left = x + "px";
    player.style.top = y + "px";

});

document.addEventListener("keyup",function(){

    moving = false;
});
