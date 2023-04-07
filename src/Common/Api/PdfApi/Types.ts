export interface IPdfData {
    url: string,
    pdf: string,
    description?: string,
    pdf_key?: string,
}

export interface IPdf extends IPdfData {
    id: string,
}

export interface IPdfList {
    count: number,
    next: string,
    previous: string,
    results: IPdf[],
}