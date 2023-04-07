export interface TopBarParams {
    topbarRef: React.RefObject<HTMLDivElement>,
}

export interface NavLinkParams {
    to: string,
    content: string,
    isNormalAnchor?: boolean,
    isTargetBlank?: boolean,
    onClick?: () => void,
}

export interface NavLinksParams {
    navLinks?: NavLinkParams[] | undefined,
    commonOnClick?: () => void,
}

export interface IMenuItem {
    heading: string,
    menuLinks: NavLinkParams[] | undefined,
    dropdownPos: "left" | undefined,
    deepMenu?: IMenuItem[],
    uniqueClassName: string | undefined,
}

export interface IMenus {
    menus: IMenuItem[],
}

export interface SidenavParams {
    toggleSideNav: () => void,
    menus: IMenuItem[],
    navLinks?: NavLinkParams[] | undefined,
    navLinksTwo?: NavLinkParams[] | undefined
    sidenavRef: React.RefObject<HTMLDivElement>,
}

export interface SidenavMenuParams {
    menus: IMenuItem[],
    navLinks?: NavLinkParams[] | undefined,
    navLinksTwo?: NavLinkParams[] | undefined
}

export interface SidenavSubMenuParams {
    toggleSubMenu: () => void,
    menuLinks: NavLinkParams[] | undefined,
    menus?: IMenuItem[] | undefined,
    submenuRef: React.RefObject<HTMLDivElement>,
}