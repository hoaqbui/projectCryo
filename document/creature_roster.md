# Creature Roster: Flat Database View

This document provides a **single, flat, giant table** view of the **Project Cryo Creature Database**.

> [!IMPORTANT]
> **Source of Truth**: The definitive data is maintained in [CreatureDatabase.json](file:///c:/Users/hoaqb/OneDrive/Documents/personal_dev/projectCryo/code/data/CreatureDatabase.json).

## Master Flat Roster

| ID | Name | Type | Role | HP | ATK | DEF | MAG | MDEF | AGI | LUK | Action | Passive | Reaction | Ultimate |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| CR-001 | **Glimmer-Bat** | Air | Scout | 45 | 30 | 20 | 50 | 40 | 85 | 40 | Sonic Pulse | **Sonar**: Never misses. | **Flutter**: Buffs AGI. | Blindwave |
| CR-002 | **Slag-Slime** | Fire | Tank | 120 | 25 | 60 | 40 | 50 | 20 | 25 | Magma Spit | **Molten**: Reflects phys. | **Splatter**: Slows. | Eruption |
| CR-003 | **Frost-Wolf** | Ice | Attacker | 75 | 55 | 35 | 40 | 30 | 70 | 30 | Chill Bite | **Pack Hunt**: +ATK near ally. | **Frostbite**: Chills. | Winter Howl |
| CR-004 | **Mud-Golem** | Earth | Tank | 150 | 40 | 80 | 10 | 20 | 15 | 10 | Rock Throw | **Unstoppable**: Immune CC. | **Harden**: +DEF. | Earthwall |
| CR-005 | **Spark-Cat** | Elect | Assassin | 50 | 75 | 25 | 60 | 30 | 90 | 50 | Zap Leap | **Static**: +Crit on move. | **Zap**: Minor dmg. | Thunder Rain |
| CR-006 | **Vine-Snake** | Grass | CC | 65 | 35 | 45 | 55 | 50 | 55 | 20 | Entangle | **Regrow**: 5% Heal. | **Thorny**: Bleeds. | Bloom Stun |
| CR-007 | **Iron-Knave** | Steel | Balanced | 90 | 50 | 65 | 30 | 45 | 45 | 15 | Heavy Strike | **Chivalry**: Protects. | **Block**: -25% dmg. | Fortress |
| CR-008 | **Ember-Sprite** | Fire | Mage | 40 | 20 | 20 | 85 | 65 | 60 | 60 | Fireball | **Fanned Flame**: +MAG kill. | **Heat up**: +MAG hit. | Supernova |
| CR-009 | **Wave-Ray** | Water | Balanced | 80 | 45 | 50 | 55 | 55 | 65 | 35 | Water Jet | **Fluid**: +1 Move. | **Wash**: Cleanse. | Tidal Surge |
| CR-010 | **Static-Rat** | Elect | Swarm | 35 | 40 | 15 | 30 | 10 | 80 | 10 | Nibble | **Horde**: +AGI/ally. | **Scurry**: Moves away. | Overcharge |
| CR-011 | **Pebble-Spirit** | Earth | Scout | 55 | 25 | 40 | 20 | 30 | 40 | 80 | Dust Cloud | **Lucky Find**: +1 Action. | **Dust Cloud**: Blind. | Quake Pulse |
| CR-012 | **Mist-Weaver** | Air | Support | 70 | 35 | 30 | 70 | 75 | 75 | 45 | Healing Mist | **Soothing**: 10% Heal+ | **Vanish**: Invulnerable. | Wind Shield |
| CR-013 | **Ghost-Flambé** | Ghost | Debuff | 60 | 20 | 40 | 75 | 80 | 50 | 70 | Spooky Burn | **Haunt**: Lower LUK. | **Phase**: 30% Miss. | Nightmare |
| CR-014 | **Deep-Claw** | Water | Attacker | 100 | 65 | 55 | 25 | 30 | 40 | 25 | Crab Crush | **Crush**: Ignore 20% DEF. | **Pincers**: Root. | Barrier Snap |
| CR-015 | **Sun-Lizard** | Fire | Balanced | 85 | 55 | 45 | 45 | 40 | 55 | 55 | Flare Sneeze | **Solar**: Meter+ | **Flash**: Lower Hit. | Sol Ray |
| CR-016 | **Bramble-Boar** | Grass | Bruiser | 110 | 60 | 50 | 20 | 25 | 35 | 15 | Gore | **Fury**: +ATK on dmg. | **Rebound**: Knockback. | Thorn Patch |
| CR-017 | **Drift-Jelly** | Ice | CC | 70 | 30 | 60 | 65 | 70 | 30 | 45 | Numbing Touch | **Gelatin**: -20% Phys. | **Nudge**: Swap Pos. | Absolute Zero |
| CR-018 | **Shadow-Stalker** | Dark | Assassin | 45 | 85 | 15 | 40 | 20 | 95 | 30 | Backstab | **Backstab**: +Crit rear. | **Smoke**: Teleport. | Void Strike |
| CR-019 | **Light-Construct** | Light | Balanced | 80 | 60 | 45 | 65 | 65 | 50 | 50 | Prism Beam | **Purity**: Debuff Immune. | **Shield**: 50 HP bubble. | Holy Nova |
| CR-020 | **Ancient-Sentinal** | Steel | Boss/Tank | 250 | 90 | 120 | 80 | 100 | 10 | 100 | Beam Lock | **Eternal**: Revive 1 HP. | **Stare**: Petrify. | Judgement |

---
*Query: Database.Flatten() -> Success.*
