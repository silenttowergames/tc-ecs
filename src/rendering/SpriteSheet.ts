import { i } from "../i";

export class SpriteSheet
{
    static create(filename : string) : SpriteSheet
    {
        const sheet = new SpriteSheet();
        
        sheet.asset = i(filename);
        sheet.filename = filename;
        
        return sheet;
    }
    
    asset : HTMLImageElement;
    filename : string;
    json;
}
