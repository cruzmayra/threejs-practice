var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

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

var geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 3;

var targetRotationY = 0;
var targetRotationX = 0;

var animate = function () {
  requestAnimationFrame( animate );

  
  render()
};

const render = () => {
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  cube.rotation.y += ( targetRotationY - cube.rotation.y ) * 0.05;
  // cube.rotation.x += ( targetRotationX - cube.rotation.x ) * 0.03;
  renderer.render( scene, camera );  
}

const handleMinutes = (e) => {
  if(e.keyCode === 37) {
    targetRotationY += 10;
    // targetRotationX += 2;
  } else {
    return
  }
}

animate();

window.addEventListener('keydown', handleMinutes)
