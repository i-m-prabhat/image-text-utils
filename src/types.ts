export interface Position
{
    x: number;
    y: number;
}

export interface TextOptions
{
    text: string;
    position: Position;
    fontPath?: string;  // Optional custom font path
}

export interface ResizeOptions
{
    width: number;
    height: number;
}
