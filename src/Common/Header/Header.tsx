import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../Globals";
import "./Header.scss";

import { Logo, TwentyOneYearsLogo } from "../../Assets/Assets";
import Sidenav from "./Sidenav";
import { IMenus, IMenuItem, TopBarParams, NavLinkParams, NavLinksParams } from "./Interfaces";
import { NavLink } from "./NavLinks";
import { Dropdown as DD } from "../../Utils/js/Utils";
import { useDispatch } from "react-redux";
import { unhideAllPagePopupForm } from "../../Store/Slices/App/AppSlice";

const TopBar = ({ topbarRef }: TopBarParams) => {
    return (
        <>
            <div className={"top-bar"} ref={topbarRef}>
                <div className={"col-wrapper-24"}>
                    <div className={"col-1"}></div>
                    <div className={"col-8"}>
                        <div className={"col-wrapper-24"}>
                            <div className={"col-12"}>
                                <div className={"logo-div"}>
                                    <Link to={ROUTES["HOMEPAGE"]}>
                                        <picture>
                                            {Logo.webp && <source type={"image/webp"} srcSet={Logo.webp} />}
                                            <img
                                                src={Logo.type === "jpg" ? Logo.jpg : Logo.png}
                                                alt={Logo.alt ? Logo.alt : ""}
                                                width={Logo.w}
                                                height={Logo.h}
                                            />
                                        </picture>
                                    </Link>
                                </div>
                            </div>
                            <div className={"col-12"}>
                                <div className={"logo-div twenty-one-years"}>
                                    <picture>
                                        {TwentyOneYearsLogo.webp && <source type={"image/webp"} srcSet={TwentyOneYearsLogo.webp} />}
                                        <img
                                            src={TwentyOneYearsLogo.type === "jpg" ? TwentyOneYearsLogo.jpg : TwentyOneYearsLogo.png}
                                            alt={TwentyOneYearsLogo.alt ? TwentyOneYearsLogo.alt : ""}
                                            width={TwentyOneYearsLogo.w}
                                            height={TwentyOneYearsLogo.h}
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-14"}>
                        <div className={"col-wrapper-24"}>
                            <div className={"col-9"}>
                                <h6 className={"t-align-center"}>MBA<br />+<br />Global Exposure</h6>
                                <p className={"t-align-center"}>With International Immersion</p>
                            </div>
                            <div className={"col-1"}></div>
                            <div className={"col-14"}>
                                <p className={"t-align-left indigo-900"}>Ranked Top 20 B Schools In South India By Times of India B School Survey</p>
                                <p className={"t-align-left indigo-900"}>Best Emerging Business School By World Education Congress & CMO Asia</p>
                                <p className={"t-align-left indigo-900"}>India's 1st School To Offer Industry Integrated MBA</p>
                            </div>
                        </div>
                    </div>
                    <div className={"col-1"}></div>
                </div>
            </div>
        </>
    )
};

const Dropdown = ({ heading, menuLinks, dropdownPos, deepMenu, uniqueClassName }: IMenuItem) => {

    useEffect(() => {
        if (dropdownPos === "left" && uniqueClassName) {
            new DD({ name: "." + uniqueClassName, pos: dropdownPos, fitHeightToParent: true });
        }
    }, [dropdownPos, uniqueClassName]);

    const navLinkArray = useMemo(() => {
        return menuLinks ? (
            menuLinks.map((navLink, index) => {
                return <NavLink {...navLink} key={navLink.to + navLink.content + index} />
            })
        )
            : [];
    }, [menuLinks]);

    const menusJSX = useMemo(() => {
        return deepMenu && deepMenu.map((d, i) => {
            return <Dropdown {...d} key={i} />
        })
    }, [deepMenu]);

    let dropdownItems = useMemo(() => {
        if (menusJSX) {
            // return [
            //     ...navLinkArray, ...menusJSX
            // ];
            return menusJSX.concat(navLinkArray);
        }
        else {
            return navLinkArray;
        }
    }, [navLinkArray, menusJSX]);

    let dropdownItemsFirst = useMemo(() => {
        // return dropdownItems.splice(Math.floor(dropdownItems.length / 2));
        return dropdownItems.splice(Math.floor(dropdownItems.length / 2 - 1)); // remove this line if issues caused... temporary fix
    }, [dropdownItems]);

    return (
        <>
            <div className={"dropdown " + uniqueClassName}>
                {/* <p><Link className={"white"} to={"#!"}>{heading} <i className={"material-icons"}>keyboard_arrow_down</i></Link></p> */}
                <p><Link className={"white"} to={"#!"}>{heading}</Link></p>
                <div className="dropdown-content bg-white">
                    {/* <NavLinks navLinks={menuLinks}/> */}
                    {/* {navLinkArray}
                    {menusJSX} */}
                    <div className={"dropdown-content-col"}>
                        {dropdownItemsFirst}
                    </div>
                    <div className={"dropdown-content-col"}>
                        {dropdownItems}
                    </div>
                </div>
            </div>
        </>
    )
}
const DropdownArray = ({ menus }: IMenus) => {
    const dropdownArray = menus.map((menu, index) => {
        return <Dropdown {...menu} key={menu.heading + index} />
    });
    return (
        <>
            {dropdownArray}
        </>
    );
}

