# Design Strategy: Project Cryo (Ogre Style)

This document outlines the tactical philosophy for Project Cryo's **Squad-Based Liberation** model, merging the legacy of **Ogre Battle** and **Unicorn Overlord** with **Premium Mobile PBR** aesthetics.

## 1. Genre Overview: The Ogre-Unicorn Pillar
Project Cryo follows the "Grand Strategy RPG" blueprint refined by titles like *Ogre Battle* and the modern *Unicorn Overlord*. The game is divided into two distinct but deeply connected layers:

*   **RTS Strategic Layer**: Real-time movement of multiple squads across a persistent 3D world map. Success is determined by pathing, unit stamina, and node capture timing.
*   **Automated Skirmish Layer**: When squads intersect, the game transitions to a focused 5v5 3D battle. These battles are **non-interactive during execution**; victory is determined by the player's preparation, formation, and equipment *before* the clash.

## 2. Core Game Mechanics

### 2.1 Squad Formation Grid (3x3)
Creatures are organized into squads. The **Row placement** (Front, Middle, Back) fundamentally changes their combat behavior.

| Row | Tactical Focus | Behavior Bias |
|---|---|---|
| **Front** | Melee / Defense | Acts as a shield, high priority for physical attacks. |
| **Middle**| Versatile / Short-Range | Flexible role, can cast short-range magic or melee. |
| **Back**  | Ranged / Support | Safe zone, high priority for magic, heals, and ultimates. |

### 2.2 Real-Time Map Strategy
*   **Liberation Focus**: The goal is capturing strategic nodes (Towns, Forts). Units generate passive income and healing while stationed at friendly nodes.
*   **Leader-Driven Stats**: A squad's map speed is determined by the Leader's AGI, while its vision range is determined by the Leader's INT/LUK.

