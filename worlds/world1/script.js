const player = document.getElementById("player");

let x = 100;
let y = 420;

const speed = 10;

function updatePlayer(){

    player.style.left = x + "px";
    player.style.top = y + "px";

}

document.addEventListener("keydown", function(e){

    switch(e.key){

        case "ArrowLeft":
            x -= speed;
            break;

        case "ArrowRight":
            x += speed;
            break;

        case "ArrowUp":
            y -= speed;
            break;

        case "ArrowDown":
            y += speed;
            break;

    }

    // Had sempadan skrin
    x = Math.max(0, Math.min(window.innerWidth - 60, x));
    y = Math.max(0, Math.min(window.innerHeight - 60, y));

    updatePlayer();

});

updatePlayer();