const Header = () => {
    const dispatch = useDispatch();
    const unhidePopupModal = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(unhideAllPagePopupForm());
    }, [dispatch]);

    const [sidenav, setSideNav] = useState(false); // whether sidenav is opened
    const sidenavRef = useRef<HTMLDivElement>(null);
    const topbarRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    const homeNavLink = useMemo(() => {
        return {
            content: "Home",
            to: ROUTES["HOMEPAGE"],
        } as NavLinkParams;
    }, []);
    const galleryNavLink = useMemo(() => {
        return {
            content: "Gallery",
            to: ROUTES["GALLERY"],
        } as NavLinkParams;
    }, []);
    const sidenavNormalLinks = useMemo(() => {
        return {
            navLinks: [
                homeNavLink,
            ]
        } as NavLinksParams;
    }, [homeNavLink]);
    const sidenavNormalLinksTwo = useMemo(() => {
        return {
            navLinks: [
                galleryNavLink,
            ]
        } as NavLinksParams;
    }, [galleryNavLink]);
    const menusOneArray = useMemo(() => {
        return {
            menus: [
                {
                    heading: "Why AIMS IBS",
                    menuLinks: [
                        {
                            content: "Experience AIMS IBS",
                            to: ROUTES["EXPERIENCE AIMS IBS"],
                        },
                        {
                            content: "Key Differentiators",
                            to: ROUTES["KEY DIFFERENTIATORS"],
                        },
                        {
                            content: "Rankings, Credentials, Our Strenghts",
                            to: ROUTES["RANKINGS CREDENTIALS OUR STRENGHTS"],
                        },
                        {
                            content: "Industry Relevant Certifications",
                            to: ROUTES["INDUSTRY RELEVANT CERTIFICATIONS"],
                        },
                        {
                            content: "Value Added Programs and Pedagogy",
                            to: ROUTES["VALUE ADDED PROGRAMS AND PEDAGOGY"],
                        },
                    ],
                    uniqueClassName: "why-aims-ibs",
                },
                {
                    heading: "Programs",
                    menuLinks: [
                        {
                            content: "Industry Integrated Program",
                            to: ROUTES["INDUSTRY INTEGRATED PROGRAM"],
                        },
                        {
                            content: "MBA (Bangalore University)",
                            to: ROUTES["MBA (BANGALORE UNIVERSITY)"],
                        },
                        {
                            content: "PGDM",
                            to: ROUTES["PGDM"],
                        },
                        {
                            content: "PGPM",
                            to: ROUTES["PGPM"],
                        },
                        {
                            content: "Certification Courses",
                            to: ROUTES["CERTIFICATION COURSES"],
                        },
                        // {
                        //     content: "B. Com++ (Bangalore University)",
                        //     to: ROUTES["B. COM++ (BANGALORE UNIVERSITY)"],
                        // },
                        {
                            content: "B. COM Accelerator +",
                            to: ROUTES["B. COM Accelerator +"],
                        },
                    ],
                    uniqueClassName: "programs",
                },
                {
                    heading: "Placements",
                    menuLinks: [
                        {
                            content: "Placement Insights",
                            to: ROUTES["PLACEMENT INSIGHTS"],
                        },
                        {
                            content: "Placement Records",
                            to: ROUTES["PLACEMENT RECORDS"],
                        },
                        {
                            content: "Placement Recruiters",
                            to: ROUTES["PLACEMENT RECRUITERS"],
                        },
                    ],
                    uniqueClassName: "placements",
                },
                {
                    heading: "Faculty",
                    menuLinks: [
                        {
                            content: "Core Faculty",
                            to: ROUTES["FACULTY"],
                        },
                        {
                            content: "Industry Experts",
                            to: ROUTES["INDUSTRY EXPERTS"],
                        },
                        {
                            content: "International Faculty",
                            to: ROUTES["INTERNATIONAL FACULTY"],
                        },
                    ],
                    uniqueClassName: "Faculty"
                },
                {
                    heading: "Global Exposure",
                    menuLinks: [
                        {
                            content: "Global Exposure",
                            to: ROUTES["GLOBAL EXPOSURE"],
                        },
                        {
                            content: "International Associations",
                            to: ROUTES["INTERNATIONAL ASSOCIATIONS"],
                        },
                    ],
                    uniqueClassName: "Global"
                },
                {
                    heading: "About",
                    menuLinks: [
                        {
                            content: "Our B School",
                            to: ROUTES["OUR B SCHOOL"],
                        },
                        {
                            content: "Welcome Note",
                            to: ROUTES["WELCOME NOTE"],
                        },
                        {
                            content: "Rankings & Credentials",
                            to: ROUTES["RANKINGS CREDENTIALS"],
                        },
                        {
                            content: "Industry/knowledge Partners",
                            to: ROUTES["INDUSTRY/KNOWLEDGE PARTNERS"],
                        },
                    ],
                    uniqueClassName: "about-us",
                },
                {
                    heading: "Admissions",
                    menuLinks: [
                        {
                            content: "Admission Process",
                            to: ROUTES["ADMISSION PROCESS"],
                        },
                        {
                            content: "Apply Online",
                            to: "#!",
                            isNormalAnchor: true,
                            isTargetBlank: true,
                            onClick: unhidePopupModal,
                        },
                        {
                            content: "Pay Online",
                            to: ROUTES["PAY ONLINE"],
                        },
                    ],
                    uniqueClassName: "admissions",
                },
                {
                    heading: "AICTE",
                    menuLinks: [
                       
                       
                        {
                            content: "Feedback",
                            to: ROUTES["FEEDBACK"],
                        },
                        {
                            content: "Grievance",
                            to: ROUTES["GRIEVANCE"],
                        },
                        
                        {
                            content: "Pay Online",
                            to: ROUTES["PAY ONLINE"],
                        },
                        {
                            content: "LOA & EOA",
                            to: ROUTES["LOAANDEOA"],
                        },
                    ],
                    uniqueClassName: "aicte",
                },
            ]
        } as IMenus;
    }, [unhidePopupModal])
    const menusTwoArray = useMemo(() => {
        return {
            menus: [
                // {
                //     heading: "Others",
                //     menuLinks: [
                //         {
                //             content: "Blogs",
                //             to: ROUTES["BLOG"],
                //         },
                //         {
                //             content: "News & Events",
                //             to: ROUTES["NEWS_AND_EVENTS"],
                //         },
                //         {
                //             content: "Gallery",
                //             to: ROUTES["GALLERY"],
                //         },
                //         {
                //             content: "Contact Us",
                //             to: ROUTES["CONTACT US"],
                //         },
                //         {
                //             content: "Testimonials",
                //             to: ROUTES["TESTIMONIALS"],
                //         },
                //         {
                //             content: "FAQs",
                //             to: ROUTES["FAQS"],
                //         },
                //         // {
                //         //     content: "Blog",
                //         //     to: "#!",
                //         // },
                //     ],
                //     deepMenu: [
                //         {
                //             heading: "Internship",
                //             menuLinks: [
                //                 {
                //                     content: "Internship  Insights",
                //                     to: ROUTES["INTERNSHIP INSIGHTS"],
                //                 },
                //                 {
                //                     content: "Internship Records",
                //                     to: ROUTES["INTERNSHIPS RECORDS"],
                //                 },
                //                 {
                //                     content: "Internship Recruiters",
                //                     to: ROUTES["INTERNSHIP RECRUITERS"],
                //                 },
                //             ],
                //             dropdownPos: "left", uniqueClassName: "Internship"
                //         },
                //     ],
                //     uniqueClassName: "others",
                // },
            ]
        } as IMenus;
    }, [])
    const sidenavMenus = useMemo(() => {
        return {
            menus: [
                ...menusOneArray.menus,
                ...menusTwoArray.menus,
            ]
        } as IMenus;
    }, [menusOneArray, menusTwoArray]);

    // toggle the side menu
    const toggleSideNav = useCallback(() => {
        if (!sidenavRef.current) {
            return;
        }

        if (sidenav) {
            sidenavRef.current.style.transform = "translateX(-150%)";
            setSideNav(false);
        }
        else {
            sidenavRef.current.style.transform = "translateX(0)";
            setSideNav(true);
        }
    }, [sidenav]);

    // detect whether user clicks outside the side nav menu
    const detectOutsideClickSideNav = useCallback((e: any) => {
        // if side nav is present, side nav is opened already and user didn't click side nav nor its children... 
        if (sidenavRef.current && sidenav && sidenavRef.current !== e.target && !sidenavRef.current.contains(e.target)) {
            // close it
            toggleSideNav();
        }
    }, [sidenav, toggleSideNav]);

    // fit height of sidenav to window height
    const fitSideNavToWindowHeight = useCallback(() => {
        if (!sidenavRef.current) {
            return;
        }
        sidenavRef.current.style.height = window.innerHeight + "px";
    }, [])

    useEffect(() => {
        let main = document.getElementById("main") as HTMLElement;

        if (!headerRef.current) {
            return;
        }

        let sticky = headerRef.current.offsetTop;

        window.addEventListener("scroll", () => {
            if (!headerRef.current || !topbarRef.current) {
                return;
            }
            if (window.pageYOffset - topbarRef.current.clientHeight > sticky) {
                headerRef.current.classList.add("header-sticky");
                main.classList.add("main-padding");
            } else {
                headerRef.current.classList.remove("header-sticky");
                main.classList.remove("main-padding");
            }
        })
    }, [])

    useEffect(() => {
        fitSideNavToWindowHeight();
        document.addEventListener('click', detectOutsideClickSideNav);
        document.addEventListener('touchmove', fitSideNavToWindowHeight);
        document.addEventListener('resize', fitSideNavToWindowHeight);
        return () => {
            document.removeEventListener('click', detectOutsideClickSideNav);
            document.removeEventListener('touchmove', fitSideNavToWindowHeight);
            document.removeEventListener('resize', fitSideNavToWindowHeight);
        };
    }, [detectOutsideClickSideNav, fitSideNavToWindowHeight])

    return (
        <>
            <TopBar topbarRef={topbarRef} />
            <div className={"header"} ref={headerRef}>
                <div className={"header-navlink-wrapper large"}>
                    <div>
                        <NavLink {...homeNavLink} />
                    </div>
                    <DropdownArray {...menusOneArray} />
                    <DropdownArray {...menusTwoArray} />
                    <div>
                        <NavLink {...galleryNavLink} />
                    </div>
                </div>
                <div className={"header-navlink-wrapper normal"}>
                    <div className={"col-wrapper-3"}>
                        <div className={"col-1"}></div>
                        <div className={"col-1"}>
                            <div className={"logo-div"}>
                                <Link to={ROUTES["HOMEPAGE"]}>
                                    <picture>
                                        {Logo.webp && <source type={"image/webp"} srcSet={Logo.webp} />}
                                        <img
                                            src={Logo.type === "jpg" ? Logo.jpg : Logo.png}
                                            alt={Logo.alt ? Logo.alt : ""}
                                            width={Logo.w}
                                            height={Logo.h}
                                        />
                                    </picture>
                                </Link>
                            </div>
                        </div>
                        <div className={"col-1"}>
                            <button className={"button sidenav-trigger-button"} type={"button"} onClick={toggleSideNav}>
                                <i className={"material-icons"}>menu</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Sidenav
                toggleSideNav={toggleSideNav}
                menus={sidenavMenus.menus}
                navLinks={sidenavNormalLinks.navLinks}
                navLinksTwo={sidenavNormalLinksTwo.navLinks}
                sidenavRef={sidenavRef}
            />
        </>
    )
}

export default Header;