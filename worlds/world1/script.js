
const player = document.getElementById("player");

let x = 120;
let y = 500;

const speed = 6;

// Letakkan pemain pada kedudukan permulaan
player.style.left = x + "px";
player.style.top = y + "px";

document.addEventListener("keydown", function(e){

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
