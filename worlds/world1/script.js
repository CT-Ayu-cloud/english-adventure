const player = document.getElementById("player");

let x = 120;
let y = 500;

const speed = 6;

// ===== PLAYER =====
player.style.left = x + "px";
player.style.top = y + "px";

// ===== ANIMATION =====
let frame = 0;
let moving = false;

function showFrame(){

    const folder = moving ? "Walking" : "Idle";
    const maxFrame = moving ? 23 : 17;

    player.style.backgroundImage =
  player.style.backgroundImage =
`url("../../assets/assets/player/explorer/0_Forest_Ranger_${folder}_${String(frame).padStart(3,"0")}.png")`;
    frame++;

    if(frame > maxFrame){
        frame = 0;
    }

}

setInterval(showFrame,80);

// ===== MOVEMENT =====

document.addEventListener("keydown",function(e){

    moving = true;

    switch(e.key){

        case "ArrowUp":
            y -= speed;
            break;

        case "ArrowDown":
            y += speed;
            break;

        case "ArrowLeft":
            x -= speed;
            player.style.transform = "scaleX(-1)";
            break;

        case "ArrowRight":
            x += speed;
            player.style.transform = "scaleX(1)";
            break;

        default:
            return;

    }

    player.style.left = x + "px";
    player.style.top = y + "px";

});

document.addEventListener("keyup",function(){

    moving = false;
    frame = 0;

});
