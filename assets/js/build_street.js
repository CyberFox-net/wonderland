function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function generateStreet (){
    for(let i = 1; i <=10; i++){
        let el = document.createElement('a-entity');
        el.setAttribute('id', 'storeleft'+i);
        el.setAttribute('mixin', 'area');
        let shift = 10 - i*6.6;
        el.setAttribute('position', '7 0 '+String(shift));
        el.setAttribute('rotation', '0 -90 0');
        document.querySelector('a-scene').appendChild(el);

            

            ['top_','mid_','door_','second_','bot_'].forEach(item => {
                let el2 = document.createElement('a-entity');
                el2.setAttribute('gltf-part', 'src: #store_assets; part:'+item+getRandomInt(3));
                el2.setAttribute('static-body', '');
                el2.setAttribute('material', 'color: '+getRandomColor());
                document.getElementById('storeleft'+i).appendChild(el2);
            });
            
            let el3 = document.createElement('a-entity');
                el3.setAttribute('gltf-part', 'src: #store_assets; part:cover');
                document.getElementById('storeleft'+i).appendChild(el3);
            let el4 = document.createElement('a-entity');
                el4.setAttribute('id', 'label_'+i);
                // el4.setAttribute('geometry', 'primitive: box');
                el4.setAttribute('gltf-part', 'src: #store_assets; part:label');
                // el4.setAttribute('gltf-model', 'src: url(assets/models/label.glb);');
                el4.setAttribute('position', '0 1.6 0.5');
                el4.setAttribute('look-at', '[camera]');
                el4.setAttribute('material', 'visible: false;');
                el4.setAttribute('mixin', 'vis');
                document.getElementById('storeleft'+i).appendChild(el4);
            if(getRandomInt(3) == 2){
                let seat = document.createElement('a-entity');
                seat.setAttribute('gltf-model', '#seating');
                seat.setAttribute('position', '0 0 3');
                document.getElementById('storeleft'+i).appendChild(seat);
            }
                
        
    }
    for(let i = 1; i <=10; i++){
        let el = document.createElement('a-entity');
        el.setAttribute('id', 'storeright'+i);
        el.setAttribute('mixin', 'area');
        let shift = 10 - i*6.6;
        el.setAttribute('position', '-7 0 '+String(shift));
        el.setAttribute('rotation', '0 90 0');
        document.querySelector('a-scene').appendChild(el);
            ['top_','mid_','door_','second_','bot_',].forEach(item => {
                let el2 = document.createElement('a-entity');
                el2.setAttribute('gltf-part', 'src: #store_assets; part:'+item+getRandomInt(3));
                el2.setAttribute('material', 'color: '+getRandomColor());
                document.getElementById('storeright'+i).appendChild(el2);
            });
            let el3 = document.createElement('a-entity');
                el3.setAttribute('gltf-part', 'src: #store_assets; part:cover');
                document.getElementById('storeright'+i).appendChild(el3);
                let el4 = document.createElement('a-entity');
                el4.setAttribute('id', 'label_'+i);
                // el4.setAttribute('geometry', 'primitive: box');
                el4.setAttribute('gltf-part', 'src: #store_assets; part:label');
                // el4.setAttribute('gltf-model', 'src: url(assets/models/label.glb);');
                el4.setAttribute('position', '0 1.6 0.5');
                el4.setAttribute('look-at', '[camera]');
                el4.setAttribute('material', 'visible: false;');
                el4.setAttribute('mixin', 'vis');
                document.getElementById('storeright'+i).appendChild(el4);
            if(getRandomInt(3) == 2){
                let seat = document.createElement('a-entity');
                seat.setAttribute('gltf-model', '#seating');
                seat.setAttribute('position', '0 0 3');
                document.getElementById('storeright'+i).appendChild(seat);
            }
    }
    for(let i = 1; i <=10; i++){
        let el = document.createElement('a-entity');
        el.setAttribute('id', 'storeright'+i);
        let shift = 10 - i*6.6;
        el.setAttribute('position', '0 0.01 '+String(shift));
        // el.setAttribute('rotation', '0 90 0');
        el.setAttribute('gltf-part', 'src: #store_assets; part: road_'+getRandomInt(3));
        document.querySelector('a-scene').appendChild(el);
    }
  }
  generateStreet ();

