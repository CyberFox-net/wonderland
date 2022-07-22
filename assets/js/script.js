var envMap;

// var texture = new THREE.TextureLoader().load(
//   "assets/hdri/studio_light.png");
// var targetCube = new THREE.WebGLRenderTargetCube(256, 256);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('a-scene').addEventListener('loaded', () => {
        document.querySelector('.preloader').setAttribute('hidden', true)
        // console.log(document.querySelector('a-scene').renderer);
        var pmremGenerator = new THREE.PMREMGenerator(document.querySelector('a-scene').renderer);
        new THREE.RGBELoader()
          .load('./assets/hdri/piazza_bologni_2k.hdr', function (texture) {
      
            envMap = pmremGenerator.fromEquirectangular(texture).texture;
      
            texture.dispose();
            pmremGenerator.dispose();
            generateStreet ();
          });
    })
})
function random(number){
  return Math.floor(Math.random()*number);;
}
function randomColor(){
  return {r: random(255)/256, g: random(255)/256, b:random(255)/256}
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16)/256,
    g: parseInt(result[2], 16)/256,
    b: parseInt(result[3], 16)/256
  } : null;
}

function randomColorFromList(){
  // ['#63B79D','#7AB3DE','#FFC4AB','#F8E6FF','#5C3748','#E5CDC4'];
  let color_list = ['#63B79D','#7AB3DE','#FFC4AB','#F8E6FF','#5C3748','#E5CDC4'];
  return color_list[random(5)]
}

// AFRAME.registerComponent('person-events-component', {
//     init() {
//         this.resetAnim();
//         this.el.addEventListener('areaEnter', () => {
//             this.startAnim();
//         })
//         this.el.addEventListener('areaLeave', () => {
//             this.resetAnim();
//         })
//     },
//     startAnim() {
//         this.el.setAttribute('animation-mixer', 'clip:*;')
//     },
//     resetAnim() {
//         this.el.setAttribute('animation-mixer', 'clip:none;')
//     }
// });

AFRAME.registerComponent("envmap", {
    init: function() {
      
      // console.log(this);
      var renderer = this.el.sceneEl.renderer;

      this.el.addEventListener("model-loaded", e => {
        let mesh = this.el.getObject3D("mesh");

        // var cubeTex = targetCube.fromEquirectangularTexture(renderer, texture);
            mesh.traverse(function(el) {
              if (el.material) {
                // console.log(el.material.name);
                // el.material.envMap = cubeTex.texture;
                el.material.envMap = envMap;
                el.material.envMap.intensity = 0.75;
                if (el.material.alphaMap) el.material.alphaMap.magFilter = THREE.NearestFilter;
                el.material.alphaTest = 0.5
                if (el.material.map) el.material.map.anisotropy = 4;
                el.material.needsUpdate = true;
              }
            });
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.outputEncoding = THREE.sRGBEncoding;
      });
    }
  });

  
AFRAME.registerComponent('set-color', {
    schema: {
      color: {default: 'red'}
    },
  
    init: function () {
      this.el.addEventListener("model-loaded", e => {
          console.log(hexToRgb(this.data.color));

        let mesh = this.el.getObject3D("mesh");
        // console.log(mesh.children[0].children[0].material.name);
        if(mesh.children[0].children[0] && mesh.children[0].children[0].material.name[0] != "n"){
          // console.log(mesh.children[0].children[0].material.name);
        mesh.children[0].children[0].material.color = hexToRgb(this.data.color);
        mesh.children[0].children[0].material.needsUpdate = true;
        }else{
          // console.log(mesh.children[0].material.name);
        mesh.children[0].material.color = hexToRgb(this.data.color);
        mesh.children[0].material.needsUpdate = true;
        }
        
        //   mesh.traverse(function(el) {
        //   if (el.material) {
        //     el.material.color = this.data.color;
        //     el.material.needsUpdate = true;
        //   }
        // });
      });
      
    }
});  

 
  