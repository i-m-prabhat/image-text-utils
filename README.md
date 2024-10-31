# image-text-utils

**image-text-utils** is a Node.js package for adding text to images at single or multiple positions and resizing images. It is built with TypeScript for compatibility with both JavaScript and TypeScript. This package uses the [Jimp](https://www.npmjs.com/package/jimp) library for image processing, enabling powerful manipulation capabilities.

## Features

- Write text at a single position on an image
- Write text at multiple positions on an image
- Resize images to specified dimensions
- Compatible with JavaScript (CommonJS) and TypeScript (ES Module)

## Installation

To install the package via npm, use:

```bash
npm install image-text-utils
```

**Note**: This package uses Jimp as its underlying image processing library. Ensure Jimp is compatible with your Node.js version.

## Usage

The package provides two main utilities:

1. `writeText`: An object with `single` and `multiple` methods for writing text at single or multiple positions.
2. `resizeImage`: A function to resize images to specified dimensions.

### Importing the Package

You can use the package with either `require` or `import` syntax.

#### CommonJS (JavaScript)

```javascript
const { writeText, resizeImage } = require('image-text-utils');
```

#### ES Module (TypeScript)

```typescript
import { writeText, resizeImage } from 'image-text-utils';
```

## API Reference

### `writeText`

The `writeText` object provides two methods:

- `writeText.single` – Write text at a single position on an image.
- `writeText.multiple` – Write text at multiple positions on an image.

Both methods require an input image path, an output image path, and specific text options.

#### `writeText.single(imagePath: string, outputPath: string, textOptions: TextOptions): Promise<void>`

Adds a single text at a specified position.

- **`imagePath`** (string): Path to the input image file.
- **`outputPath`** (string): Path to save the output image.
- **`textOptions`** (object):
  - `text` (string): The text to add.
  - `position` (object): `{ x: number, y: number }` - Position of the text on the image.
  - `fontPath` (optional, string): Path to a custom font. If not provided, Jimp's default font (`FONT_SANS_32_BLACK`) will be used.

##### Example

```javascript
writeText.single('input.jpg', 'output.jpg', {
  text: 'Hello, World!',
  position: { x: 50, y: 50 }
});
```

#### `writeText.multiple(imagePath: string, outputPath: string, textOptionsArray: TextOptions[]): Promise<void>`

Adds multiple texts at specified positions on the image.

- **`imagePath`** (string): Path to the input image file.
- **`outputPath`** (string): Path to save the output image.
- **`textOptionsArray`** (array of objects): Each object contains:
  - `text` (string): The text to add.
  - `position` (object): `{ x: number, y: number }` - Position of the text on the image.
  - `fontPath` (optional, string): Path to a custom font. If not provided, Jimp's default font (`FONT_SANS_32_BLACK`) will be used.

##### Example

```javascript
writeText.multiple('input.jpg', 'output.jpg', [
  { text: 'Top Left', position: { x: 10, y: 10 } },
  { text: 'Bottom Right', position: { x: 200, y: 200 } }
]);
```

### `resizeImage`

Resizes an image to specified dimensions.

#### `resizeImage(imagePath: string, outputPath: string, resizeOptions: ResizeOptions): Promise<void>`

- **`imagePath`** (string): Path to the input image file.
- **`outputPath`** (string): Path to save the resized image.
- **`resizeOptions`** (object):
  - `width` (number): New width of the image.
  - `height` (number): New height of the image.

##### Example

```javascript
resizeImage('input.jpg', 'resized.jpg', { width: 300, height: 300 });
```

## Types

The package provides the following TypeScript types:

- **`Position`**: Defines the x and y coordinates for text placement.

  ```typescript
  interface Position {
    x: number;
    y: number;
  }
  ```

- **`TextOptions`**: Defines options for the text to be written.

  ```typescript
  interface TextOptions {
    text: string;
    position: Position;
    fontPath?: string; // Optional custom font path
  }
  ```

- **`ResizeOptions`**: Defines options for resizing an image.

  ```typescript
  interface ResizeOptions {
    width: number;
    height: number;
  }
  ```

## Example

Here's a complete example demonstrating how to use `writeText` and `resizeImage` in a Node.js application:

```typescript
import { writeText, resizeImage } from 'image-text-utils';

// Single text on image
writeText.single('input.jpg', 'output.jpg', {
  text: 'Hello, World!',
  position: { x: 50, y: 50 }
});

// Multiple texts on image
writeText.multiple('input.jpg', 'output_with_multiple_texts.jpg', [
  { text: 'Top Left', position: { x: 10, y: 10 } },
  { text: 'Bottom Right', position: { x: 200, y: 200 } }
]);

// Resize image
resizeImage('input.jpg', 'resized_image.jpg', { width: 400, height: 400 });
```

## Notes

- This package uses the [Jimp](https://www.npmjs.com/package/jimp) library for image processing. Jimp’s default fonts and methods are used for text placement and image resizing.
- Make sure the image paths provided have read/write permissions as required by Jimp.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
