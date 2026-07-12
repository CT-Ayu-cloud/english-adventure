class World1 extends Phaser.Scene {

    constructor() {
        super("World1");
    }

    create() {

        this.add.text(
            400,
            80,
            "ANIMAL ISLAND",
            {
                font: "48px Arial",
                fill: "#ffffff"
            }
        );

    }

}

const config = {
    type: Phaser.AUTO,
    parent: "game",
    width: 1280,
    height: 720,
    backgroundColor: "#87CEEB",
    scene: World1
};

new Phaser.Game(config);
