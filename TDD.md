# Technical Design Document: Project Cryo

**Version:** 2.0 (Pivot)
**Date:** 2026-02-16
**Status:** Draft

## 1. Executive Summary
Project Cryo is a "Stardew Valley x Pokemon" style RPG. This document outlines the technical architecture for a modular **Active Time Battle (ATB)** system, a universal data schema for creature collection, and a cross-platform deployment strategy.

## 2. System Architecture
The project follows a **Component-Based Architecture (ECS-Lite pattern)** using Unity's built-in systems, ensuring gameplay logic remains separate from rendering.

### 2.1 Core Modules
- **World Engine**: Based on **The Farming Engine**, handling grid interactions, time, and world state.
    - *Action RPG Elements*: Leverages TFE's built-in combat, HP/Energy attributes, and XP leveling system.
    - *Follower/Pet System*: Utilizes TFE's pet behaviors (Follow, Attack, Dig) for the creature exploration phase.
- **Tactical Grid Engine**: A custom C# module managing the **5x5 battle grid**, creature positioning, and pathfinding.
- **Auto-Combat Controller**: Handles automated decision-making for creatures based on Speed, remaining Actions/Moves, and Luck bias.
- **Data Layers**: Leveraging **ScriptableObjects** for all creature and item definitions.

## 3. Data Schema (Unity ScriptableObjects)
All data is stored as `ScriptableObject` assets for easy editing in the Unity Inspector.

### 3.1 CreatureDefinition (ScriptableObject)
```csharp
[CreateAssetMenu(fileName = "NewCreature", menuName = "Cryo/Creature")]
public class CreatureDefinition : ScriptableObject {
    public string creatureName;
    public Sprite icon;
    public ElementType[] types;
    public BaseStats baseStats; // Features HP, ATK, DEF, AGI (Speed), and LUK (Luck)
    public List<ActionDefinition> autoActions; 
}
```

## 4. Battle System Logic (Tactical SRPG)
The combat engine is a **Grid-Based, Speed-Driven Auto-Battler**.

### 4.1 Turn Economy
- **Moves**: 2 moves per turn (1 tile per move).
- **Actions**: 2 actions per turn (Attack, Defend, Wait).
- **Automated AI**: Decision-making weights are biased by the **Luck** stat (e.g., higher luck increases the chance to prioritize high-damage actions or successful evasions).

### 4.2 The Combat Loop
1.  **Turn Sorting**: All 6 active creatures (3 player + 3 enemy) are sorted by `agi` (Speed).
2.  **Order Execution**:
    *   **Move Phase**: Active creature moves up to 2 steps toward target (biased by Luck/AI).
    *   **Action Phase**: Active creature performs up to 2 actions.
3.  **Round Completion**: Once all creatures have acted, re-evaluate Speed (for buffs/debuffs) and begin next Round.
