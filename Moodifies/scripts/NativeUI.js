const Materials = require('Materials');
const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures');
const picker = NativeUI.picker;

const button1 = Textures.get('b1');
const button2 = Textures.get('b2');
const button3 = Textures.get('b3');
const button4 = Textures.get('b4');
const button5 = Textures.get('b5');
const button6 = Textures.get('b6');

const mat1 = Materials.get('1');
const mat2 = Materials.get('2');
const mat3 = Materials.get('3');
const mat4 = Materials.get('4');
const mat5 = Materials.get('5');
const mat6 = Materials.get('6');

const rectangleObject = Scene.root.child('Device').child('Camera').child('Focal Distance').child('CanFrame').find('RectFrame')

var index = 0;
const config = {
  selectedIndex: index,
  items: [
{image_texture: button1},
{image_texture: button2},
{image_texture: button3},
{image_texture: button4},
{image_texture: button5},
{image_texture: button6},    
  ]
};
picker.configure(config);
picker.visible = true;

picker.selectedIndex.monitor().subscribe(function(e) {
    var n = e.newValue;
    switch(n){
    case 0:
        rectangleObject.material = mat1;
        break;
    case 1:
        rectangleObject.material = mat2;
        break;
    case 2:
        rectangleObject.material = mat3;
        break;
    case 3:
        rectangleObject.material = mat4;
        break;
    case 4:
        rectangleObject.material = mat5;
        break;
    case 5:
        rectangleObject.material = mat6;
        break;     
    }
});