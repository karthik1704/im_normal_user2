import "./Sidenav.scss";
import {IMenuItem, SidenavMenuParams, SidenavParams, SidenavSubMenuParams} from "./Interfaces";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { NavLinks } from "./NavLinks";
import { Link } from "react-router-dom";

const SidenavSubMenu = ({menuLinks, toggleSubMenu, submenuRef, menus}: SidenavSubMenuParams) => {
    const hideAllMenus = () => {
        document.body.click();
    }

    const navLinksJSX = useMemo(() => {
        return (
            <NavLinks navLinks={menuLinks} commonOnClick={hideAllMenus}/>
        )
    }, [menuLinks]);

    const menusJSX = useMemo(() => {
        return menus && menus.map((d, i)=> {
            return <SidenavMenuItem {...d} key={i}/>
        })
    }, [menus]);

    return (
        <>
            <div className={"sidenav-submenu"} ref={submenuRef}>
                <div className={""}>
                    <button className={"right button sidenav-close-button"} type={"button"} onClick={toggleSubMenu}>
                        <i className={"material-icons"}>keyboard_arrow_left</i>
                    </button>
                </div>
                {/* <SidenavMenu navLinks={menuLinks}/> */}
                {navLinksJSX}
                {menusJSX}
            </div>
        </>
    )
}

const SidenavMenuItem = ({heading, menuLinks, uniqueClassName, deepMenu}: IMenuItem) => {
    const [submenu, setSubmenu] = useState(false); // whether sidenav is opened
    const submenuRef = useRef<HTMLDivElement>(null);

    // toggle the submenu
    const toggleSubMenu = useCallback(() => {
        if (!submenuRef.current) {
            return;
        }

        if (submenu) {
            submenuRef.current.style.transform = "translateX(-150%)";
            setSubmenu(false);
        }
        else {
            submenuRef.current.style.transform = "translateX(0)";
            setSubmenu(true);
        }
    }, [submenu]);

    // detect whether user clicks outside the submenu
    const detectOutsideClickSubMenu = useCallback ((e: any) => {
        // if submenu is present, submenu is opened already and user didn't click submenu nor its children... 
        if (submenuRef.current && submenu && submenuRef.current !== e.target && !submenuRef.current.contains(e.target)) {
            // close it
            toggleSubMenu();
        }
    }, [submenu, toggleSubMenu]);

    // fit height of submenu to window height
    const fitSubMenuToWindowHeight = useCallback(() => {
        if (!submenuRef.current) {
            return;
        }
        submenuRef.current.style.height = window.innerHeight + "px";
    }, []);

    useEffect ( () => {
        fitSubMenuToWindowHeight();
        document.addEventListener('click', detectOutsideClickSubMenu);
        document.addEventListener('touchmove', fitSubMenuToWindowHeight);
        document.addEventListener('resize', fitSubMenuToWindowHeight);
        return () => {
            document.removeEventListener('click', detectOutsideClickSubMenu);
            document.removeEventListener('touchmove', fitSubMenuToWindowHeight);
            document.removeEventListener('resize', fitSubMenuToWindowHeight);
        };
    }, [detectOutsideClickSubMenu, fitSubMenuToWindowHeight])

    return (
        <>
            <div className={"sidenav-submenu-heading"}>
                <p><Link className={"white"} to={"#!"} onClick={toggleSubMenu}>{heading} <i className={"material-icons"}>keyboard_arrow_right</i></Link></p>
            </div>
            <SidenavSubMenu menus={deepMenu} menuLinks={menuLinks} toggleSubMenu={toggleSubMenu} submenuRef={submenuRef}/>
        </>
    )
}

const SidenavMenu = ({menus, navLinks, navLinksTwo}: SidenavMenuParams) => {

    const hideAllMenus = () => {
        document.body.click();
    }

    const navLinksJSX = useMemo(() => {
        return (
            <NavLinks navLinks={navLinks} commonOnClick={hideAllMenus}/>
        )
    }, [navLinks]);
    const navLinksTwoJSX = useMemo(() => {
        return (
            <NavLinks navLinks={navLinksTwo} commonOnClick={hideAllMenus}/>
        )
    }, [navLinksTwo]);
    const menuListJSX = useMemo(() => {
        return menus.map((menu, index) => {
            return <SidenavMenuItem {...menu} key={menu.heading + index}/>
        });
    }, [menus]);

    return (
        <>
            {navLinksJSX}
            {menuListJSX}
            {navLinksTwoJSX}
        </>
    )
}

const Sidenav = ({toggleSideNav, menus, navLinks, navLinksTwo, sidenavRef}: SidenavParams) => {
    return (
        <>
            <div className={"sidenav"} ref={sidenavRef}>
                <div className={""}>
                    <button className={"right button sidenav-close-button"} type={"button"} onClick={toggleSideNav}>
                        <i className={"material-icons"}>close</i>
                    </button>
                </div>
                <SidenavMenu menus={menus} navLinks={navLinks} navLinksTwo={navLinksTwo}/>
            </div>
        </>
    )
}

export default Sidenav;