const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    parent: "game",

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let player;
let cursors;

function preload() {

}

function create() {

    // Langit
    this.add.rectangle(1500, 1000, 3000, 2000, 0x87ceeb);

    // Tanah
    this.add.rectangle(1500, 1500, 3000, 1000, 0x66bb55);

    // Pemain (kotak sementara)
    player = this.add.rectangle(300, 500, 40, 60, 0x0066ff);

    this.physics.add.existing(player);

    player.body.setCollideWorldBounds(true);

    this.physics.world.setBounds(0, 0, 3000, 2000);

    this.cameras.main.setBounds(0, 0, 3000, 2000);

    this.cameras.main.startFollow(player, true);

    cursors = this.input.keyboard.createCursorKeys();
}

function update() {

    player.body.setVelocity(0);

    const speed = 200;

    if (cursors.left.isDown) {
        player.body.setVelocityX(-speed);
    }

    if (cursors.right.isDown) {
        player.body.setVelocityX(speed);
    }

    if (cursors.up.isDown) {
        player.body.setVelocityY(-speed);
    }

    if (cursors.down.isDown) {
        player.body.setVelocityY(speed);
    }
}
