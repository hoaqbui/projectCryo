# Design Strategy: Project Cryo

This document outlines the high-level mechanics and design philosophy for Project Cryo's tactical SRPG system.

## 1. Elemental Interaction Chart

Project Cryo features 11 elements. Interactions follow a "Strong Against" logic, dealing **1.5x damage** and receiving **0.5x damage** from the opposing type.

| Attacker \ Defender | Fire | Water | Grass | Elect | Earth | Air | Ice | Steel | Ghost | Dark | Light |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Fire** | - | L | W | - | - | - | W | W | - | - | - |
| **Water** | W | - | L | - | W | - | - | - | - | - | - |
| **Grass** | L | W | - | - | W | L | - | L | - | - | - |
| **Elect** | - | W | - | - | L | W | - | - | - | - | - |
| **Earth** | W | - | L | W | - | L | - | W | - | - | - |
| **Air** | - | - | W | L | W | - | - | - | - | - | - |
| **Ice** | L | - | W | - | W | W | - | L | - | - | - |
| **Steel** | L | - | W | - | L | - | W | - | - | - | - |
| **Ghost** | - | - | - | - | - | - | - | - | - | W | L |
| **Dark** | - | - | - | - | - | - | - | - | L | - | W |
| **Light** | - | - | - | - | - | - | - | - | W | L | - |

**Legend:**
*   **W (Weakness)**: Attacker is strong against defender (1.5x Dmg).
*   **L (Less Effective)**: Attacker is weak against defender (0.5x Dmg).
*   **-**: Neutral (1.0x Dmg).

## 2. Design Philosophy
*   **Automated Agency**: Players don't control the actions, but they control the *conditions*. Success comes from team composition, positioning, and elemental advantage.
*   **Luck as a Scaling Factor**: Luck (LUK) isn't just for crits; it's a "weighted wisdom" stat that makes creatures feel like they are learning the tactical grid.
*   **Compact Skirmishes**: The 5x5 grid ensures battles are fast-paced and every move matters. There is no "dead space."

## 3. Combat Tunables
*   **Secondary Effects**: 11% base chance for status ailments (Paralysis, Burn, Chill). This chance is modified by `LUK`.
*   **Terrain Interaction**: Specific grid tiles (Forest, Puddle, Lava) grant +10% bonuses to matching elements.
