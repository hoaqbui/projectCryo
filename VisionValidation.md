# Vision Validation: Project Cryo

This document uses **Gherkin (Given/When/Then)** scenarios to validate that the project adheres to its core artistic and design goals. These act as high-level "Acceptance Criteria" for the project's evolution.

## 1. Artistic Vision Validation
*Goal: Ensure the "Cozy SRPG" aesthetic remains consistent across all assets.*

### Scenario: Seasonal Palette Cohesion
**Given** the current game season is set to "Winter"  
**When** the player traverses the world map  
**Then** all environment tiles and creature follower sprites must shift to the "Cool/Desaturated" color palette defined in the Art Guide  
**And** the UI overlays should adopt a frost-themed transparency effect.

### Scenario: Creature Archetype Consistency
**Given** a new creature is added to the roster (e.g., a "Dark" type)  
**When** reviewing its pixel art portrait and battle animations  
**Then** it must utilize the 16-color "Time Fantasy" base palette  
**And** its visual design must evoke "Shadow/Mystery" rather than "Horror" to maintain the cozy RPG vibe.

---

## 2. Design Vision Validation
*Goal: Ensure the "Automated Agency" and SRPG mechanics feel rewarding.*

### Scenario: Luck-Biased Automation
**Given** a creature has a Luck (LUK) stat of 70 or higher  
**When** an automated battle turn is calculated  
**Then** the AI must prioritize "High-Reward" actions (e.g., triggering a Reaction or an Ultimate) at least 25% more frequently than a unit with Luck 10  
**And** the UI must clearly label these as "Lucky Hits" or "Tactical Insight."

### Scenario: Tactical Grid Density
**Given** a 3v3 battle starts on the 5x5 grid  
**When** all units have executed their first Move phase  
**Then** at least 60% of the active units should be within range to perform a Primary Action  
**And** there should be no "Dead Zones" where a unit cannot interact with an opponent for more than 2 consecutive turns.

### Scenario: Ultimate Impact
**Given** a creature's Ultimate Meter reaches 100%  
**When** the unit's turn starts  
**Then** the unit must execute its unique Ultimate Action regardless of standard weighted logic  
**And** the camera must zoom slightly to emphasize the high-impact nature of the ability.

---
*Maintained by the Cryo Vision Board*
