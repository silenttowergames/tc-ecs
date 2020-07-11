import { system } from "./system";
import { component } from "./component";
import { canvas } from "../canvas";
import { SpriteSheet } from "../rendering/SpriteSheet";

export class world
{
    static create() : world
    {
        const w = new world();
        
        w.components = {
            all: [],
            types: {},
        };
        
        w.systems = [];
        
        return w;
    }
    
    new() : number
    {
        return this.entityCount++;
    }
    
    addComponent(c : component) : void
    {
        const cClass = c.class();
        
        this.components.all.push(c);
        
        if(!this.components.types[cClass])
        {
            this.components.types[cClass] = [];
        }
        
        this.components.types[cClass].push(c);
    }
    
    add(entity : number, c : component) : void
    {
        c.entity = entity;
        
        this.addComponent(c);
    }
    
    remove(entity: number)
    {
        const indexesRemoveFromAll = [];
        
        for(let j : number = 0; j < this.components.all.length; j++)
        {
            const c = this.components.all[j];
            
            if(c.entity != entity)
            {
                continue;
            }
            
            indexesRemoveFromAll.push(j);
            
            const cClass = c.class();
            let i;
            
            i = this.components.types[cClass].indexOf(c);
            this.components.types[cClass].splice(i, 1);
        }
        
        for(const i of indexesRemoveFromAll)
        {
            this.components.all.splice(i, 1);
        }
    }
    
    progress()
    {
        for(const s of this.systems)
        {
            s.update(this);
        }
    }
    
    get(cClass : string)
    {
        return this.components.types[cClass] ?? [];
    }
    
    getEntitiesWith(cClass : string) : Array<number>
    {
        const ret : Array<number> = [];
        
        for(const c of this.get(cClass))
        {
            ret.push(c.entity);
        }
        
        return ret;
    }
    
    getComponentForEntity(entity: number, cClass : string) : component
    {
        for(const c of this.get(cClass))
        {
            if(c.entity == entity)
            {
                return c;
            }
        }
        
        return null;
    }
    
    canvas : canvas;
    components;
    entityCount : number = 0;
    focused : boolean = true;
    nextScene : string = null;
    spriteSheets: Array<SpriteSheet>;
    systems: Array<system>;
}
