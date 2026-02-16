# Product Requirements Document: Project Cryo

## 1. Vision Statement
**Project Cryo** is a high-fidelity 2D creature-collection RPG built in **Unity**. It combines the cozy, grid-based world-building of *Stardew Valley* with a tactical **5x5 Grid-Based Auto-Battler**.

> [!NOTE]
> The project emphasizes modularity and engine-native systems, leveraging **The Farming Engine** for world mechanics and a custom **Tactical SRPG** framework for combat.

## 2. Core Gameplay Loop
1.  **Explore**: Traverse a cozy, grid-based world to discover and interact with wild **Creatures**.
2.  **Prepare**: Manage a team of up to **3 active creatures** and optimize their equipment.
3.  **Battle**: Transition into tactical 3v3 automated skirmishes on a 5x5 grid.
4.  **Challenge**: Defeat regional **Gym Leaders** in high-stakes tactical encounters.
5.  **Optimize**: Refine creature builds and equipment based on battle performance.

## 3. Key Mechanic: Grid-Based Battle System
The combat system is a **Speed-Driven Automated SRPG**.

*   **Grid Layout**: All battles take place on a **5x5 square grid**.
*   **Move & Action Economy**: Each creature has **2 Moves** (1 tile per move) and **2 Actions** (Attack/Ability) per turn.
*   **Speed-Driven Order**: Turn order is calculated dynamically based on the **Speed (AGI)** stat.
*   **Automated Intelligence**: Battles are fully automated. AI decision-making for moves and actions is weighted by the **Luck (LUK)** stat.
*   **Ultimates**: Each creature possesses a unique **Ultimate Ability** triggered automatically when its energy meter is full.

## 4. MVP Feature Set

### A. Creature System
*   **Total Creatures**: 20 unique designs for MVP (refer to [creature_roster.md](./creature_roster.md)).
*   **Ability Structure**:
    *   **Auto-Attack**: Standard automated action.
    *   **Passive**: Persistent effect or stat boost.
    *   **Ultimate**: High-impact ability with specific trigger conditions.
*   **Equipment**: Each creature can equip exactly one item to modify stats or behaviors.

### B. World & Exploration
*   **Aesthetic**: 2D top-down pixel art with seasonal variations.
*   **Follower System**: Up to **3 active creatures** follow the player sprite on the map.
*   **Integration**: Seamless transition between gathering/farming and tactical combat.

## 5. Technical Stack
*   **Core Engine**: Unity 2022.3+ (LTS).
*   **World Framework**: **The Farming Engine** (Inventories, Time, Interactions).
*   **Combat Framework**: **Turn-Based Strategy Framework** (Grid, Pathfinding).
*   **Data Management**: ScriptableObjects for all Creature and Ability definitions.
*   **UI System**: Unity UI Toolkit for high-performance tactical overlays.

---
*Last Updated: 2026-02-16*
