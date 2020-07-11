import { world } from "../world";
import { body } from "../components/body";

export class MoveSystem
{
    update(w : world)
    {
        let b : body;
        
        for(b of w.get('body'))
        {
            b.position.X += b.velocity.X;
            b.position.Y += b.velocity.Y;
            
            b.velocity.X = 0;
            b.velocity.Y = 0;
        }
    }
}
