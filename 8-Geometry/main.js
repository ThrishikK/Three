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

const cube = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5), material);

cube.position.x = -4;

const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), material);

sphere.position.x = -2;

const cylinder = new THREE.Mesh(
  new THREE.CylinderGeometry(1, 1, 2, 32),
  material,
);

cylinder.position.x = 0;

const cone = new THREE.Mesh(new THREE.ConeGeometry(1, 2, 32), material);

cone.position.x = 2;

const torus = new THREE.Mesh(new THREE.TorusGeometry(1, 0.3, 16, 32), material);

torus.position.x = 4;

scene.add(cube);
scene.add(sphere);
scene.add(cylinder);
scene.add(cone);
scene.add(torus);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Camera
camera.position.z = 5;

// Render
renderer.render(scene, camera);
