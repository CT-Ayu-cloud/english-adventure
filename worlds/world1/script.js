const config = {
    type: Phaser.AUTO,

    parent: "game",

    width: 1280,
    height: 720,

    backgroundColor: "#87CEEB",

    scene: {
        create: create
    }
};

new Phaser.Game(config);

function create(){

    this.add.text(
        380,
        60,
        "🌴 ANIMAL ISLAND",
        {
            fontSize: "48px",
            color: "#ffffff",
            fontStyle: "bold"
        }
    );

}
