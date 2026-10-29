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

renderer.shadowMap.enabled = true;

document.body.appendChild(renderer.domElement);

// Cube

const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);

const cubeMaterial = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
});

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

cube.position.y = 1;

cube.castShadow = true;

scene.add(cube);

// Floor

const floorGeometry = new THREE.PlaneGeometry(10, 10);

const floorMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
});

const floor = new THREE.Mesh(floorGeometry, floorMaterial);

floor.rotation.x = -Math.PI / 2;

floor.receiveShadow = true;

scene.add(floor);

// Ambient light

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);

scene.add(ambientLight);

// Directional light

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);

directionalLight.position.set(5, 5, 5);

directionalLight.castShadow = true;

scene.add(directionalLight);

// Camera

camera.position.set(5, 4, 7);

camera.lookAt(0, 0, 0);

// Render

renderer.render(scene, camera);
