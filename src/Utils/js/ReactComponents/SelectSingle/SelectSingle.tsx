import { forwardRef, useEffect, useRef } from "react";

export interface ISelectSingle {
    divClassName?: string, label: string, icon: string, multiple?: undefined,
}
export const SelectSingle = forwardRef<HTMLSelectElement, ISelectSingle & React.SelectHTMLAttributes<HTMLSelectElement>>(({
    children, divClassName, label, icon, multiple, ...props
}, ref) => {

    const selectRef = useRef<HTMLSelectElement | null>(null);

    useEffect(() => {
        if (!selectRef.current) return;

        if (props.value) {
            selectRef.current.classList.add("focus");
        }
        else {
            selectRef.current.classList.remove("focus");
            selectRef.current.blur();
        }
    }, [props.value]);

    return (
        <div className={`input-div select-div icon ${divClassName?divClassName:""}`}>
            <select {...props} ref={(s) => {
                selectRef.current = s;
                // assign the button to ref(passed from parent component)
                if (typeof ref === "function") { // handle callback ref
                    ref(s);
                }
                else if (ref) { // handle object ref
                    ref.current = s;
                }
            }}>
                <option value={""}></option>               
                {children}
            </select>
            <label>{label}</label>
            <i className="material-icons">{icon}</i>
        </div>
    )
})