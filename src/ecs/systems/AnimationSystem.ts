import { world } from "../world";
import { sprite } from "../components/sprite";

export class AnimationSystem
{
    update(w : world)
    {
        let s : sprite;
        let _s : any;
        
        for(_s in w.get('sprite'))
        {
            s = <sprite>_s;
            
            continue;
            
            const animation = s.sheet.animations[s.animationID];
            
            if(s.frameDuration > 0)
            {
                s.frameDuration--;
                
                continue;
            }
            
            if(++s.frameID >= animation.length)
            {
                s.frameID = 0;
            }
            
            s.frameDuration = animation[s.frameID][2];
        }
    }
}
