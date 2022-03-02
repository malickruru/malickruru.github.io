var Canvas = document.getElementById('canvas-wrap');
var width_canvas = Canvas.offsetWidth;
var height_canvas = Canvas.offsetHeight;



// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;
    Body = Matter.Body;
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Events = Matter.Events;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: Canvas,
    engine: engine,
    options:{
        width:width_canvas ,
        height:height_canvas,
        background:'#F0E0C9',
        wireframes: false,
    }
});

//create two boxes and a ground
        js = Bodies.rectangle(890, 50, 100, 100 ,{
            render: {
                sprite: {
                    texture: './img/js.png',
                    xScale: .5,
                    yScale: .5,
                    
                }
            },
        });

        html = Bodies.circle(300, 60, 50 ,{
            render: {
                sprite: {
                    texture: './img/html.png',
                    xScale: .1,
                    yScale: .1,
                    
                }
            },
        });

        js2 = Bodies.rectangle(910, 100, 100, 100 ,{
            render: {
                sprite: {
                    texture: './img/js.png',
                    xScale: .5,
                    yScale: .5,
                    
                }
            },
        });

        js3 = Bodies.rectangle(930, 70, 100, 100 ,{
            render: {
                sprite: {
                    texture: './img/js.png',
                    xScale: .5,
                    yScale: .5,
                    
                }
            },
        });

        html = Bodies.circle(300, 60, 50 ,{
            render: {
                sprite: {
                    texture: './img/html.png',
                    xScale: .1,
                    yScale: .1,
                    
                }
            },
        });
        
        html2 = Bodies.circle(650, 70, 50 ,{
            render: {
                sprite: {
                    texture: './img/html.png',
                    xScale: .1,
                    yScale: .1,
                    
                }
            },
        });


        css = Bodies.circle(400, 80, 50 ,{
            render: {
                sprite: {
                    texture: './img/css.png',
                    xScale: .2,
                    yScale: .2,
                    
                }
            },
        });
        css2 = Bodies.circle(550, 90, 50 ,{
            render: {
                sprite: {
                    texture: './img/css.png',
                    xScale: .2,
                    yScale: .2,
                    
                }
            },
        });
           
        MySql = Bodies.circle(500, 100, 50 ,{
            render: {
                sprite: {
                    texture: './img/mysql.png',
                    xScale: .25,
                    yScale: .25,
                }
            },
        });

        MySql2 = Bodies.circle(450, 110, 50 ,{
            render: {
                sprite: {
                    texture: './img/mysql.png',
                    xScale: .25,
                    yScale: .25,
                }
            },
        });
        
        // react = Bodies.rectangle(450, 50, 100, 100 ,{
        //     render: {
        //         sprite: {
        //             texture: './img/react.png',
        //             xScale: .05,
        //             yScale: .05,
                    
        //         }
        //     },
        // });

        php = Bodies.rectangle(600, 150, 110 ,55,{
            render: {
                sprite: {
                    texture: './img/PHP.png',
                    xScale: .1,
                    yScale: .09,
                }
            },
        });

        php2 = Bodies.rectangle(350, 160, 110 ,55,{
            render: {
                sprite: {
                    texture: './img/PHP.png',
                    xScale: .1,
                    yScale: .09,
                }
            },
        });
        compound = Bodies.rectangle(860, 200, 190, 50,{ isStatic : true , fillStyle : '#111'} );
       
//sol
var ground = Bodies.rectangle(600, 610, 1200, 60, { isStatic: true });
var corp =[ compound,js,js2,js3,html,css,MySql,php,html2,css2,MySql2,php2,ground]
//add all of the bodies to the world
Composite.add(engine.world, corp);





// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);


var counter = 0,
scaleFactor = 1.01;

Events.on(runner, 'afterTick', function(event) {
counter += 1;

if (counter === 40)
   

if (scaleFactor > 1) {
    
    Body.scale(compound, 0.995, 0.995);

   
}

// make bodyA move up and down
// body is static so must manually update velocity for friction to work
var py = 300 + 100 * Math.sin(engine.timing.timestamp * 0.002);


// make compound body move up and down and rotate constantly
Body.setVelocity(compound, { x: 0, y: py - compound.position.y });

//Body.setAngularVelocity(compound, 0.02);
Body.setPosition(compound, { x: 900, y: py });
//Body.rotate(compound, 0.02);

// every 1.5 sec
if (counter >= 60 * 1.5) {
    

    // reset counter
    counter = 0;
    scaleFactor = 1;
}
});

 // add mouse control
 var mouse = Mouse.create(render.canvas),
 mouseConstraint = MouseConstraint.create(engine, {
     mouse: mouse,
     constraint: {
         stiffness: 0.2,
         render: {
             visible: false
         }
     }
 });

Composite.add(engine.world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse; 
