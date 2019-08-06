// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.25, 100 );

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// var size = 10;
// var divisions = 10;

// var gridHelper = new THREE.GridHelper( size, divisions );
// scene.add( gridHelper );

var container, stats, clock, gui, mixer, actions, activeAction, previousAction;
var camera, scene, renderer, model, face, cube;

const init = () => {
  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 100 );
  camera.position.set( - 5, 3, 10 );
  camera.lookAt( new THREE.Vector3( 0, 2, 0 ) );

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xe0e0e0 );
  scene.fog = new THREE.Fog( 0xe0e0e0, 20, 100 );
  clock = new THREE.Clock();

  var mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2000, 2000 ), 
  new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
  mesh.rotation.x = - Math.PI / 2;
  scene.add( mesh );

  var grid = new THREE.GridHelper( 200, 40, 0x000000, 0x000000 );
  grid.material.opacity = 0.2;
  grid.material.transparent = true;
  scene.add( grid );

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.gammaOutput = true;
  renderer.gammaFactor = 2.2;

  document.body.appendChild( renderer.domElement );

  window.addEventListener( 'resize', onWindowResize, false );
  
  var geometry = new THREE.BoxGeometry( 2, 2, 2 );
  var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

var animate = function () {
  var dt = clock.getDelta();
  // if ( mixer ) mixer.update( dt );
  requestAnimationFrame( animate );
  // cube.rotation.x += 0.01;
  renderer.render( scene, camera );
};

init ()
animate();