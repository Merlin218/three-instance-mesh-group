import * as THREE from "three";
import { WEBGL } from "three/examples/jsm/WebGL";
import InstancedGroupMesh from "three-instanced-group-mesh";
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// To create a cube, we need a BoxGeometry. This is an object that contains all the points (vertices) and fill (faces) of the cube. We'll explore this more in the future.
const geometry = new THREE.BoxGeometry(1, 1, 1);

// In addition to the geometry, we need a material to color it.
const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// A mesh is an object that takes a geometry, and applies a material to it, which we then can insert to our scene, and move freely around.
const cube1 = new THREE.Mesh(geometry, material1);
const cube2 = new THREE.Mesh(geometry, material2);
cube1.position.set(40, 40, 0);
cube2.position.set(30, 40, 0);

const group = new THREE.Group();

group.add(cube1);
group.add(cube2);

const instanceGroup = new InstancedGroupMesh(group, 3);

scene.add(instanceGroup);

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);
