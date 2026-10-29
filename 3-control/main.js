import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// Create cube
const geometry = new THREE.BoxGeometry(2, 2, 2);

const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
});

const cube = new THREE.Mesh(geometry, material);

// Transform cube
cube.position.set(2, 0, 0);

cube.rotation.y = Math.PI / 4;

cube.scale.set(1.5, 1.5, 1.5);

// Add to scene
scene.add(cube);

// Camera
camera.position.z = 7;

// Render
renderer.render(scene, camera);
