export function i(key : string) : HTMLImageElement
{
    return <HTMLImageElement>document.querySelector(`[src="assets/${key}.png"]`);
}
