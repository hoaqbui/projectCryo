# Product Requirements Document: Project Cryo

**Version:** 7.1 (Mobile-Only PBR Pivot)  
**Status:** Strategic Alignment  
**Focus:** Premium Mobile PBR Stylized SRPG (Ogre Style)

## 1. Vision & Goals
Project Cryo is a **Premium Mobile Tactical RPG** built in **Unreal Engine 5**.

> [!IMPORTANT]
> **The Master Pillar**: The [Master Design Strategy](file:///c:/Users/hoaqb/OneDrive/Documents/personal_dev/projectCryo/DesignStrategy.md) is the absolute primary authority for this project. Gameplay depth and Ogre-style tactical integrity take precedence over all Art and Technical considerations.

The goal is to deliver a boutique strategic experience that feels native to mobile, with visuals comparable to the high-performance leaders in the store.

### 1.1 Core Objectives
*   **Mobile PBR Aesthetics**: Use optimized PBR workflows (Static GI + HQ CSM shadows) for a premium stylized look on mobile hardware.
*   **Squad-Based Strategy**: Manage multiple squads in real-time across optimized 3D maps.
*   **High-Performance Automation**: Ensure automated skirmishes run at 60fps on target mobile devices.

## 2. Target Audience
*   **Mobile Stylized Gaming Fans**: Players who appreciate high-end anime-style CGI on their mobile devices.
*   **Strategic Tacticians**: Fans of *Ogre Battle* and *Unicorn Overlord* looking for a mobile-native evolution.
*   **Performance Enthusiasts**: Players who value a smooth, visually polished mobile experience.

## 3. Key Mechanic: Formation-Driven Cinematic Battles
Combat is driven by **Squad Formation**. Characters execute role-specific moves that react to the static and dynamic lighting of the mobile battle arena.

| Row | Tactical Focus | Animation Style |
| :--- | :--- | :--- |
| **Front** | Melee / Tanking | Bold, physical impacts with optimized bounce lighting. |
| **Middle**| Support / Hybrid | Snappy, expressive movements with high-performance VFX. |
| **Back**  | Artillery / Magic | Grand, screen-filling elemental ultimates (Niagara). |

*   **Automation Note**: The **Luck (LUK)** stat biases the AI toward high-impact actions.

## 4. Visual Identity (Mobile PBR)
*   **Optimized PBR Actors**: 3D models with efficient Roughness/Metallic properties.
*   **Texture-Banded Shading**: Lightweight banding using tiled-texture masks.
*   **Mobile-First VFX**: Stylized Niagara effects optimized for Vulkan/ES3.1.

## 5. Technical Stack
*   **Engine**: Unreal Engine 5 (Mobile Pipeline).
*   **Rendering**: Optimized PBR-Toon Materials.
*   **Logic**: Real-Time Map Subsystem and Skirmish Subsystem.

## 6. MVP Milestone: "Mobile Liberation"
1.  **Map Command**: Move an optimized squad actor on the 3D map.
2.  **Mobile Clash**: Trigger a 5v5 3D skirmish using the mobile-optimized pipeline.
3.  **Victory Splash**: High-fidelity mobile victory layout.

---
*Maintained by the Cryo Strategic Art Board*
