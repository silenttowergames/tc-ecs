import { canvas } from "./canvas";
import { world } from "./ecs/world";
import { TestSystem } from "./ecs/systems/TestSystem";
import { TestComponent } from "./ecs/components/TestComponent";

function init() : void
{
    const c : canvas = canvas.create('c', 320, 180);
    
    let w : world;
    
    const scenes = {
        firstScene: () => {
            let entity : number = w.new();
            w.add(entity, new TestComponent());
        },
    };
    
    let nextScene = null;
    
    const loop = setInterval(() => {
        if((w == null && (nextScene = 'firstScene')) || (w.nextScene != null && (nextScene = w.nextScene)))
        {
            w = newWorld(c);
            
            scenes[nextScene]();
            
            nextScene = null;
        }
        
        w.progress();
    }, 1000 / 60);
}

function newWorld(c : canvas) : world
{
    const w : world = world.create();
    
    w.canvas = c;
    w.systems.push(new TestSystem());
    
    return w;
}

window.addEventListener('load', init);
