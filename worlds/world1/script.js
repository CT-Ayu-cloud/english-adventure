const player = document.getElementById("player");

let x = 120;
let y = 500;
const speed = 6;

// ====== ANIMATION ======
let frame = 0;
let moving = false;

function showFrame() {

    const folder = moving ? "Walking" : "Idle";

    const maxFrame = moving ? 23 : 17;

    player.style.backgroundImage =
        `url("../../assets/assets/player/explorer/0_Forest_Ranger_${folder}_${String(frame).padStart(3,"0")}.png")`;

    frame++;

    if(frame > maxFrame){
        frame = 0;
    }

}

setInterval(showFrame,80);

// ====== MOVEMENT ======

player.style.left = x + "px";
player.style.top = y + "px";

document.addEventListener("keydown",function(e){

    if(!moving){
        moving = true;
        frame = 0;
    }

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
            player.style.transform = "scaleX(-1)";
            break;

        case "ArrowRight":
        case "d":
        case "D":
            x += speed;
            player.style.transform = "scaleX(1)";
            break;

        default:
            return;
    }

    player.style.left = x + "px";
    player.style.top = y + "px";

});

document.addEventListener("
