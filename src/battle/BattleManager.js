import * as THREE from 'three';
import { Monster } from './Monster';
import { MonsterData } from './monsters';
import { Input } from '../core/InputHandler';

export class BattleManager {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.playerTeam = [];
        this.enemyTeam = [];
        this.isRunning = false;
        this.clock = new THREE.Clock();
    }

    init() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x202020);

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 10, 15);
        this.camera.lookAt(0, 0, 0);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);

        const gridHelper = new THREE.GridHelper(20, 20);
        this.scene.add(gridHelper);

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 10, 7.5);
        this.scene.add(light);

        this.setupTeams();
        this.setupInputs();

        this.isRunning = true;
        this.animate();
    }

    setupTeams() {
        // Spawning player team (left side)
        const p1 = new Monster(MonsterData[0]);
        const p2 = new Monster(MonsterData[1]);
        const p3 = new Monster(MonsterData[2]);
        this.playerTeam = [p1, p2, p3];

        // Spawning placeholder enemy team (right side)
        const e1 = new Monster(MonsterData[0]);
        const e2 = new Monster(MonsterData[1]);
        const e3 = new Monster(MonsterData[2]);
        this.enemyTeam = [e1, e2, e3];

        // Visualization
        this.playerTeam.forEach((m, i) => this.spawnMonsterMesh(m, -5, i * 3 - 3, 0x00ff00));
        this.enemyTeam.forEach((m, i) => this.spawnMonsterMesh(m, 5, i * 3 - 3, 0xff0000));
    }

    spawnMonsterMesh(monster, x, z, color) {
        const geometry = new THREE.BoxGeometry(1, 1.5, 1);
        const material = new THREE.MeshPhongMaterial({ color });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, 0.75, z);
        this.scene.add(mesh);
        monster.mesh = mesh; // Keep reference
    }

    setupInputs() {
        // Mapping ultimates to X, Y, A, B actions
        this.playerTeam.forEach(monster => {
            if (monster.ultimate.control) {
                Input.on(monster.ultimate.control, () => {
                    monster.useUltimate();
                });
            }
        });
    }

    animate() {
        if (!this.isRunning) return;
        requestAnimationFrame(() => this.animate());

        const dt = this.clock.getDelta();

        // Update Player Team
        this.playerTeam.forEach(m => {
            m.update(dt);
            // Logic for auto-attack and cooldown management
        });

        // Update Enemy Team
        this.enemyTeam.forEach(m => {
            m.update(dt);
        });

        this.renderer.render(this.scene, this.camera);
    }

    resize() {
        if (this.camera) {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        }
    }
}
