//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const Materials = require('Materials');


const plane = Scene.root.find('canvas0').child('rectangle0');

const emmitter = Scene.root.find('emitter0');

// How to access class propertie

var TouchGestures = require('TouchGestures');

const material = Materials.get('material0');
const material1 = Materials.get('material1');

let val = 0;
TouchGestures.onTap(plane).subscribe(function(tap) {
    if (val == 0) {
        emmitter.material = material1;
        val++;
    }
    else {
        emmitter.material = material0;
        val--;
    }
    Diagnostics.log('Touch Event');
  
});


// How to log messages to the console (uncomment line below to activate)
Diagnostics.log('I am a console message logged from the script');
