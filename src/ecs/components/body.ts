import { v2d } from "../../v2d";
import { component } from "../component";

export class body extends component
{
    static create(X : number, Y : number) : body
    {
        const b = new body();
        
        b.position = v2d.create(X, Y);
        
        return b;
    }
    
    class()
    {
        return 'body';
    }
    
    position : v2d;
}
