import { Link } from "react-router-dom";
import { NavLinkParams, NavLinksParams } from "./Interfaces";

export const NavLink = ({to, content, isNormalAnchor, isTargetBlank, onClick}: NavLinkParams) => {

    if (isNormalAnchor) {

        if (isTargetBlank) {
            return (
                <p><a onClick={onClick} className={"white"} href={to} target={"_blank"} rel="noreferrer">{content}</a></p>
            );
        }
        return (
            <p><a onClick={onClick} className={"white"} href={to}>{content}</a></p>
        );
    }

    return (
        <p><Link onClick={onClick} className={"white"} to={to}>{content}</Link></p>
    );
}

export const NavLinks = ({navLinks, commonOnClick}: NavLinksParams) => {
    if (!navLinks)
        return <></>;
    const navLinkArray = navLinks.map( (navLink, index) => {
        return <NavLink onClick={commonOnClick} {...navLink} key={navLink.to + navLink.content + index}/>
    });

    return (
        <>
            {navLinkArray}
        </>
    );
}