"projectCryo" is a creature-collection RPG featuring a **hybrid 2D/3D architecture**. Exploration takes place in a cozy **Stardew Valley-inspired 2D pixel art world**, while combat transitions into **separate 3D real-time tactical environments** inspired by Star Ocean. The core battle logic uses an **Active Tactical Battle System** powered by a customizable **FF12-style Gambit AI**.

## 2. Core Gameplay Loop
1.  **Explore**: Traverse a cozy, grid-based world (Stardew style) to discover monsters.
2.  **Program (Gambits)**: Set conditional logic for each of your 3 active monsters.
3.  **Battle**: Transition into a separate **3D arena** for real-time-with-pause 3v3 skirmishes.
4.  **Challenge**: Defeat regional **Gym Leaders** in high-stakes 3D tactical battles.
5.  **Optimize**: Refine logic chains based on battle performance.

## 3. Key Mechanic: the Gambit System
*   **3v3 On-Field**: Three monsters are active at once, each following its own set of Gambits.
*   **Logic Chains**: Players set "If-Then" rules for each monster:
    - `Target: HP < 50% -> Action: Heal`
    - `Target: Weakness: Fire -> Action: Fireball`
    - `Target: Nearest Enemy -> Action: Attack`
*   **Active Time Battle (ATB)**: Each monster has a speed-based charge bar. When full, it executes the first valid Gambit in its list.
*   **Manual Overdrive & Ultimates**: Players can pause or slow down the battle to issue specific manual commands or trigger powerful **Manual Ultimates**.
*   **Tactical UI**: Dedicated interfaces for managing **Items**, adjusting **Formation** on the fly, and monitoring Gambit execution.

## 4. MVP Feature Set
### A. Monster System
*   **Total Monsters**: 50 unique monsters for MVP.
*   **Ability Structure**:
    - **Auto-Attack**: Always active, fires based on speed/Gambits.
    - **Passive**: Always active, provides stat boosts or unique effects.
    - **Manual Ultimate**: High-impact ability manual triggered by the player.
*   **Equipment**: Each monster can equip exactly one item.
*   **Logic Slots**: Monsters start with 2 Gambit slots, unlocking more via Gym progression.

### B. Battle System
*   **3D Arena**: Separate 3D environments for each biome (Oasis, Wilds, Gyms).
*   **Real-Time Combat**: 3v3 automated combat engine with dynamic camera angles (Star Ocean style).
*   **Ultimate Controls**: Ultimates are mapped to a standard controller scheme:
    - **X, Y, A, B** buttons trigger specific monster ultimates or shared tactical actions.
*   **UI Overlay**: 
    - **Items Menu**: Quick access to healing and support items.
    - **Formation Control**: Change monster positioning during battle.
    - **Ultimate Gauge**: Charge and execute manual ultimates.
*   **Wait** Mode: Battle pauses when a manual command or item menu is opened.
*   Visual ATB/Cooldown bars and floating combat text in 3D space.

### C. World & Exploration
*   **Aesthetic**: 2D top-down pixel art with seasonal variations and cozy vibes.
*   **Dungeon System**: Grid-based rooms with interactive objects and triggers.
*   **Healing Room**: A safe zone where monsters' HP is restored and players can manage their team.
*   **Gym Leaders**: 8 unique tactical challenges acting as boss encounters.
*   **Starting Location**: The Oasis (Healing Room base).
*   **Combat Route**: The Wilds (Test Dungeon with random encounters).

## 5. Technical Stack (Proposed)
*   **Engine/Framework**: Vite + Vanilla Javascript.
*   **2D Rendering (World)**: HTML5 Canvas / PIXI.js (Stardew-style exploration).
*   **3D Rendering (Battle)**: **Three.js** (Separate battle scene with 3D models/sprites).
*   **Architecture**: Component-based entity system shared between 2D and 3D states.
*   **State Management**: Centralized store for player inventory, monster stats, and world position.

---
*Drafted by Antigravity on 2026-02-15*
