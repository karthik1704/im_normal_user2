import { useEffect, useMemo } from "react";
import { useLocation } from "react-router";
import {
    CommonFaculty,
    FacultyImagesWithContent, InternationalFacultyImagesWithContent,
} from "../../Assets/Assets";
import { PageLocation } from "../../Common/Components/Components";
import FacultyCard from "./FacultyCard";

import { BoxedJSXCards, IBoxedJSXCard, IBoxedJSXCards } from "../../Utils/js/Utils";

import "./Faculty.scss";
import { Helmet } from "react-helmet-async";

const IndustryExperts = () => {
    return (
        <>
            <div className={"industry-experts"} id={"industry-experts"}>
                <div className={"col-wrapper-24"}>
                    <div className={"hide-on-mb t-col-2 d-col-6"}></div>
                    <div className={"mb-col-24 t-col-20 d-col-12"}>
                        <div className={"card-panel"}>
                        <h4 className={"heading"}>Industry Experts</h4>
                        <div className={"table-div"}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Dr. Badrinath</td>
                                        <td>MBA, Ph,D (UGC – NET)</td>
                                    </tr>

                                    <tr>
                                        <td>Dr. Shivakumar</td>
                                        <td>MBA</td>
                                    </tr>

                                    <tr>
                                        <td>Mr. Sunder Ramboopalan</td>
                                        <td>MBA, Manager – Open Text</td>
                                    </tr>

                                    <tr>
                                        <td>Mr. Jayaraj Mehta </td>
                                        <td>MBA</td>
                                    </tr>


                                    <tr>
                                        <td>Mr. Raviraman</td>
                                        <td>MBA. Freelance Trainer</td>
                                    </tr>

                                    <tr>
                                        <td>A. Annapurna</td>
                                        <td>Head HR –Essilor Brands</td>
                                    </tr>

                                    <tr>
                                        <td>Hirendra Badhiye</td>
                                        <td>Northern Trust</td>
                                    </tr>

                                    <tr>
                                        <td>Farid Ahmed</td>
                                        <td>Sales Excellence</td>
                                    </tr>

                                    <tr>
                                        <td>Ravi K. Gowda</td>
                                        <td>Global Mergers</td>
                                    </tr>

                                    <tr>
                                        <td>Suresh P. Rao</td>
                                        <td>Director – Attitudes Learning Solutions</td>
                                    </tr>

                                    <tr>
                                        <td>Nithin Neel</td>
                                        <td>Human Resource Institute -  Singapore</td>
                                    </tr>

                                    <tr>
                                        <td>Dr. Arun Bhardwaj</td>
                                        <td>Founder &amp; Chief Mentor Happiness Technology</td>
                                    </tr>

                                    <tr>
                                        <td>Mr. Gopala Krishna</td>
                                        <td>Managing Director -  G P  Foods</td>
                                    </tr>

                                    <tr>
                                        <td>Lt. Gen. Ramesh Halgali</td>
                                        <td>PVSM, AVSM, SM (Retd)<br/>Former Deputy Chief of Army Staff</td>
                                    </tr>

                                    <tr>
                                        <td>Dr. N Murthy</td>
                                        <td>MBA, Ph.D,<br/>Head – Strategy and Marketing, Wellingkar Business School</td>
                                    </tr>

                                    <tr>
                                        <td>Mr. Aneesh Kumar</td>
                                        <td>MA, LLB, PGDIM<br/>Trainer, advocate and Yoga Guru</td>
                                    </tr>

                                    <tr>
                                        <td>Mr. Arjun Jaisimha</td>
                                        <td>PGDM – IIM Ahmedabad<br/>Senior Manager, Alti Source</td>
                                    </tr>

                                    <tr>
                                        <td>Mr. Karthik MS</td>
                                        <td>VP – vmvedu and Founding Partner – easypc.in</td>
                                    </tr>	

                                    <tr>
                                        <td>Mr. Amit Gupta</td>
                                        <td>IIT Chennai</td>
                                    </tr>	

                                    <tr>
                                        <td>Mr. Karthik C S</td>
                                        <td>MBA,Director -  Knowise Learning Academy</td>
                                    </tr>	
                                </tbody>
                            </table>
                        
                        </div>
                    </div>
                
                    </div>
                </div>
            </div>
        </>
    )
}

const Faculty = () => {
    const facultyCardsBoxData = useMemo(() => {

        let cards = FacultyImagesWithContent.map((f, i) => {
            return {
                children: <FacultyCard {...f} key={i}/>,
            } as IBoxedJSXCard;
        });

        return {
            cards: cards,
        } as IBoxedJSXCards;
    }, []);

    const internationalCardsBoxData = useMemo(() => {

        let cards = InternationalFacultyImagesWithContent.map((f, i) => {
            return {
                children: <FacultyCard {...f} key={i}/>,
            } as IBoxedJSXCard;
        });

        return {
            cards: cards,
        } as IBoxedJSXCards;
    }, []);

    const {hash} = useLocation();
    useEffect(() => {
        if (hash === "") {
            window.scrollTo(0, 0);
        }
        else {
            setTimeout(() => {
                const id = hash.replace("#", '');
                const elem = document.getElementById(id);
                if (elem) {
                    // elem.scrollIntoView({behavior: "smooth"});
                    const topPos = elem.getBoundingClientRect().top + window.pageYOffset - 85;
                    window.scrollTo({
                        top: topPos, // scroll so that the element is at the top of the view
                        behavior: 'smooth' // smooth scroll
                    })                      
                }
            }, 1000); // initally was zero(0ms), so change it back to 0 if 200 causes problems
        }
    }, [hash])

    return (
        <>
            <Helmet>
                <title>Faculty - AIMS IBS</title>
                <meta name="description" content="Faculty"/>
            </Helmet>
            <PageLocation img={CommonFaculty} locations={["HOME", "FACULTY"]} title={"FACULTY"}/>
            <div className={"faculty"}>
                <div className={"card-panel"}>
                    <h5>Esteemed Faculty & Industry Experts:</h5>
                    <p>Faculty at AIMS IBS are a dynamic pool of professionals who have vast and varied experience in the field of academics as well as industry. AIMS IBS has left no stone unturned in the effort to assemble a top-notch team of professionals who are clearly focused on the group's vision and share the institution's deep rooted commitment to delivering a quality learning experience to its students. They are supplemented by the carefully selected group of resource persons, each of whom is an expert and leader in their chosen field.</p>
                </div>
                <BoxedJSXCards {...facultyCardsBoxData}/>
                <IndustryExperts />
                <div id={"international-faculty"} className={"international-faculty"}>
                    <h4 className={"t-align-center"}>International Faculty</h4>
                    <BoxedJSXCards {...internationalCardsBoxData}/>
                </div>
            </div>
        </>
    )
}

export default Faculty;