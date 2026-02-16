## 1. Project Overview
"Mon-Tactics" is a creature-collection RPG featuring a **3v3 Active Tactical Battle System** inspired by the FF12 Gambit system, presented in a cozy **Stardew Valley-inspired pixel art style**. The goal is to provide a charming world to explore while offering deep tactical "programming" for your monster team.

## 2. Core Gameplay Loop
1.  **Explore**: Traverse a cozy, grid-based world (Stardew style) to discover monsters.
2.  **Program (Gambits)**: Set conditional logic for each of your 3 active monsters.
3.  **Battle**: Watch your automated tactics play out in real-time-with-pause 3v3 skirmishes.
4.  **Challenge**: Defeat regional **Gym Leaders** to prove your tactical prowess and unlock new Gambit slots.
5.  **Optimize**: Refine logic chains based on battle performance.

## 3. Key Mechanic: the Gambit System
*   **3v3 On-Field**: Three monsters are active at once, each following its own set of Gambits.
*   **Logic Chains**: Players set "If-Then" rules for each monster:
    - `Target: HP < 50% -> Action: Heal`
    - `Target: Weakness: Fire -> Action: Fireball`
    - `Target: Nearest Enemy -> Action: Attack`
*   **Active Time Battle (ATB)**: Each monster has a speed-based charge bar. When full, it executes the first valid Gambit in its list.
*   **Manual Overdrive**: Players can pause the battle to issue direct manual commands, which override Gambits for one turn.

## 4. MVP Feature Set
### A. Monster System
*   **Logic Slots**: Monsters start with 2 Gambit slots, unlocking more as they level.
*   **Speed Stat**: Directly influences ATB bar fill rate.

### B. Battle System
*   3v3 automated combat engine.
*   "Wait" Mode: Battle pauses when a manual command menu is opened.
*   Visual ATB bars for all 6 combatants.

### C. World & Exploration
*   **Aesthetic**: 2D top-down pixel art with seasonal variations and cozy vibes.
*   **Gym Leaders**: 8 unique tactical challenges acting as boss encounters.
*   **Starting Location**: The Oasis (Home base).
*   **Combat Route**: The Wilds (Random encounters in "tall grass").

## 5. Technical Stack (Proposed)
*   **Engine**: HTML5 Canvas / Javascript / Vite (for fast development and modern bundling).
*   **Rendering**: PIXI.js or similar for high-performance 2D pixel art.
*   **Architecture**: Component-based entity system for monster instances.
*   **State Management**: Centralized store for player inventory and monster stats.

---
*Drafted by Antigravity on 2026-02-15*