## 3. MVP Alignment: "Crossroads Encounter"
The [Crossroads Encounter MVP](file:///c:/Users/hoaqb/OneDrive/Documents/personal_dev/projectCryo/document/MVP_Spec_Crossroads.md) validates these core pillars in the simplest possible scenario:

*   **Map Pillar**: Tests RTS-style pathfinding and "Intersection Logic" (triggering battle on collision).
*   **Formation Pillar**: Tests **Row-Based behavior** (e.g., Knight in Front vs. Cleric in Back).
*   **Mobile Pillar**: Validates 60fps transitions and rendering on target hardware.

---

## 4. Master Creature Roster (20 Units)
This roster is the definitive authority for unit balance and behavior in the MVP. stats are balanced for a 5x5 grid skirmish environment using the **Time Fantasy** aesthetic themes.

| # | Creature | Type | Role | HP | ATK | DEF | MAG | MDEF | AGI | LUK | Action | Passive | Reaction | Ultimate |
|---|----------|------|------|----|-----|-----|-----|------|-----|-----|--------|---------|----------|----------|
| 1 | **Glimmer-Bat** | Air | Scout | 45 | 30 | 20 | 50 | 40 | 85 | 40 | Sonic Pulse | **Sonar**: Never misses. | **Flutter**: Buffs AGI when hit. | Blindwave |
| 2 | **Slag-Slime** | Fire | Tank | 120| 25 | 60 | 40 | 50 | 20 | 25 | Magma Spit | **Molten**: Reflects physical. | **Splatter**: Slows attacker. | Eruption |
| 3 | **Frost-Wolf** | Ice | Attacker | 75 | 55 | 35 | 40 | 30 | 70 | 30 | Chill Bite | **Pack Hunt**: +ATK near ally. | **Frostbite**: Chills on contact. | Winter Howl |
| 4 | **Mud-Golem** | Earth | Tank | 150| 40 | 80 | 10 | 20 | 15 | 10 | Rock Throw | **Unstoppable**: Immune to CC. | **Harden**: +DEF when hit. | Earthwall |
| 5 | **Spark-Cat** | Elect | Assassin | 50 | 75 | 25 | 60 | 30 | 90 | 50 | Zap Leap | **Static**: +Crit on move. | **Zap**: Minor damage to hitter. | Thunder Rain |
| 6 | **Vine-Snake** | Grass | CC | 65 | 35 | 45 | 55 | 50 | 55 | 20 | Entangle | **Regrow**: Heals 5% per turn. | **Thorny**: Bleeds attacker. | Bloom Stun |
| 7 | **Iron-Knave** | Steel | Balanced | 90 | 50 | 65 | 30 | 45 | 45 | 15 | Heavy Strike | **Chivalry**: Protects low-HP. | **Block**: 25% dmg reduction. | Fortress |
| 8 | **Ember-Sprite** | Fire | Mage | 40 | 20 | 20 | 85 | 65 | 60 | 60 | Fireball | **Fanned Flame**: +MAG on kill. | **Heat up**: Buffs MAG when hit. | Supernova |
| 9 | **Wave-Ray** | Water | Balanced | 80 | 45 | 50 | 55 | 55 | 65 | 35 | Water Jet | **Fluid**: Moves +1 tile. | **Wash**: Cleanses debuffs. | Tidal Surge |
| 10| **Static-Rat** | Elect | Swarm | 35 | 40 | 15 | 30 | 10 | 80 | 10 | Nibble | **Horde**: +AGI per active ally. | **Scurry**: Moves 1 tile away. | Overcharge |
| 11| **Pebble-Spirit**| Earth | Scout | 55 | 25 | 40 | 20 | 30 | 40 | 80 | Dust Cloud | **Lucky Find**: +1 Action slot. | **Dust Cloud**: Blinds hitter. | Quake Pulse |
| 12| **Mist-Weaver** | Air | Support | 70 | 35 | 30 | 70 | 75 | 75 | 45 | Healing Mist | **Soothing**: Allies heal +10%. | **Vanish**: Goes invulnerable. | Wind Shield |
| 13| **Ghost-Flambé** | Ghost| Debuff | 60 | 20 | 40 | 75 | 80 | 50 | 70 | Spooky Burn | **Haunt**: Lowers enemy LUK. | **Phase**: 30% miss chance. | Nightmare |
| 14| **Deep-Claw** | Water | Attacker | 100| 65 | 55 | 25 | 30 | 40 | 25 | Crab Crush | **Crush**: Ignores 20% DEF. | **Pincers**: Roots the target. | Barrier Snap |
| 15| **Sun-Lizard** | Fire | Balanced | 85 | 55 | 45 | 45 | 40 | 55 | 55 | Flare Sneeze | **Solar**: Meter fills faster. | **Flash**: Lowers hit accuracy. | Sol Ray |
| 16| **Bramble-Boar** | Grass | Bruiser | 110| 60 | 50 | 20 | 25 | 35 | 15 | Gore | **Fury**: +ATK on losing HP. | **Rebound**: Small knockback. | Thorn Patch |
| 17| **Drift-Jelly** | Ice | CC | 70 | 30 | 60 | 65 | 70 | 30 | 45 | Numbing Touch| **Gelatin**: -20% phys dmg. | **Nudge**: Swaps pos with unit. | Absolute Zero |
| 18| **Shadow-Stalker**| Dark | Assassin | 45 | 85 | 15 | 40 | 20 | 95 | 30 | Backstab | **Backstab**: +Crit from rear. | **Smoke**: Teleports to safety. | Void Strike |
| 19| **Light-Construct**| Light | Balanced | 80 | 60 | 45 | 65 | 65 | 50 | 50 | Prism Beam | **Purity**: Immune to debuffs. | **Shield**: Gives 50 HP bubble. | Holy Nova |
| 20| **Ancient-Sentinal**| Steel | Boss/Tank | 250| 90 | 120| 80 | 100| 10 | 100 | Beam Lock | **Eternal**: Revives with 1 HP. | **Stare**: Petrifies attacker. | Judgement |

---

## 5. System Parameters & Tunables

### 5.1 Combat Resources
*   **Moves per Turn**: 2
*   **Actions per Turn**: 2

### 5.2 The Luck (LUK) Subsystem
*   **Reaction Triggering**: High Luck (LUK > 50) significantly increases the probability of non-guaranteed Reaction behaviors triggering (e.g., Dodge, Counter-Flash).
*   **AI Bias**: Higher LUK units are biased toward executing their "Ultimate" or high-potency secondary actions during automated skirmish resolution.

---
*Strategic Board: Antigravity*
