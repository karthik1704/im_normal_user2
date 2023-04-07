import anime from "animejs";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
    AchuthaJois, AmbikaVenkatesh, Chandrasekhar, Hemant, Ramya, Rekha, Satish, Soumya,
    SumaMahendrakar, VenkateshArakeri, Vinaychandra
} from  "../../Assets/Assets";
import { IImage, isInViewportThreshold } from "../../Utils/js/Utils";

interface IMember {
    img: IImage, name: string,
}
const Member = ({img, name}: IMember) => {

    const memberRef = useRef<HTMLDivElement>(null);
    const [animate, setAnimate] = useState(false);

    const handleScroll = useCallback(() => {

        if(!memberRef.current) return;
        if (isInViewportThreshold(memberRef.current, 20)) {
            setAnimate(true);
        }
    }, []);

    const animation = useCallback(() => {
        if (!memberRef.current) return;

        anime({
            targets: memberRef.current,
            translateY: [
                {value: "100px", duration: 0, delay: 0},
                {value: 0, duration: 1000, delay: 0},
            ],
            opacity: [
                {value: 0, duration: 0, delay: 0},
                {value: 1, duration: 1000, delay: 0},
            ],
            easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)'
        });

    }, [memberRef]);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("touchmove", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("touchmove", handleScroll)
        };
    }, [handleScroll])
    useEffect(() => {
        if (animate) {
            animation();
        }
    }, [animate, animation]);
    
    return (
        <>
            <div className={"member"} ref={memberRef}>
                <div className={"img-div"}>
                    <picture>
                        {img.webp && <source type={"image/webp"} srcSet={img.webp}/>}
                        {
                            img.type === "jpg" && <img src={img.jpg} alt={img.alt} width={img.w} height={img.h} />
                        }
                        {
                            img.type === "png" && <img src={img.png} alt={img.alt} width={img.w} height={img.h} />
                        }
                    </picture>
                </div>
                <div className={"content"}>
                    <h6>{name}</h6>
                </div>
            </div>
        </>
    )
}

const PatronsAndBoardMembers = () => {

    const membersData = useMemo(() => {
        return [
            { img: AchuthaJois, name: "Prof. Achutha Jois" },
            { img: AmbikaVenkatesh, name: "Prof.Ambika Venkatesh" },
            { img: Chandrasekhar, name: "Dr.Chandrasekhar Korapala" },
            { img: Hemant, name: "Mr.Hemanth Kumar K.J" },
            { img: Ramya, name: "Ms.Ramya. J" },
            { img: Rekha, name: "Ms.Rekha Ashwathnarayan" },
            { img: Satish, name: "Mr. Satish Naidu" },
            { img: Soumya, name: "Ms. Soumya" },
            { img: SumaMahendrakar, name: "Prof.Suma Mahendrakar" },
            { img: VenkateshArakeri, name: "Dr.Venkatesh Arakeri" },
            { img: Vinaychandra, name: "Mr.Vinaychandra Mahendrakar" },
        ] as IMember[]
    }, []);

    const membersJSX = useMemo(() => {
        return membersData.map((member, index) => {
            return (
                <div className={"mb-col-24 t-col-6 d-col-6"}>
                    <Member {...member}/>
                </div>
            )
        })
    }, [membersData]);


    return (
        <>
            <div className={"patrons-and-board-members"}>
                <h4 className={"heading"}>Patrons & Board Members</h4>
                <div className={"col-wrapper-24"}>
                    {membersJSX}
                </div>
            </div>
        </>
    )
}

export default PatronsAndBoardMembers;
