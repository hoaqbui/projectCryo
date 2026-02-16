"projectCryo" is a creature-collection RPG built in **Unity**. It features a cozy **Stardew Valley-inspired world** (leveraging **The Farming Engine**) and a tactical **Side-View Arena**. The core gameplay revolves around an **Active Tactical Battle (ATB)** system with automated basic actions and manual player-triggered "Ultimates."

## 2. Core Gameplay Loop
1.  **Explore**: Traverse a cozy, grid-based world (Stardew style) to discover monsters.
2.  **Prepare**: Manage your team of up to 3 active monsters and their equipment.
3.  **Battle**: Transition into a separate **2D tactical arena** for real-time-with-pause 3v3 skirmishes.
4.  **Challenge**: Defeat regional **Gym Leaders** in high-stakes 2D tactical battles.
5.  **Optimize**: Refine logic chains based on battle performance.

## 3. Key Mechanic: Battle System
*   **3v3 On-Field**: Three monsters are active at once, each performing automated basic actions.
*   **Active Time Battle (ATB)**: Each monster has a speed-based charge bar. When full, it executes an auto-attack.
*   **Manual Overdrive & Ultimates**: Players trigger powerful **Manual Ultimates** using physical or virtual controls.

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
*   **Architecture**: Modular C# system with ScriptableObjects for ATB and Monster logic, integrated with The Farming Engine's item/character systems.
*   **Add-ons**:
    *   **Dialogue System for Unity**: For branching narrative and NPC interactions.
    *   **Unity UI Toolkit**: For the tactical battle interface.

---
*Drafted by Antigravity on 2026-02-16*
