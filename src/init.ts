import { canvas } from "./canvas";
import { world } from "./ecs/world";
import { SpriteSheet } from "./rendering/SpriteSheet";
import { v2d } from "./v2d";
import { body } from "./ecs/components/body";
import { sprite } from "./ecs/components/sprite";
import { DrawSystem } from "./ecs/systems/DrawSystem";
import { AnimationSystem } from "./ecs/systems/AnimationSystem";
import { input } from "./input";
import { MoveSystem } from "./ecs/systems/MoveSystem";
import { AIPlayer } from "./ecs/components/AIPlayer";
import { AIPlayerSystem } from "./ecs/systems/AIPlayerSystem";

function init() : void
{
    const c : canvas = canvas.create('c', 160, 90);
    
    let w : world;
    
    const spriteSheets : Array<SpriteSheet> = [
        SpriteSheet.create("easter-16x16", v2d.create(16, 16), {
            protagIdle: [
                [ 6, 0, 10, ],
                [ 5, 0, 10, ],
            ],
            
            bunnyIdle: [
                [ 0, 0, 15, ],
                [ 1, 0, 15, ],
            ],
        }),
    ];
    
    const scenes = {
        firstScene: () => {
            let entity : number = w.new();
            w.add(entity, new AIPlayer());
            w.add(entity, body.create(32, 16));
            w.add(entity, sprite.create(spriteSheets[0], 'protagIdle'));
            
            entity = w.new();
            w.add(entity, body.create(64, 64));
            w.add(entity, sprite.create(spriteSheets[0], 'bunnyIdle'));
        },
    };
    
    let nextScene = null;
    
    const loop = setInterval(() => {
        if((w == null && (nextScene = 'firstScene')) || (w.nextScene != null && (nextScene = w.nextScene)))
        {
            w = newWorld(c);
            
            w.spriteSheets = spriteSheets;
            
            scenes[nextScene]();
            
            nextScene = null;
        }
        
        if(w.focused)
        {
            w.progress();
            
            input.update();
        }
    }, 1000 / 60);
    
    document.addEventListener('focus', () => w.focused = true);
    document.addEventListener('blur', () => w.focused = false);
    
    input.init();
}

function newWorld(c : canvas) : world
{
    const w : world = world.create();
    
    w.canvas = c;
    w.systems.push(new AIPlayerSystem());
    w.systems.push(new MoveSystem());
    w.systems.push(new AnimationSystem());
    w.systems.push(new DrawSystem());
    
    return w;
}

window.addEventListener('load', init);
