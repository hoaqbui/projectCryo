# Project Cryo: Master Context & AI Reinforcement

This document is the **primary context anchor** for any AI assistant working on Project Cryo. It summarizes the core strategic pivots and architectural decisions to ensure continuity across sessions.

## 1. Strategic Core (The "Source of Truth")
*   **The Master Pillar**: The [DesignStrategy.md](./DesignStrategy.md) is the absolute authority. Gameplay integrity (Ogre-Unicorn style) takes precedence over Art and Tech.
*   **Mobile-Only Pivot**: All PC/Console features (Lumen, RayTracing) have been removed. The target is high-end mobile (Vulkan/Metal) and mid-range mobile (ES3.1).
*   **Visual Identity**: PBR Cel-Shaded using **Static GI** and **Cascaded Shadow Maps (CSM)**. No real-time bounce lighting.

## 2. Technical Architecture
*   **Engine**: Unreal Engine 5 (Mobile Pipeline).
*   **Rendering**: Optimized PBR-Toon Materials with texture-based banding and tiled halftone masks.
*   **Validation**: Behavior is strictly governed by **Gherkin Validations** in the [MVP_Spec_Crossroads.md](./MVP_Spec_Crossroads.md).

## 3. Workspace Organization
*   **`/document`**: Contains all strategic, technical, and validation documents.
*   **`/code`**: Targeted for all UE5-related code, scripts, and asset definitions (once implementation begins).

## 4. MVP Boundary: "Crossroads Encounter"
The current focus is a minimalist "Unit Test" scene:
1.  Squad selection and pathfinding on 3D Map.
2.  Proximity-based Skirmish trigger.
3.  Transition to 5v5 Automated Resolution.
4.  Result persistence (XP/Stats) back to World state.

---
*Reinforcement provided by Antigravity v7.1*
