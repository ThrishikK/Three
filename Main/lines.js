import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

let points = []; // Array of points

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000010);

// Camera setup
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);

// Material for lines
const lineMaterial = new THREE.LineBasicMaterial({
  color: 0x00ffff,
  transparent: true,
  opacity: 0.6,
});

// Group for lines
const linesGroup = new THREE.Group();
scene.add(linesGroup);

// Material for glowing points
const pointMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });
let glowingPoints; // will hold Points object

// Function to generate a new point and update lines/points
function generatePoint() {
  const x = (Math.random() - 0.5) * 6;
  const y = (Math.random() - 0.5) * 6;
  const z = (Math.random() - 0.5) * 6;
  const newPoint = new THREE.Vector3(x, y, z);
  points.push(newPoint);

  // Update glowing points
  const pointGeometry = new THREE.BufferGeometry().setFromPoints(points);
  if (glowingPoints) scene.remove(glowingPoints);
  glowingPoints = new THREE.Points(pointGeometry, pointMaterial);
  scene.add(glowingPoints);

  // Add new lines connecting the new point to all previous points
  for (let i = 0; i < points.length - 1; i++) {
    const lineGeometry = new THREE.BufferGeometry().setFromPoints([
      points[i],
      newPoint,
    ]);
    const line = new THREE.Line(lineGeometry, lineMaterial);
    linesGroup.add(line);
  }
}

// Generate initial 2 points
generatePoint();
generatePoint();

// Add new points every 3 seconds until reaching 30 points
let intervalId = setInterval(() => {
  generatePoint();

  if (points.length >= 3) {
    clearInterval(intervalId);
    console.log("Reached 30 points, stopping generation.");
  }
}, 500);

// Animate the scene
function animate() {
  requestAnimationFrame(animate);

  linesGroup.rotation.x += 0.002;
  linesGroup.rotation.y += 0.003;

  if (glowingPoints) {
    glowingPoints.rotation.x += 0.002;
    glowingPoints.rotation.y += 0.003;
  }

  renderer.render(scene, camera);
}
animate();

// Handle window resizing
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
