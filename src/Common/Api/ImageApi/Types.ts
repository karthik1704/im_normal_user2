
export interface IImage {
    url: string, image: string, thumbnail_100: string, thumbnail_200: string,
}

export interface IImageList {
    count: number,
    next: string,
    previous: string,
    results: IImage[],
}