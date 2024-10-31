const Jimp = require("jimp");
import { Position, TextOptions, ResizeOptions } from './types';

/**
 * Writes text at a single position on an image.
 */
async function writeTextSingle(
    imagePath: string,
    outputPath: string,
    textOptions: TextOptions
): Promise<void>
{
    const image = await Jimp.read(imagePath);
    const font = await Jimp.loadFont(textOptions.fontPath || Jimp.FONT_SANS_32_BLACK);

    image.print(font, textOptions.position.x, textOptions.position.y, textOptions.text);
    await image.writeAsync(outputPath);
}

/**
 * Writes text at multiple positions on an image.
 */
async function writeTextMultiple(
    imagePath: string,
    outputPath: string,
    textOptionsArray: TextOptions[]
): Promise<void>
{
    const image = await Jimp.read(imagePath);

    for (const textOptions of textOptionsArray)
    {
        const font = await Jimp.loadFont(textOptions.fontPath || Jimp.FONT_SANS_32_BLACK);
        image.print(font, textOptions.position.x, textOptions.position.y, textOptions.text);
    }

    await image.writeAsync(outputPath);
}

/**
 * Object containing `single` and `multiple` methods for writing text.
 */
export const writeText = {
    single: writeTextSingle,
    multiple: writeTextMultiple
};

/**
 * Resizes an image to specified dimensions.
 */
export async function resizeImage(
    imagePath: string,
    outputPath: string,
    resizeOptions: ResizeOptions
): Promise<void>
{
    const image = await Jimp.read(imagePath);
    image.resize(resizeOptions.width, resizeOptions.height);
    await image.writeAsync(outputPath);
}