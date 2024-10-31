declare module 'jimp' {
    export class Jimp
    {
        static read(path: string): Promise<Jimp>;
        static loadFont(path: string): Promise<any>;
        print(font: any, x: number, y: number, text: string): Jimp;
        resize(width: number, height: number): Jimp;
        writeAsync(path: string): void;
    }

    export const FONT_SANS_32_BLACK: string;
}