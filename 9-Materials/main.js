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

const material = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
});

const material1 = new THREE.MeshStandardMaterial({
  color: 0xff0000,
  roughness: 0.8,
  metalness: 0,
});

const material2 = new THREE.MeshStandardMaterial({
  color: 0x888888,
  roughness: 0.5,
  metalness: 0.75,
});

const sphere1 = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), material1);

const sphere2 = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), material2);

sphere1.position.x = -2;
sphere2.position.x = 2;

scene.add(sphere1);
scene.add(sphere2);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Camera
camera.position.z = 5;

// Render
renderer.render(scene, camera);
