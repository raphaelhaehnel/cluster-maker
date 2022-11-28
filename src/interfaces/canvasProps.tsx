export default interface CanvasProps {
  //   name: string;
  //   age: number;
  //   country: string;
  draw(ctx: CanvasRenderingContext2D, frameCount: number): void;
  resize(canvas: HTMLCanvasElement): void;
}
