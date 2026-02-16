import * as PIXI from 'pixi.js';

export class Player {
    constructor(app) {
        this.app = app;
        this.sprite = new PIXI.Graphics();
        this.sprite.rect(0, 0, 32, 32);
        this.sprite.fill(0xfff000);
        this.sprite.x = 400;
        this.sprite.y = 300;

        this.speed = 4;
        this.keys = {};

        window.addEventListener('keydown', (e) => this.keys[e.key] = true);
        window.addEventListener('keyup', (e) => this.keys[e.key] = false);
    }

    update(dt) {
        if (this.keys['w'] || this.keys['ArrowUp']) this.sprite.y -= this.speed * dt;
        if (this.keys['s'] || this.keys['ArrowDown']) this.sprite.y += this.speed * dt;
        if (this.keys['a'] || this.keys['ArrowLeft']) this.sprite.x -= this.speed * dt;
        if (this.keys['d'] || this.keys['ArrowRight']) this.sprite.x += this.speed * dt;

        // Bounds check
        this.sprite.x = Math.max(0, Math.min(this.app.screen.width - 32, this.sprite.x));
        this.sprite.y = Math.max(0, Math.min(this.app.screen.height - 32, this.sprite.y));
    }
}
