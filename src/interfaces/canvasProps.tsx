export default interface CanvasProps {
  //   name: string;
  //   age: number;
  //   country: string;
  resize(canvas: HTMLCanvasElement): void;
  draw(ctx: CanvasRenderingContext2D, frameCount: number): void;
}
