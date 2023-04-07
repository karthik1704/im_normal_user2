// const DROPDOWN_PADDING = 20; // in pixels == top + bottom

export class Dropdown {
    private name: string;
    private pos: "right" | "left" | "down";
    private fitHeightToParent: boolean;

    constructor ({name, pos, fitHeightToParent}: {name: string, pos: "right" | "left" | "down", fitHeightToParent: boolean}) {
        this.name = name;
        this.pos = pos;
        this.fitHeightToParent = fitHeightToParent;

        if (pos === "left") {
            this.makeLeft();
        }
        else if (pos === "right") {
            this.makeRight();
        }
    }

    // public addKeyboardSupport = ({anchor, dropdown, dropdownContent}: {anchor: HTMLAnchorElement, dropdown: HTMLDivElement, dropdownContent: HTMLDivElement}) => {
    //     if (!anchor) return;

    //     dropdown.addEventListener("focusin", () => {
    //         dropdownContent.classList.add("dropdown-content-visible");
    //     })
    //     dropdownContent.addEventListener("focusin", () => {
    //         dropdownContent.classList.add("dropdown-content-visible");
    //         let anchors = dropdownContent.querySelectorAll("a");
    //         anchors.forEach((a, i) => {
    //             a.addEventListener("focusout", () => {
    //                 dropdownContent.classList.remove("dropdown-content-visible");
    //             })
    //         })
    //     })
    //     dropdownContent.addEventListener("focusout", () => {
    //         console.log();
    //         dropdownContent.classList.remove("dropdown-content-visible");
    //     })
    // }

    public makeLeft = () => {
        let _dropdowns = document.querySelectorAll(this.name) as NodeListOf<HTMLDivElement>;
        _dropdowns.forEach((d, i) => {
            let dChild = d.querySelector("div > .dropdown-content") as HTMLDivElement;
            if (!dChild) return;


            // d.tabIndex = 0;
            // dChild.tabIndex = 0;
            // let anchor = d.querySelector("div > p > a") as HTMLAnchorElement;
            // this.addKeyboardSupport({anchor: anchor, dropdown: d, dropdownContent: dChild});

            d.addEventListener("mouseenter", ()=> {
                if (this.fitHeightToParent) {
                    let pDiv = d.parentElement;
                    if (pDiv)
                        dChild.style.height = pDiv.offsetHeight + "px";
                        dChild.style.overflowY = "auto";
                }
                dChild.style.left = -(dChild.offsetWidth - (dChild.offsetWidth * 15 / 100)) +"px";
                dChild.style.top = "0px";
                dChild.style.minHeight = `100%`;
            });
        })
    }

    public makeRight = () => {
        let _dropdowns = document.querySelectorAll(this.name) as NodeListOf<HTMLDivElement>;
        _dropdowns.forEach((d, i) => {
            let dChild = d.querySelector("div > .dropdown-content") as HTMLDivElement;
            if (!dChild) return;

            d.addEventListener("mouseenter", ()=> {
                if (this.fitHeightToParent) {
                    let pDiv = d.parentElement;
                    if (pDiv)
                        dChild.style.height = pDiv.offsetHeight + "px";
                        dChild.style.overflowY = "auto";
                }
                dChild.style.left = (dChild.offsetWidth - (dChild.offsetWidth * 15 / 100)) +"px";
                dChild.style.top = "0px";
                dChild.style.minHeight = `100%`;
                // dChild.style.bottom = (d.offsetHeight - dChild.offsetHeight + DROPDOWN_PADDING) +"px";
            });
        })
    }
}