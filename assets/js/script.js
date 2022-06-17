document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('a-scene').addEventListener('loaded', () => {
        document.querySelector('.preloader').setAttribute('hidden', true)
    })
})


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
      var targetCube = new THREE.WebGLRenderTargetCube(512, 512);
      var renderer = this.el.sceneEl.renderer;

      this.el.addEventListener("model-loaded", e => {
        let mesh = this.el.getObject3D("mesh");
        
        var texture = new THREE.TextureLoader().load(
          "assets/hdri/studio_light.png",
          function() {
            var cubeTex = targetCube.fromEquirectangularTexture(renderer, texture);
            mesh.traverse(function(el) {
              if (el.material) {
                el.material.envMap = cubeTex.texture;
                el.material.envMap.intensity = 3;
                el.material.needsUpdate = true;
              }
            });
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.outputEncoding = THREE.sRGBEncoding;
          }
        );
      });
    }
  });

  
  

 
  