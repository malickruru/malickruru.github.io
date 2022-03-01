var Canvas = document.getElementById('canvas-wrap');
var width_canvas = Canvas.offsetWidth;
var height_canvas = Canvas.offsetHeight;

//console.log(Canvas);

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: Canvas,
    engine: engine,
    options:{
        width:width_canvas,
        height:height_canvas,
        background:'#F0E0C9',
        wireframes: false,
    }
});

// create two boxes and a ground
// var boxA = Bodies.rectangle(400, 200, 80, 80);
// var boxB = Bodies.rectangle(450, 50, 80, 80);
// var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
// Composite.add(engine.world, [boxA, boxB, ground]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

var theme = 'light';

function Changetheme(){
    if(theme == 'light'){
        theme = 'dark';
        document.body.style.setProperty('--color-one-light', '#b13126');
        document.body.style.setProperty('--color-two-light', '#F0E0C9');
        render.options.background = '#150b0e';
        document.getElementById('changetheme').innerHTML='<i class="bi bi-brightness-high"></i>';
    }else{
        theme = 'light';
        document.body.style.setProperty('--color-one-light', '#150b0e');
        document.body.style.setProperty('--color-two-light', '#b13126');
        render.options.background = '#F0E0C9';
        document.getElementById('changetheme').innerHTML='<i class="bi bi-moon"></i>';  
    }
}
