export function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement) {
  const width = 200;
  const height = 200;

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true; // here you can return some usefull information like delta width and delta height instead of just true
    // this information can be used in the next redraw...
  }

  return false;
}
