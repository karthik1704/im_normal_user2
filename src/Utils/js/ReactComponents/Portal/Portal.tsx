import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export interface IPortal {
    children: React.ReactNode,
    className?: string,
    elem?: string,
}
export const Portal = ({children, className = "portal-root", elem = "div"}: IPortal) => {
    const [container] = useState(document.createElement(elem));

    useEffect(() => {
        container.classList.add(className);
        document.body.appendChild(container);

        return () => {
            document.body.removeChild(container);
        }
    }, [container, className]);

    return ReactDOM.createPortal(children, container);
}

export default Portal;