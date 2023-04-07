interface IPagedDiv {
    elem: HTMLDivElement,
    children: HTMLCollectionOf<HTMLDivElement>,
}

class PagedDiv {
    pagedDivs: Array<IPagedDiv> = [];
    currentPos = 0;
    fitToChild = false;
    isFitWidthToParent = false;
    rollback = false;
    name = "";
    pagedDivWidthPercent = 100;

    // rollback: will go to the beginning page when true
    // pagedDivWidthPercent: width percent relative to parent element e.g. 80 for 80% of parent width
    constructor({ _name = ".paged", initialPos = 0, _fitToChild = false, rollback = false, fitWidthToParent = false, pagedDivWidthPercent = 100 }: { _name?: string; initialPos?: number; _fitToChild?: boolean; rollback?: boolean; fitWidthToParent?: boolean; pagedDivWidthPercent?: number; } = {}) {
        this.name = _name;
        this.isFitWidthToParent = fitWidthToParent;
        this.pagedDivWidthPercent = pagedDivWidthPercent;
        let _pagedDivs = document.querySelectorAll(_name) as NodeListOf<HTMLDivElement>;
        for (const _pagedDiv of _pagedDivs) {
            this.pagedDivs[this.pagedDivs.length] = {
                elem: _pagedDiv as HTMLDivElement,
                children: _pagedDiv.children as HTMLCollectionOf<HTMLDivElement>,
            }
        }
        if (_fitToChild) {
            this.fitToChild = true;
            this.fitHeight(0);
        }
        if (rollback) {
            this.rollback = true;
        }
        if (this.isFitWidthToParent) {
            this.fitWidthToParent();
        }
        this.goto(initialPos);
    }

    private fitWidthToParent = () => {
        for (let pagedDivIndex in this.pagedDivs) {
            let pagedDivElem = this.pagedDivs[pagedDivIndex].elem;

            const parentElemWidth = pagedDivElem.parentElement!.offsetWidth;

            const widthPixels = this.pagedDivWidthPercent * parentElemWidth / 100;

            pagedDivElem.style.width = widthPixels + "px";
        }
    }

    public addWindowResizeListener = () => {
        window.addEventListener("resize", this.fitWidthToParent);
    }

    public removeWindowResizeListener = () => {
        window.removeEventListener("resize", this.fitWidthToParent);
    }

    private fitHeight(childIndex: number) {
        for (let pagedDivIndex in this.pagedDivs) {
            let children = this.pagedDivs[pagedDivIndex].children;

            let pagedDiv = this.pagedDivs[pagedDivIndex].elem;
            // if child is present
            if (children[childIndex]) {
                pagedDiv.style.height = children[childIndex].offsetHeight + 'px';
            }
        }
    }

    //to fix tab focus to overflown divs
    private makeCurrentVisible() {
        for (let pagedDivIndex in this.pagedDivs) {
            let children = this.pagedDivs[pagedDivIndex].children;

            // if any children is present
            if (children[0]) {
                const childElemWidth = children[0].offsetWidth;
                const parentElemWidth = children[0].parentElement!.offsetWidth;

                const widthPercent = Math.floor(100*childElemWidth/parentElemWidth);

                // if all elements take 1/3 width of parent
                if (widthPercent >= 32 || widthPercent <= 34) {
                    for(let _childIndex = 0; _childIndex < children.length; _childIndex++) {
                        // +1 and +2 are next 2 positions
                        if (_childIndex === this.currentPos || _childIndex === this.currentPos+1  || _childIndex === this.currentPos+2)
                            children[_childIndex].style.visibility = "visible";
                        else
                            children[_childIndex].style.visibility = "hidden";
                    }
                }
                // if all elements take 1/2 width of parent
                else if (widthPercent === 50) {
                    for(let _childIndex = 0; _childIndex < children.length; _childIndex++) {
                        // +1 and +2 are next 2 positions
                        if (_childIndex === this.currentPos || _childIndex === this.currentPos+1)
                            children[_childIndex].style.visibility = "visible";
                        else
                            children[_childIndex].style.visibility = "hidden";
                    }
                }
                // if all elements take full width of parent
                else {
                    for(let _childIndex = 0; _childIndex < children.length; _childIndex++) {
                        if (_childIndex === this.currentPos)
                            children[_childIndex].style.visibility = "visible";
                        else
                            children[_childIndex].style.visibility = "hidden";
                    }
                }
            }
        }
    }

    slideLeft = () => {
        let positionChanged = false;

        let makeCurrentPosZero = false;

        for (let pagedDivIndex in this.pagedDivs) {
            let children = this.pagedDivs[pagedDivIndex].children;

            if (this.currentPos >= children.length - 1) {
                if (this.rollback) {
                    for (let childrenIndex = 0; childrenIndex < children.length; childrenIndex++) {
                        children[childrenIndex].style.transform = "translateX("+ -((0)*100) +"%)";
                    }
                    makeCurrentPosZero = true;
                    positionChanged = true;
                }
                continue;
            }

            for (let childrenIndex = 0; childrenIndex < children.length; childrenIndex++) {
                children[childrenIndex].style.transform = "translateX("+ -((this.currentPos+1)*100) +"%)";
            }

            positionChanged = true;
        }
        if (positionChanged) {
            this.currentPos = (makeCurrentPosZero)? 0 : this.currentPos + 1
        }
        if (this.fitToChild) { this.fitHeight(this.currentPos); }
        this.makeCurrentVisible();
    }

    slideRight = () => {
        let positionChanged = false;

        let makeCurrentPosLast = false;
        let lastIndex = 0;

        for (let pagedDivIndex in this.pagedDivs) {
            let children = this.pagedDivs[pagedDivIndex].children;

            if (this.currentPos <= 0) {
                if (this.rollback) {
                    for (let childrenIndex = 0; childrenIndex < children.length; childrenIndex++) {
                        children[childrenIndex].style.transform = "translateX("+ -((children.length-1)*100) +"%)";
                    }
                    // this.currentPos = children.length-1;
                    lastIndex = children.length-1;
                    makeCurrentPosLast = true;
                    positionChanged = true;
                }
                continue;
            }

            for (let childrenIndex = 0; childrenIndex < children.length; childrenIndex++) {
                children[childrenIndex].style.transform = "translateX("+ -((this.currentPos-1)*100) +"%)";
            }

            positionChanged = true;
        }

        if (positionChanged) {
            this.currentPos = (makeCurrentPosLast)? lastIndex : this.currentPos - 1;
        }

        if (this.fitToChild) { this.fitHeight(this.currentPos); }
        this.makeCurrentVisible();
    }

    goto = (pos: number) => {
        for (let pagedDivIndex in this.pagedDivs) {
            let children = this.pagedDivs[pagedDivIndex].children;

            for (let i = 0; i < children.length; i++) {
                children[i].style.transform = "translateX("+ -((pos)*100) +"%)";
            }
        }
        this.currentPos = pos;
        if (this.fitToChild) { this.fitHeight(pos); }
        this.makeCurrentVisible();
    }

    public getPos = () => {
        return this.currentPos;
    }

    public fitHeightToCurrentPos = () => {
        this.fitHeight(this.currentPos);
    }
}

export {
    PagedDiv
};