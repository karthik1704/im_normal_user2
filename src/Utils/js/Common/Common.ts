export interface IJpegImage {
    type: "jpg", jpg: string, webp: string, alt: string, w: number, h: number,
}

export interface IPngImage {
    type: "png", png: string, webp: string, alt: string, w: number, h: number,
}

export type IImage = IJpegImage | IPngImage;