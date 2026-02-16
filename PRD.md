## 1. Project Overview
"Mon-Tactics" is a creature-collection RPG featuring a **3v3 Active Tactical Battle System** inspired by the FF12 Gambit system. The goal is to provide an accessible interface that allows for deep tactical "programming" of your monster team.

## 2. Core Gameplay Loop
1.  **Explore**: Discover and bond with monsters in the wild.
2.  **Program (Gambits)**: Set conditional logic for each of your 3 active monsters.
3.  **Battle**: Watch your automated tactics play out in real-time-with-pause 3v3 skirmishes.
4.  **Optimize**: Refine logic chains based on battle performance.

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
*   Basic map with visible wild monsters to initiate combat.

### C. World & Exploration
*   One starting location (The Oasis) and one combat route (The Wilds).
*   Simple NPC interaction for healing and tutorial.
*   Random encounters in "tall grass" equivalents.

## 5. Technical Stack (Proposed)
*   **Engine**: HTML5 Canvas / Javascript (for web-based lightweight implementation).
*   **Architecture**: Component-based entity system for monster instances.
*   **State Management**: Centralized store for player inventory and monster stats.

---
*Drafted by Antigravity on 2026-02-15*
