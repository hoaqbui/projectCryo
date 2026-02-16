export class InputHandler {
    constructor() {
        this.keyMap = {
            'x': 'X',
            'y': 'Y',
            'a': 'A',
            'b': 'B',
            'Enter': 'A', // Alternative
            ' ': 'X'      // Alternative
        };

        this.callbacks = {
            'X': [],
            'Y': [],
            'A': [],
            'B': []
        };

        window.addEventListener('keydown', (e) => this.handleKeyDown(e));
        // Gamepad support would be polled in an update loop
    }

    on(action, callback) {
        if (this.callbacks[action]) {
            this.callbacks[action].push(callback);
        }
    }

    handleKeyDown(e) {
        const action = this.keyMap[e.key] || this.keyMap[e.key.toLowerCase()];
        if (action && this.callbacks[action]) {
            this.callbacks[action].forEach(cb => cb());
        }
    }

    // Polling for gamepads (to be called in the game loop)
    pollGamepad() {
        const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
        for (const gp of gamepads) {
            if (gp) {
                // Simple mapping for standard gamepad
                // X: button 2, Y: button 3, A: button 0, B: button 1
                if (gp.buttons[2].pressed) this.trigger('X');
                if (gp.buttons[3].pressed) this.trigger('Y');
                if (gp.buttons[0].pressed) this.trigger('A');
                if (gp.buttons[1].pressed) this.trigger('B');
            }
        }
    }

    trigger(action) {
        if (this.callbacks[action]) {
            this.callbacks[action].forEach(cb => cb());
        }
    }
}

export const Input = new InputHandler();
