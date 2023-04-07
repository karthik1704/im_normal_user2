import { Link } from "react-router-dom";
import { CommonExpereince } from "../../../Assets/Assets";
import { ROUTES } from "../../Globals";
import "./Programs.scss";

const ProgramsCard = () => {
    return (
        <>
            <div className={"programs-card"}>
                <div className={"card-panel"}>
                    <h4 className={"heading"}>Programs</h4>
                    <p className={"content"}><Link to={ROUTES["INDUSTRY INTEGRATED PROGRAM"]}>Industry Integrated Program</Link></p>
                    <p className={"content"}><Link to={ROUTES["MBA (BANGALORE UNIVERSITY)"]}>MBA</Link></p>
                    <p className={"content"}><Link to={ROUTES["PGDM"]}>PGDM</Link></p>
                    <p className={"content"}><Link to={ROUTES["PGPM"]}>PGPM</Link></p>
                    <p className={"content"}><Link to={ROUTES["CERTIFICATION COURSES"]}>Certificate Courses</Link></p>
                    {/* <p className={"content"}><Link to={ROUTES["B. COM++ (BANGALORE UNIVERSITY)"]}>B.Com++</Link></p> */}
                    <p className={"content"}><Link to={ROUTES["B. COM Accelerator +"]}>B. COM Accelerator +</Link></p>
                </div>
            </div>
        </>
    )
}

const ProgramsDescription = () => {
    return (
        <>
            <div className={"programs-description"}>
                <h4 className={"heading"}>Program Blended</h4>
                <h4 className={"heading"}>With Industry 4.0</h4>
                <h4 className={"heading"}>& Education 4.0 Requirements</h4>
                <Link className={"button bg-deep-orange-600"} to={ROUTES["PGDM"]}>Learn More</Link>
            </div>
        </>
    )
}

const Programs = () => {

    // const programsStyle = {
    //     backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('"+ ProgramsBgOne.jpg +"')",
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    // }

    return (
        <>
            <div className={"programs"}>
                <div className="img-div">
                    <picture>
                        {CommonExpereince.webp && <source type={"image/webp"} srcSet={CommonExpereince.webp} />}
                        {
                            CommonExpereince.type === "jpg" && <img src={CommonExpereince.jpg} alt={CommonExpereince.alt} width={CommonExpereince.w} height={CommonExpereince.h} />
                        }
                        {
                            CommonExpereince.type === "png" && <img src={CommonExpereince.png} alt={CommonExpereince.alt} width={CommonExpereince.w} height={CommonExpereince.h} />
                        }
                    </picture>
                </div>
                <div className={"inner col-wrapper-24"}>
                    <div className={"mb-col-2 t-col-2 d-col-2"}></div>
                    <div className={"mb-col-20 t-col-20 d-col-8"}>
                        <ProgramsCard />
                    </div>
                    <div className={"mb-col-2 t-col-2 hide-on-d"}></div>
                    <div className={"mb-col-2 t-col-2 hide-on-d"}></div>
                    <div className={"mb-col-20 t-col-20 d-col-12"}>
                        <ProgramsDescription />
                    </div>
                    <div className={"mb-col-2 t-col-2 hide-on-d"}></div>
                </div>
            </div>
        </>
    )
}

export default Programs;