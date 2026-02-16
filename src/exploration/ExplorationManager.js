import * as PIXI from 'pixi.js';
import { Player } from './Player';

export class ExplorationManager {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.app = null;
        this.player = null;
        this.currentRoom = null;
    }

    async init() {
        this.app = new PIXI.Application();
        await this.app.init({
            background: '#2c3e50',
            resizeTo: window
        });
        this.container.appendChild(this.app.canvas);

        this.player = new Player(this.app);
        this.app.stage.addChild(this.player.sprite);

        this.createHealingRoom();

        this.app.ticker.add((ticker) => {
            this.player.update(ticker.deltaTime);
            this.checkTriggers();
        });
    }

    createHealingRoom() {
        console.log("Loading Healing Room...");
        // Placeholder for room graphics
        const floor = new PIXI.Graphics();
        floor.rect(100, 100, 600, 400);
        floor.fill(0x34495e);
        this.app.stage.addChildAt(floor, 0);

        const healingZone = new PIXI.Graphics();
        healingZone.circle(400, 300, 50);
        healingZone.fill(0x2ecc71);
        this.app.stage.addChildAt(healingZone, 1);
        this.healingTrigger = healingZone;

        const label = new PIXI.Text({
            text: 'Healing Room (Safe Zone)',
            style: { fill: 0xffffff, fontSize: 18 }
        });
        label.x = 110;
        label.y = 110;
        this.app.stage.addChild(label);
    }

    checkTriggers() {
        // Check if player is in the healing zone
        const dx = this.player.sprite.x + 16 - 400;
        const dy = this.player.sprite.y + 16 - 300;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 50) {
            // In healing zone - could trigger HP restore logic
        }
    }
}
