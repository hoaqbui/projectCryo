export const GameStates = {
  EXPLORATION: 'exploration',
  BATTLE: 'battle',
  PAUSED: 'paused'
};

class GameStateManager {
  constructor() {
    this.currentState = GameStates.EXPLORATION;
    this.containers = {
      exploration: document.getElementById('exploration-container'),
      battle: document.getElementById('battle-container')
    };
  }

  transitionTo(newState) {
    console.log(`Transitioning from ${this.currentState} to ${newState}`);
    
    // Hide current container
    if (this.containers[this.currentState]) {
      this.containers[this.currentState].classList.add('hidden');
    }

    this.currentState = newState;

    // Show new container
    if (this.containers[this.currentState]) {
      this.containers[this.currentState].classList.remove('hidden');
    }

    // Trigger state-specific start logic
    this.onStateEnter(newState);
  }

  onStateEnter(state) {
    switch (state) {
      case GameStates.EXPLORATION:
        console.log("Entering Exploration Mode (PIXI.js)");
        break;
      case GameStates.BATTLE:
        console.log("Entering Battle Mode (Three.js)");
        break;
    }
  }
}

export const GameState = new GameStateManager();
