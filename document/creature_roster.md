# Creature Roster Database View

This document provides a human-readable view of the **Project Cryo Creature Database**. 

> [!IMPORTANT]
> **Source of Truth**: The definitive data is maintained in the programmatic database file: [CreatureDatabase.json](file:///c:/Users/hoaqb/OneDrive/Documents/personal_dev/projectCryo/code/data/CreatureDatabase.json). Any changes to stats or abilities should be made in the JSON source first.

## 1. Unit Listing (MVP - 20 Units)

| ID | Creature | Type | Role | HP | ATK | DEF | MAG | MDEF | AGI | LUK | Primary Action |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| CR-001 | **Glimmer-Bat** | Air | Scout | 45 | 30 | 20 | 50 | 40 | 85 | 40 | Sonic Pulse |
| CR-002 | **Slag-Slime** | Fire | Tank | 120 | 25 | 60 | 40 | 50 | 20 | 25 | Magma Spit |
| CR-003 | **Frost-Wolf** | Ice | Attacker | 75 | 55 | 35 | 40 | 30 | 70 | 30 | Chill Bite |
| CR-004 | **Mud-Golem** | Earth | Tank | 150 | 40 | 80 | 10 | 20 | 15 | 10 | Rock Throw |
| CR-005 | **Spark-Cat** | Elect | Assassin | 50 | 75 | 25 | 60 | 30 | 90 | 50 | Zap Leap |
| CR-006 | **Vine-Snake** | Grass | CC | 65 | 35 | 45 | 55 | 50 | 55 | 20 | Entangle |
| CR-007 | **Iron-Knave** | Steel | Balanced | 90 | 50 | 65 | 30 | 45 | 45 | 15 | Heavy Strike |
| CR-008 | **Ember-Sprite** | Fire | Mage | 40 | 20 | 20 | 85 | 65 | 60 | 60 | Fireball |
| CR-009 | **Wave-Ray** | Water | Balanced | 80 | 45 | 50 | 55 | 55 | 65 | 35 | Water Jet |
| CR-010 | **Static-Rat** | Elect | Swarm | 35 | 40 | 15 | 30 | 10 | 80 | 10 | Nibble |
| CR-011 | **Pebble-Spirit** | Earth | Scout | 55 | 25 | 40 | 20 | 30 | 40 | 80 | Dust Cloud |
| CR-012 | **Mist-Weaver** | Air | Support | 70 | 35 | 30 | 70 | 75 | 75 | 45 | Healing Mist |
| CR-013 | **Ghost-Flambé** | Ghost | Debuff | 60 | 20 | 40 | 75 | 80 | 50 | 70 | Spooky Burn |
| CR-014 | **Deep-Claw** | Water | Attacker | 100 | 65 | 55 | 25 | 30 | 40 | 25 | Crab Crush |
| CR-015 | **Sun-Lizard** | Fire | Balanced | 85 | 55 | 45 | 45 | 40 | 55 | 55 | Flare Sneeze |
| CR-016 | **Bramble-Boar** | Grass | Bruiser | 110 | 60 | 50 | 20 | 25 | 35 | 15 | Gore |
| CR-017 | **Drift-Jelly** | Ice | CC | 70 | 30 | 60 | 65 | 70 | 30 | 45 | Numbing Touch |
| CR-018 | **Shadow-Stalker** | Dark | Assassin | 45 | 85 | 15 | 40 | 20 | 95 | 30 | Backstab |
| CR-019 | **Light-Construct** | Light | Balanced | 80 | 60 | 45 | 65 | 65 | 50 | 50 | Prism Beam |
| CR-020 | **Ancient-Sentinal** | Steel | Boss/Tank | 250 | 90 | 120 | 80 | 100 | 10 | 100 | Beam Lock |

## 2. Ability Matrix

| ID | Passive Ability | Reaction Ability | Ultimate Ability |
|:---|:---|:---|:---|
| CR-001 | **Sonar**: Never misses. | **Flutter**: Buffs AGI when hit. | Blindwave |
| CR-002 | **Molten**: Reflects physical. | **Splatter**: Slows attacker. | Eruption |
| CR-003 | **Pack Hunt**: +ATK near ally. | **Frostbite**: Chills on contact. | Winter Howl |
| CR-004 | **Unstoppable**: Immune to CC. | **Harden**: +DEF when hit. | Earthwall |
| CR-005 | **Static**: +Crit on move. | **Zap**: Minor damage to hitter. | Thunder Rain |
| CR-006 | **Regrow**: Heals 5% per turn. | **Thorny**: Bleeds attacker. | Bloom Stun |
| CR-007 | **Chivalry**: Protects low-HP. | **Block**: 25% dmg reduction. | Fortress |
| CR-008 | **Fanned Flame**: +MAG on kill. | **Heat up**: Buffs MAG when hit. | Supernova |
| CR-009 | **Fluid**: Moves +1 tile. | **Wash**: Cleanses debuffs. | Tidal Surge |
| CR-010 | **Horde**: +AGI per active ally. | **Scurry**: Moves 1 tile away. | Overcharge |
| CR-011 | **Lucky Find**: +1 Action slot. | **Dust Cloud**: Blinds hitter. | Quake Pulse |
| CR-012 | **Soothing**: Allies heal +10%. | **Vanish**: Goes invulnerable. | Wind Shield |
| CR-013 | **Haunt**: Lowers enemy LUK. | **Phase**: 30% miss chance. | Nightmare |
| CR-014 | **Crush**: Ignores 20% DEF. | **Pincers**: Roots the target. | Barrier Snap |
| CR-015 | **Solar**: Meter fills faster. | **Flash**: Lowers hit accuracy. | Sol Ray |
| CR-016 | **Fury**: +ATK on losing HP. | **Rebound**: Small knockback. | Thorn Patch |
| CR-017 | **Gelatin**: -20% phys dmg. | **Nudge**: Swaps pos with unit. | Absolute Zero |
| CR-018 | **Backstab**: +Crit from rear. | **Smoke**: Teleports to safety. | Void Strike |
| CR-019 | **Purity**: Immune to debuffs. | **Shield**: Gives 50 HP bubble. | Holy Nova |
| CR-020 | **Eternal**: Revives with 1 HP. | **Stare**: Petrifies attacker. | Judgement |

## 3. Database Schema
Technical properties for the [JSON source](file:///c:/Users/hoaqb/OneDrive/Documents/personal_dev/projectCryo/code/data/CreatureDatabase.json):

*   **id**: Unique identifier (CR-XXX).
*   **internal_name**: PascalCase name used in C#/Unreal logic.
*   **stats**: Object containing HP, ATK, DEF, MAG, MDEF, AGI, LUK.
*   **abilities**: Object capturing the Action, Passive, Reaction, and Ultimate definitions.

---
*Querying local database... Results matching vision: 100%*
