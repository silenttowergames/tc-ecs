import { system } from "../system";
import { world } from "../world";
import { i } from "../../i";

export class TestSystem extends system
{
    update(w : world)
    {
        const img : HTMLImageElement = i('easter-16x16');
        
        for(const c of w.get(`TestComponent`))
        {
            w.canvas.ctx.drawImage(
                img,
                64 * c.entity,
                32
            );
        }
    }
}
