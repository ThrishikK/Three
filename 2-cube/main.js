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

// Geometry
const geometry = new THREE.BoxGeometry(2, 2, 2);

// Material
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
});

// Mesh
const cube = new THREE.Mesh(geometry, material);

// Add cube to scene
scene.add(cube);

// Move camera backward
camera.position.z = 5;

// Render
renderer.render(scene, camera);
