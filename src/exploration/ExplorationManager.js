import * as PIXI from 'pixi.js';

export class ExplorationManager {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.app = null;
    }

    async init() {
        this.app = new PIXI.Application();
        await this.app.init({
            background: '#1099bb',
            resizeTo: window
        });
        this.container.appendChild(this.app.canvas);

        // Placeholder for "Stardew Style" world
        const text = new PIXI.Text({
            text: '2D Exploration (Stardew Style)\nUse WASD to Move (Placeholder)',
            style: {
                fontFamily: 'Arial',
                fontSize: 24,
                fill: 0xffffff,
                align: 'center',
            }
        });
        text.anchor.set(0.5);
        text.x = this.app.screen.width / 2;
        text.y = this.app.screen.height / 2;
        this.app.stage.addChild(text);
    }
}
