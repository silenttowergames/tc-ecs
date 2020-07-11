import { system } from "../system";
import { world } from "../world";
import { sprite } from "../components/sprite";
import { body } from "../components/body";
import { v2d } from "../../v2d";

export class DrawSystem extends system
{
    update(w : world)
    {
        w.canvas.ctx.clearRect(0, 0, w.canvas.element.width, w.canvas.element.height);
        
        const zoom = w.canvas.zoom * w.canvas.cam.zoom;
        
        w.canvas.ctx.imageSmoothingEnabled = false;
        
        for(const e in w.getEntitiesWith('sprite'))
        {
            const s : sprite = <sprite>w.getComponentForEntity(+e, 'sprite');
            const b : body = <body>w.getComponentForEntity(+e, 'body');
            
            const frame : v2d = v2d.create(
                s.sheet.animations[s.animationID][s.frameID][0],
                s.sheet.animations[s.animationID][s.frameID][1]
            );
            
            w.canvas.ctx.drawImage(
                s.sheet.asset,
                frame.X * s.sheet.tilesize.X,
                frame.Y * s.sheet.tilesize.Y,
                s.sheet.tilesize.X,
                s.sheet.tilesize.Y,
                b.position.X * zoom,
                b.position.Y * zoom,
                s.sheet.tilesize.X * zoom,
                s.sheet.tilesize.Y * zoom
            );
        }
    }
}
