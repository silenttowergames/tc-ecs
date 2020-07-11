export class input
{
    static init()
    {
        input.keys = {
            down: [],
            held: [],
        };
        
        window.addEventListener('keydown', (e) => input.key(e.key, true));
        window.addEventListener('keyup', (e) => input.key(e.key, false));
    }
    
    static key(key : string, down : boolean)
    {
        if(!input.keys.down[key])
        {
            input.keys.down[key] = 0;
        }
        
        if(!input.keys.held[key])
        {
            input.keys.held[key] = 0;
        }
        
        if(!down)
        {
            input.keys.held[key] = -1;
        }
        else
        {
            input.keys.held[key] = Math.min(Math.max(1, input.keys.held[key] + 1), 80);
        }
    }
    
    static update()
    {
        for(const key in input.keys.held)
        {
            if(input.held(key) <= 0)
            {
                input.keys.down[key] = Math.max(Math.min(-1, input.down(key) - 1), -80);
            }
            else
            {
                input.keys.down[key] = Math.min(Math.max(1, input.down(key) + 1), 80);
            }
        }
    }
    
    static down(key : string)
    {
        if(!input.keys.down[key])
        {
            return 0;
        }
        
        return input.keys.down[key];
    }
    
    static held(key : string)
    {
        if(!input.keys.held[key])
        {
            return 0;
        }
        
        return input.keys.held[key];
    }
    
    private static keys;
}
