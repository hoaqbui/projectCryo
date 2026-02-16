export class Monster {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.type = data.type;
        this.stats = { ...data.stats };
        this.currentHp = data.stats.hp;

        this.autoAttack = data.autoAttack;
        this.passive = data.passive;
        this.ultimate = {
            ...data.ultimate,
            currentCooldown: 0,
            isReady: false
        };

        this.equippedItem = null;
        this.atbCharge = 0;
    }

    update(dt) {
        // Basic ATB charge based on speed
        if (this.atbCharge < 100) {
            this.atbCharge += this.stats.speed * dt * 0.1;
        }

        // Update Ultimate Cooldown
        if (this.ultimate.currentCooldown > 0) {
            this.ultimate.currentCooldown -= dt;
            if (this.ultimate.currentCooldown <= 0) {
                this.ultimate.currentCooldown = 0;
                this.ultimate.isReady = true;
            }
        } else {
            this.ultimate.isReady = true;
        }
    }

    useUltimate() {
        if (this.ultimate.isReady) {
            console.log(`${this.name} uses ${this.ultimate.name}!`);
            this.ultimate.currentCooldown = this.ultimate.cooldown;
            this.ultimate.isReady = false;
            return true;
        }
        return false;
    }

    equip(item) {
        this.equippedItem = item;
    }
}
