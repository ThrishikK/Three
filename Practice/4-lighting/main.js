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

// Cube
const geometry = new THREE.BoxGeometry(2, 2, 2);

const material = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
});

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

// Ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 3.8);

scene.add(ambientLight);

// Camera
camera.position.z = 5;

// Render
renderer.render(scene, camera);
