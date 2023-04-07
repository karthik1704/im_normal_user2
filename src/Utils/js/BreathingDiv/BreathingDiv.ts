interface IBreathingDiv {
    elem: HTMLDivElement,
    children: HTMLCollectionOf<HTMLDivElement>,
}

class BreathingDiv {
    breathingDivs: Array<IBreathingDiv> = [];
    currentPos = 0;
    fitToChild = false;
    rollback = false;

    // rollback: will go to the beginning page when true
    constructor(_name = ".faded", initialPos = 0,_fitToChild = false, rollback=false) {
        let _breathingDivs = document.querySelectorAll(_name) as NodeListOf<HTMLDivElement>;
        for (const _breathingDiv of _breathingDivs) {
            this.breathingDivs[this.breathingDivs.length] = {
                elem: _breathingDiv as HTMLDivElement,
                children: _breathingDiv.children as HTMLCollectionOf<HTMLDivElement>,
            }
        }
        if (_fitToChild) {
            this.fitToChild = true;
            this.fitHeight(0);
        }
        if (rollback) {
            this.rollback = true;
        }
        this.init();
        this.goto(initialPos);
    }

    private init() {
        this.breathingDivs.forEach( (breathingDiv) => {
            let _breathingDiv = breathingDiv.elem;
            let children = _breathingDiv.children as HTMLCollectionOf<HTMLElement>;

            // skip the first div
            for(let index = 1; index < children.length; index++) {
                children[index].style.transform = "translateX("+ -((index)*100) +"%)";
            }
        });
    }

    private fitHeight(childIndex: number) {
        for (let breathingDivIndex in this.breathingDivs) {
            let children = this.breathingDivs[breathingDivIndex].children;

            let breathingDiv = this.breathingDivs[breathingDivIndex].elem;
            breathingDiv.style.height = children[childIndex].offsetHeight + 'px';
        }
    }

    //to fix tab focus to overflown divs
    private makeCurrentVisible() {
        for (let breathingDivIndex in this.breathingDivs) {
            let children = this.breathingDivs[breathingDivIndex].children;

            for(let _childIndex = 0; _childIndex < children.length; _childIndex++) {
                if (_childIndex === this.currentPos)
                    children[_childIndex].style.visibility = "visible";
                else
                    children[_childIndex].style.visibility = "hidden";
            }
        }
    }

    slideLeft = () => {
        let positionChanged = false;

        let makeCurrentPosZero = false;

        for (let breathingDivIndex in this.breathingDivs) {
            let children = this.breathingDivs[breathingDivIndex].children;

            if (this.currentPos >= children.length - 1) {
                if (this.rollback) {
                    makeCurrentPosZero = true;
                    positionChanged = true;
                }
                continue;
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

        for (let breathingDivIndex in this.breathingDivs) {
            let children = this.breathingDivs[breathingDivIndex].children;

            if (this.currentPos <= 0) {
                if (this.rollback) {
                    lastIndex = children.length-1;
                    makeCurrentPosLast = true;
                    positionChanged = true;
                }
                continue;
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
        this.currentPos = pos;
        if (this.fitToChild) { this.fitHeight(pos); }
        this.makeCurrentVisible();
    }
}

export {
    BreathingDiv
};