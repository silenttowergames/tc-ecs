import { SpriteSheet } from "../../rendering/SpriteSheet";
import { component } from "../component";

export class sprite extends component
{
    static create(sheet : SpriteSheet, animationID : string)
    {
        const s = new sprite();
        
        s.animationID = animationID;
        s.sheet = sheet;
        
        return s;
    }
    
    class()
    {
        return 'sprite';
    }
    
    animationID : string;
    flipX: boolean = false;
    frameID : number = 0;
    frameDuration : number = 0;
    sheet : SpriteSheet;
}
