import { system } from "../system";
import { world } from "../world";
import { body } from "../components/body";
import { input } from "../../input";
import { AIPlayer } from "../components/AIPlayer";

export class AIPlayerSystem extends system
{
    update(w : world)
    {
        for(const e of w.getEntitiesWith('AIPlayer'))
        {
            const a : AIPlayer = <AIPlayer>w.getComponentForEntity(+e, 'AIPlayer');
            const b : body = <body>w.getComponentForEntity(+e, 'body');
            
            if(input.down('ArrowRight') > 0)
            {
                b.velocity.X += a.speed;
            }
            
            if(input.down('ArrowLeft') > 0)
            {
                b.velocity.X -= a.speed;
            }
            
            if(input.down('ArrowDown') > 0)
            {
                b.velocity.Y += a.speed;
            }
            
            if(input.down('ArrowUp') > 0)
            {
                b.velocity.Y -= a.speed;
            }
        }
    }
}
