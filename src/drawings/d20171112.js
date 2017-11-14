import * as THREE from 'three';

const d20171112 = function() {
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  const drawingContainer = document.querySelector('#drawing-container');
  drawingContainer.appendChild(renderer.domElement);

  let geometry = new THREE.BoxGeometry(1, 1, 1);
  let material = new THREE.MeshBasicMaterial({
    color: 0xff0000
  });
  let cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  material = new THREE.LineBasicMaterial({ color: 0x000ff });
  geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0, 10, 0));
  geometry.vertices.push(new THREE.Vector3(10, 0, 0));
  let line = new THREE.Line(geometry, material);
  scene.add(line);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;

    renderer.render(scene, camera);
  }
  animate();
};

export default d20171112;
