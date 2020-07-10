import { v2d } from "../v2d";

export class camera
{
    static create() : camera
    {
        let cam : camera = new camera();
        cam.position = v2d.create(0, 0);
        cam.zoom = 1.0;
        
        return cam;
    }
    
    position: v2d;
    zoom: number;
}
