import './style.css';
import { GameState, GameStates } from './core/GameState';
import { ExplorationManager } from './exploration/ExplorationManager';
import { BattleManager } from './battle/BattleManager';

// Initialize Managers
const exploration = new ExplorationManager('exploration-container');
const battle = new BattleManager('battle-container');

async function initGame() {
  console.log("Initializing projectCryo Hybrid Engine...");

  // Init PIXI.js (2D)
  await exploration.init();

  // Init Three.js (3D)
  battle.init();

  // Setup Toggle logic for prototyping
  const toggleBtn = document.getElementById('btn-toggle-battle');
  toggleBtn.addEventListener('click', () => {
    const nextState = GameState.currentState === GameStates.EXPLORATION
      ? GameStates.BATTLE
      : GameStates.EXPLORATION;
    GameState.transitionTo(nextState);
  });

  // Handle Resize
  window.addEventListener('resize', () => {
    battle.resize();
  });

  console.log("Game Initialized in Exploration State.");
}

initGame();
