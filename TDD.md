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
- **ATB Combat System**: A custom C# module that interfaces with the World Engine for battle transitions.
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
    public BaseStats baseStats;
    public List<ActionDefinition> autoActions;
    public ActionDefinition ultimateAction;
}
```

## 4. Battle System Logic (ATB)
The combat engine uses a continuous **Tick-Based System** updated via Unity's `FixedUpdate` or a custom Tick Manager.

### 4.1 The ATB Loop
1.  **Tick Update**: Each active creature increments an internal `atb` value based on its `agi`.
2.  **Gate Check**: When `atb >= Threshold`:
    *   **State Machine**: Transition to "Decision" state.
3.  **Execution**: Trigger animations (Mecanim/Spine) and process `BattleEffect` logic.
4.  **Reset**: Action cooldowns apply, `atb` resets, and ticks resume.
