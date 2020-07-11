import { i } from "../i";
import { v2d } from "../v2d";

export class SpriteSheet
{
    static create(filename : string, tilesize : v2d, animations) : SpriteSheet
    {
        const sheet = new SpriteSheet();
        
        sheet.asset = i(filename);
        sheet.filename = filename;
        
        sheet.animations = animations;
        
        sheet.tilesize = tilesize;
        
        return sheet;
    }
    
    animations;
    asset : HTMLImageElement;
    filename : string;
    tilesize : v2d;
}
