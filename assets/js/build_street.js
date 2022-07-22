
function oneOnSide(side){
    if(side == "a"){
        if(getRandomInt(2) == 1){
            return [4.5,2.8];
        }else{
            return [4.5,-2.8];
        }
    }else if(side == "b"){
        if(getRandomInt(2) == 1){
            return [-4.5,2.8];
        }else{
            return [-4.5,-2.8];
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }



function generateStreet (){
    for(let i = 1; i <=10; i++){
        let el = document.createElement('a-entity');
        el.setAttribute('id', 'storeleft'+i);
        el.setAttribute('mixin', 'area');
        let shift = 10 - i*8;
        el.setAttribute('position', '11 0 '+String(shift));
        el.setAttribute('rotation', '0 -90 0');
        document.querySelector('a-scene').appendChild(el);

            

            ['roof_','floorfirst_','door_','name_','floorsecond_'].forEach(item => {
                let el2 = document.createElement('a-entity');
                el2.setAttribute('gltf-model', 'src: url(assets/models/shop_assets/'+item+getRandomInt(5)+'.glb);');
                el2.setAttribute('set-color', '');
                el2.setAttribute('envmap', '');
                document.getElementById('storeleft'+i).appendChild(el2);
            });
            ['umbrella_'].forEach(item => {
                let el2 = document.createElement('a-entity');
                el2.setAttribute('gltf-model', 'src: url(assets/models/shop_assets/'+item+getRandomInt(4)+'.glb);');
                el2.setAttribute('envmap', '');
                document.getElementById('storeleft'+i).appendChild(el2);
            });
            ['midwall_'].forEach(item => {
                let el2 = document.createElement('a-entity');
                el2.setAttribute('gltf-model', 'src: url(assets/models/shop_assets/'+item+getRandomInt(3)+'.glb);');
                el2.setAttribute('envmap', '');
                document.getElementById('storeleft'+i).appendChild(el2);
            });
            
            // let el3 = document.createElement('a-entity');
            //     el3.setAttribute('gltf-part', 'src: #store_assets; part:cover');
            //     document.getElementById('storeleft'+i).appendChild(el3);
            // let el4 = document.createElement('a-entity');
            //     el4.setAttribute('id', 'label_'+i);
            //     // el4.setAttribute('geometry', 'primitive: box');
            //     el4.setAttribute('gltf-part', 'src: #store_assets; part:label');
            //     // el4.setAttribute('gltf-model', 'src: url(assets/models/label.glb);');
            //     el4.setAttribute('position', '0 1.6 0.5');
            //     el4.setAttribute('look-at', '[camera]');
            //     el4.setAttribute('material', 'visible: false;');
            //     el4.setAttribute('mixin', 'vis');
            //     document.getElementById('storeleft'+i).appendChild(el4);
                
        
    }
    for(let i = 1; i <=10; i++){
        let el = document.createElement('a-entity');
        el.setAttribute('id', 'storeright'+i);
        el.setAttribute('mixin', 'area');
        let shift = 10 - i*8;
        el.setAttribute('position', '-11 0 '+String(shift));
        el.setAttribute('rotation', '0 90 0');
        document.querySelector('a-scene').appendChild(el);
            ['roof_','floorfirst_','door_','name_','floorsecond_'].forEach(item => {
                let el2 = document.createElement('a-entity');
                el2.setAttribute('gltf-model', 'src: url(assets/models/shop_assets/'+item+getRandomInt(5)+'.glb);');
                el2.setAttribute('set-color', '');
                el2.setAttribute('envmap', '');
                document.getElementById('storeright'+i).appendChild(el2);
            });
            ['umbrella_'].forEach(item => {
                let el2 = document.createElement('a-entity');
                el2.setAttribute('gltf-model', 'src: url(assets/models/shop_assets/'+item+getRandomInt(4)+'.glb);');
                el2.setAttribute('envmap', '');
                document.getElementById('storeright'+i).appendChild(el2);
            });
            ['midwall_'].forEach(item => {
                let el2 = document.createElement('a-entity');
                el2.setAttribute('gltf-model', 'src: url(assets/models/shop_assets/'+item+getRandomInt(3)+'.glb);');
                el2.setAttribute('envmap', '');
                document.getElementById('storeright'+i).appendChild(el2);
            });


            // let el3 = document.createElement('a-entity');
            //     el3.setAttribute('gltf-part', 'src: #store_assets; part:cover');
            //     document.getElementById('storeright'+i).appendChild(el3);
            //     let el4 = document.createElement('a-entity');
            //     el4.setAttribute('id', 'label_'+i);
            //     // el4.setAttribute('geometry', 'primitive: box');
            //     el4.setAttribute('gltf-part', 'src: #store_assets; part:label');
            //     // el4.setAttribute('gltf-model', 'src: url(assets/models/label.glb);');
            //     el4.setAttribute('position', '0 1.6 0.5');
            //     el4.setAttribute('look-at', '[camera]');
            //     el4.setAttribute('material', 'visible: false;');
            //     el4.setAttribute('mixin', 'vis');
            //     document.getElementById('storeright'+i).appendChild(el4);

    }
    for(let i = 1; i <=10; i++){
        let el = document.createElement('a-entity');
        // el.setAttribute('id', 'storeright'+i);
        let shift = 10 - i*8;
        el.setAttribute('position', '0 0.01 '+String(shift));
        el.setAttribute('gltf-model', 'src: url(assets/models/street_assets/street_'+getRandomInt(8)+'.glb);');
        el.setAttribute('envmap', '');
        document.querySelector('a-scene').appendChild(el);
        [oneOnSide('a'),oneOnSide('b')].forEach(item => {
            let el2 = document.createElement('a-entity');
            el2.setAttribute('position', String(item[0])+' 0.01 '+String(shift + item[1]));
            el2.setAttribute('gltf-model', 'src: url(assets/models/street_assets/street_el_'+getRandomInt(4)+'.glb);');
            el2.setAttribute('envmap', '');
            document.querySelector('a-scene').appendChild(el2);
        });
    }
    let shift = 0;
    //add start crossroad
    // let el_st = document.createElement('a-entity');
    // shift = 6 + 20;
    // el_st.setAttribute('position', '0 0.01 '+String(shift));
    // el_st.setAttribute('gltf-model', 'src: url(assets/models/street_assets/crossroad.glb);');
    // document.querySelector('a-scene').appendChild(el_st);
    //add end crossroad
    // let el_en = document.createElement('a-entity');
    // shift = 6 - 20 - 10*8;
    // el_en.setAttribute('position', '0 0.01 '+String(shift));
    // el_en.setAttribute('gltf-model', 'src: url(assets/models/street_assets/crossroad.glb);');
    // document.querySelector('a-scene').appendChild(el_en);
  }
  generateStreet ();



