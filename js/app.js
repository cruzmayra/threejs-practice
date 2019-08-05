'use strict'

const canvas = document.querySelector('#demo')
var renderer = new THREE.WebGLRenderer({
  canvas
});

// const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

var scene = new THREE.Scene();

// renderer.setSize( window.clientWidth, window.clientHeight );
// document.body.appendChild( renderer.domElement );

// var texture = new THREE.TextureLoader().load( '../assets/1.png' );


const cuboMateriales = [
  new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load( '../assets/1.png' ) }),
  new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load( '../assets/2.png' ) }),
  new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load( '../assets/3.png' ) }),
  new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load( '../assets/4.png' ) }),
  new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load( '../assets/5.png' ) }),
  new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load( '../assets/6.png' ) })
 ];
 
 const material = new THREE.MeshFaceMaterial(cuboMateriales);

// const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
const geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );


var targetRotationY = 0;
var targetRotationX = 0;

var animate = function () {
  requestAnimationFrame( animate );

  
  render()
};

const render = () => {
  let canvas = renderer.domElement;
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  cube.rotation.y += ( targetRotationY - cube.rotation.y ) * 0.05;
  // cube.rotation.x += ( targetRotationX - cube.rotation.x ) * 0.03;
  renderer.render( scene, camera );  
}

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

const handleMinutes = (e) => {
  if(e.keyCode === 37) {
    targetRotationY += 6;
    // targetRotationX += 2;
  } else {
    return
  }
}

animate();

window.addEventListener('keydown', handleMinutes)
