export class v2d
{
    static create(X: number, Y: number) : v2d
    {
        const ret : v2d = new v2d();
        ret.X = X;
        ret.Y = Y;
        
        return ret;
    }
    
    X: number;
    Y: number;
}
