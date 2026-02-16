# Technical Design Document: Project Cryo

**Version:** 2.0 (Pivot)
**Date:** 2026-02-16
**Status:** Draft

## 1. Executive Summary
Project Cryo is a "Stardew Valley x Pokemon" style RPG. This document outlines the technical architecture for a modular **Active Time Battle (ATB)** system, a universal data schema for creature collection, and a cross-platform deployment strategy.

## 2. System Architecture
The project follows a **Component-Based Architecture** ensuring gameplay logic remains separate from rendering and platform-specific code.

### 2.1 Core Modules
- **ATB Manager**: Handles real-time combat ticks, action queuing, and speed-based turn order.
- **Creature Registry**: Manages monster stats, types, passives, and experience curves.
- **Interaction Engine**: Handles map-based actions like harvesting and pre-emptive strikes.

## 3. Data Schema
Data is stored in engine-agnostic JSON formats.

### 3.1 Monster Schema
```json
{
  "id": 1,
  "name": "Glaciara",
  "type": ["Ice"],
  "stats": { "hp": 120, "atk": 15, "def": 20, "agi": 45 },
  "size": 2,
  "passive": "Frost_Aura",
  "actions": {
    "auto": "Ice_Shard",
    "ultimate": "Blizzard_Storm"
  }
}
```

## 4. Battle System Logic (ATB)
The combat engine uses a continuous **Tick-Based System**.

### 4.1 The ATB Loop
1.  **Tick Update**: Each active creature increments an internal `atb` counter based on its `agi` (Agility).
2.  **Gate Check**: When a creature reaches the ATB threshold:
    *   **Pause**: decision making.
3.  **Execution**: Animations and damage calculations are processed.
4.  **Reset**: The acting creature's `atb` is reset, and ticks resume.
