import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";

// =========================
// Scene
// =========================

const scene = new THREE.Scene();

// =========================
// Camera
// =========================

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

camera.position.set(5, 4, 7);

camera.lookAt(0, 1.5, 0);

// =========================
// Renderer
// =========================

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.shadowMap.enabled = true;

document.body.appendChild(renderer.domElement);

// =========================
// Lights
// =========================

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);

directionalLight.position.set(5, 8, 5);

directionalLight.castShadow = true;

scene.add(directionalLight);

// =========================
// Ground
// =========================

const groundGeometry = new THREE.PlaneGeometry(20, 20);

const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x808080,
});

const ground = new THREE.Mesh(groundGeometry, groundMaterial);

ground.rotation.x = -Math.PI / 2;

ground.receiveShadow = true;

scene.add(ground);

// =========================
// Tree Group
// =========================

const tree = new THREE.Group();

// =========================
// Trunk
// =========================

const trunkGeometry = new THREE.CylinderGeometry(0.3, 0.3, 2, 16);

const trunkMaterial = new THREE.MeshStandardMaterial({
  color: 0x8b4513,
});

const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);

trunk.position.y = 1;

trunk.castShadow = true;

tree.add(trunk);

// =========================
// Leaves
// =========================

const leavesGeometry = new THREE.SphereGeometry(1.2, 32, 16);

const leavesMaterial = new THREE.MeshStandardMaterial({
  color: 0x00aa00,
});

const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);

leaves.position.y = 2.5;

leaves.castShadow = true;

tree.add(leaves);

// =========================
// Add Tree to Scene
// =========================

tree.position.set(0, 0, 0);

scene.add(tree);

// =========================
// Animation
// =========================

function animate() {
  requestAnimationFrame(animate);

  tree.rotation.y += 0.005;

  renderer.render(scene, camera);
}

animate();
