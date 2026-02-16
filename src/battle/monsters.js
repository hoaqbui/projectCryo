export const MonsterData = [
    {
        id: 'cryo-001',
        name: 'Glaciara',
        type: 'Ice',
        stats: { hp: 120, speed: 45, attack: 15, defense: 20 },
        autoAttack: { name: 'Frost Nip', power: 10, type: 'magic' },
        passive: { name: 'Thick Frost', effect: 'defense_boost', value: 5 },
        ultimate: { name: 'Blizzard Storm', power: 50, cooldown: 30, control: 'A' }
    },
    {
        id: 'cryo-002',
        name: 'Flareonix',
        type: 'Fire',
        stats: { hp: 100, speed: 65, attack: 25, defense: 10 },
        autoAttack: { name: 'Ember Bolt', power: 12, type: 'magic' },
        passive: { name: 'Heat Aura', effect: 'burn_nearby', value: 2 },
        ultimate: { name: 'Inferno Dive', power: 60, cooldown: 25, control: 'X' }
    },
    {
        id: 'cryo-003',
        name: 'Terrasaur',
        type: 'Earth',
        stats: { hp: 180, speed: 25, attack: 10, defense: 40 },
        autoAttack: { name: 'Rock Smash', power: 15, type: 'physical' },
        passive: { name: 'Stone Skin', effect: 'damage_reduction', value: 0.1 },
        ultimate: { name: 'Quake Smash', power: 45, cooldown: 40, control: 'Y' }
    }
    // ... scaling to 50 monsters in future iterations
];
