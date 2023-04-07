const isInViewport = (element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const isInViewportThreshold = (element: HTMLDivElement, threshold = 0) => {
    const rect = element.getBoundingClientRect();

    return (
        window.innerHeight - (rect.top + window.innerHeight * threshold / 100) >= 0
    )

    // return (
    //     rect.top >= 0 &&
    //     rect.left >= 0 &&
    //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    // );
}

export {
    isInViewport, isInViewportThreshold
}