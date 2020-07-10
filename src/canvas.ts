import { v2d } from "./v2d";
import { camera } from "./rendering/camera";

export class canvas
{
    static create(id : string, width: number, height: number) : canvas
    {
        const c = new canvas();
        
        c.cam = camera.create();
        c.size = v2d.create(width, height);
        c.zoom = 1;
        
        c.element = <HTMLCanvasElement>document.getElementById(id);
        
        c.refresh();
        
        window.addEventListener('resize', () => c.refresh());
        
        return c;
    }
    
    refresh()
    {
        const win = v2d.create(
            window.innerWidth,
            window.innerHeight
        );
        
        this.zoom = Math.min(
            win.X / this.size.X,
            win.Y / this.size.Y
        );
        
        if(this.zoom > 1)
        {
            this.zoom = Math.floor(this.zoom);
        }
        
        this.element.width = this.size.X * this.zoom;
        this.element.height = this.size.Y * this.zoom;
    }
    
    cam: camera;
    context : CanvasRenderingContext2D;
    size: v2d;
    zoom: number;
    
    private element : HTMLCanvasElement;
}
