# MVP Specification: The Crossroads Encounter

This document defines the "Unit Test" scene for Project Cryo's core loop: **Map RTS -> Skirmish Transition -> Automated Resolution**.

## 1. Scene Overview: "The Crossroads"
*   **Environment**: A minimalist 3D map with two capture nodes and a single connecting road.
*   **Player Squad (Alpha)**: 
    *   Front: 1x Knight (Melee)
    *   Back: 1x Cleric (Heal)
*   **Enemy Squad (Omega)**: 
    *   Front: 2x Soldiers (Low Health)

## 2. Core Mechanics Test Loop
1.  **Command Phase**: Player selects Alpha and clicks a waypoint near Omega.
2.  **Intersection**: Alpha and Omega collide on the map.
3.  **Skirmish Shift**: Scene transitions to a 3D battleground with Mobile PBR rendering.
4.  **Auto-Resolution**: Units execute formation-specific moves.
5.  **Conclusion**: Omega is defeated; Alpha gains EXP and returns to the Map.

---

## 3. Gherkin Validations (Behavioral Specs)

### Scenario 1: Squad RTS Movement
```gherkin
Feature: Map Navigation
  Scenario: Squad reaches target waypoint
    Given the Player has a Squad selected at "Node A"
    When the Player clicks on "Node B"
    Then the Squad should pathfind toward "Node B" using the Map Subsystem
    And the Squad should stop moving when its distance to "Node B" is < 50 units
```

### Scenario 2: Encounter Trigger
```gherkin
Feature: Skirmish Initiation
  Scenario: Collision triggers combat
    Given Player Squad "Alpha" is moving toward Enemy Squad "Omega"
    When the distance between "Alpha" and "Omega" is less than 100 units
    Then the Skirmish Subsystem should freeze Map time
    And the Skirmish Subsystem should load the "Battle Arena" scene
```

### Scenario 3: Formation-Based Combat (Front Row)
```gherkin
Feature: Automated Skirmish Logic
  Scenario: Knight attacks from Front Row
    Given a "Knight" is placed in the "Front Row"
    When the skirmish round begins
    Then the Knight should execute "Slash" on the nearest Front-Row enemy
    And an "Impact Frame" VFX should trigger on successful hit
```

### Scenario 4: Formation-Based Combat (Back Row)
```gherkin
Feature: Automated Skirmish Logic
  Scenario: Cleric heals from Back Row
    Given a "Cleric" is placed in the "Back Row"
    When the Knight has taken damage
    And it is the Cleric's turn
    Then the Cleric should execute "Heal" targeting the "Knight"
```

---

## 4. Technical Success Criteria
- [ ] **State Transition**: Map state is successfully saved and restored after battle.
- [ ] **Mobile PBR Consistency**: The "Banded" look is maintained in both Map and Skirmish views.
- [ ] **Auto-Logic**: No player input required for move selection during the 5v5 resolution.
