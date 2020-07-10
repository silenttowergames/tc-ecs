import { canvas } from "./canvas";

function init()
{
    const c : canvas = canvas.create('c', 320, 180);
    
    console.log(c);
}

window.addEventListener('load', init);
