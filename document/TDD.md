# Technical Design Document: Project Cryo

**Status:** Technical Specification v7.1 (Mobile-Only PBR Pivot)  
**Lead:** Antigravity  
**Validation:** Crossroads Encounter MVP [[MVP_Spec_Crossroads.md](file:///c:/Users/hoaqb/OneDrive/Documents/personal_dev/projectCryo/document/MVP_Spec_Crossroads.md)]

## 1. Technical Vision (Mobile PBR)
Project Cryo implements a **Mobile-Only PBR Cel-Shaded architecture** in **Unreal Engine 5**. The architecture is strictly optimized for **Vulkan/ES3.1** mobile APIs, delivering high-fidelity stylized visuals without the overhead of PC-centric lighting (Lumen/RayTracing).

### 1.1 Technical Outcomes
*   **Mobile PBR**: Utilize **Cascaded Shadow Maps (CSM)** and **Baked Global Illumination** as the sole lighting standard.
*   **Texture-Banded Shading**: Lightweight quantization using material-level masks and tiled-textures.
*   **Flexible Outlines**: Optimized inverted-hull outlines with device-specific toggles.

---

## 2. Architecture: Mobile Stylized Framework

| Layer | Responsibility | Primary Tech |
| :--- | :--- | :--- |
| **Map Layer** | Real-time squad movement, 3D navigation. | UWorldSubsystem / NavMesh |
| **Actor Layer** | Optimized PBR Stylized Skeletal Meshes. | USkeletalMeshComponent |
| **Battle Layer**| Mobile-optimized combat resolution. | USkirmishSubsystem / GAS |

---

## 3. Rendering Pipeline (Mobile PBR Toon)

### 3.1 Material Logic (Tiled Banding)
*   **PBR Inputs**: BaseColor, Normal, Roughness, Metallic.
*   **Quantization**: Lightweight material math to clamp light data into cel-bands.
*   **Mobile Halftone**: Tiled dot-texture overlay for transitions, avoiding screen-space post-process math.

### 3.2 Mobile Boutique Hooks
*   **Lightweight Impact Frames**: Material-based color flash instance for combat events.
*   **Static Atmospheric Tint**: Shadow-color biasing using constant parameters to simulate mood.

---

## 4. Mobile Quality Tiers
The project scales its PBR Cel-Shaded pipeline across two primary performance targets:

### 4.1 High-End Mobile (Vulkan / Metal)
*Goal: Matches modern high-end anime titles (e.g. Zenless Zone Zero).*
*   **Shading**: Full PBR with high-res **Mask Maps** (Normal, Roughness, Metallic). 
*   **Lighting**: HQ **Cascaded Shadow Maps** (4 cascades) + High-Density **Static GI Maps**.
*   **Stylization**: Advanced **Tiled Halftone** (4-way masking) + **Impact Frames** with 60fps target.
*   **Outlines**: HQ **Inverted Hull** with distance-scaling thickness.

### 4.2 Mid-Range Mobile (Vulkan / ES 3.1)
*Goal: Smooth, stylistically consistent 60fps performance.*
*   **Shading**: Simplified PBR (Banded BaseColor + Normal only). Metallic/Roughness are baked into BaseColor if needed.
*   **Lighting**: Standard CSM (2 cascades) + Med-Res **Static GI**.
*   **Stylization**: Simplified 1-mask **Halftone** transitions + Screen-Flash Impact Frames.
*   **Outlines**: Optimized **Inverted Hull** or simple **Post-Process Outlines**.

### 4.3 Lighting & Shadow Policy
| Feature | High-End | Mid-Range |
| :--- | :--- | :--- |
| **Shadow Accuracy**| Ultra/Filtered CSM | Standard/Sharp CSM |
| **PBR Reaction** | Dynamic Light/Bounce | Static Banding |
| **Texture Res** | 2048px | 1024px |
| **AA Solution** | TAA / FXAA | MSAA / Off |

---

## 5. Technical Requirements & Manifest
*   **GAS**: Gameplay spine.
*   **StateTree**: AI & Map movement.
*   **Niagara**: Mobile-optimized stylized VFX.

---
*Maintained by the Cryo Technical Board*
