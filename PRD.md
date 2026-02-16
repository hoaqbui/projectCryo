"projectCryo" is a creature-collection RPG built in **Unity**. It features a cozy **Stardew Valley-inspired world** (leveraging **The Farming Engine**) and a tactical **5x5 Grid-Based Arena**. The core gameplay revolves around an **Automated Tactical SRPG** system where creature actions are driven by speed, positioning, and luck.

## 2. Core Gameplay Loop
1.  **Explore**: Traverse a cozy, grid-based world (Stardew style) to discover monsters.
2.  **Prepare**: Manage your team of up to 3 active monsters and their equipment.
3.  **Battle**: Transition into a separate **5x5 tactical grid** for automated 3v3 skirmishes.
4.  **Challenge**: Defeat regional **Gym Leaders** in high-stakes 2D tactical battles.
5.  **Optimize**: Refine logic chains based on battle performance.

## 3. Key Mechanic: Grid-Based Battle System
*   **3v3 On-Field**: Three monsters per side are active on a **5x5 grid**.
*   **Move & Action Economy**: Each monster has **2 Moves** (1 step per move) and **2 Actions** per turn.
*   **Speed-Driven Order**: Turn order is determined dynamically by the **Speed (agi)** stat.
*   **Automated Combat with Luck Bias**: The entire battle is automated, with a **Luck** stat providing a probabilistic bias to decision-making and accuracy/criticals.

## 4. MVP Feature Set
### A. Monster System
*   **Total Monsters**: 20 unique monsters for MVP.
*   **Ability Structure**:
    - **Auto-Attack**: Always active, fires based on speed/Gambits.
    - **Passive**: Always active, provides stat boosts or unique effects.
    - **Manual Ultimate**: High-impact ability manual triggered by the player.
*   **Equipment**: Each monster can equip exactly one item.

### B. World & Exploration
*   **Aesthetic**: 2D top-down pixel art with seasonal variations and cozy vibes.
*   **Follower System**: Up to **3 active monsters** follow the Trainer on the map at all times.

## 5. Technical Stack
*   **Engine**: Unity 2022.3+ (LTS).
*   **Framework**: **The Farming Engine** (for core world mechanics, inventory, and farming).
*   **Asset Support**: Time Fantasy 1st OCC Winner Pack & Vol. 2.
*   **Architecture**: Modular C# system with ScriptableObjects for Creature and Combat logic, integrated with The Farming Engine's item/character systems.
*   **Add-ons**:
    *   **Dialogue System for Unity**: For branching narrative and NPC interactions.
    *   **Unity UI Toolkit**: For the tactical battle interface.

---
*Drafted by Antigravity on 2026-02-16*
