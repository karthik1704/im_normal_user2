import React, { useCallback, useMemo, useState } from "react";
import { PageLocation } from "../../Common/Components/Components";
import { IImage, JSXModal } from "../../Utils/js/Utils";
import {
    KeyDifferentiators1,
    KeyDifferentiators2, KeyDifferentiators3, KeyDifferentiators4, KeyDifferentiators5, KeyDifferentiators6,
    KeyDifferentiators7, KeyDifferentiators8, KeyDifferentiators9, KeyDifferentiators10, KeyDifferentiators11,
    KeyDifferentiators12, KeyDifferentiators13, KeyDifferentiators14, KeyDifferentiators15, KeyDifferentiators16,
    KeyDifferentiators17, KeyDifferentiators18, KeyDifferentiators19, KeyDifferentiators20, KeyDifferentiators21, CommonWhyAimsIbsTwo,
} from "../../Assets/Assets";

import "./KeyDifferentiators.scss";
import { Helmet } from "react-helmet-async";

interface IReason {
    content: React.ReactNode, modalContent?: React.ReactNode, heading: string, img: IImage,
}
const Reason = ({content, modalContent, heading, img}: IReason) => {
    const [isShown, setIsShown] = useState(false);

    const toggleShown = useCallback(() => {
        setIsShown(!isShown);
    }, [isShown]);

    return (
        <>
            <div className={"reason"}>
                <div className={"card-panel"}>
                    <div className={"col-wrapper-24"}>
                        <div className={"mb-col-24 t-col-10 d-col-10"}>
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
                        </div>
                        <div className={"mb-col-24 t-col-14 d-col-14"}>
                            <div className={"heading"}>
                                <h6>{heading}</h6>
                            </div>
                        </div>
                    </div>
                    <div className={"content-div"}>
                        {content}
                    </div>
                    {
                        modalContent &&
                            <div>
                                <div className={"modal-trigger-button"}>
                                    <button className={"button bg-deep-orange-600"} onClick={toggleShown}>KNOW MORE</button>
                                </div>                                
                                <JSXModal toggleCallback={toggleShown} isShown={isShown}>
                                    <p>{modalContent}</p>
                                </JSXModal>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

const KeyDifferentiators = () => {
    const reasonData = useMemo(() => {
        return [
            {
                heading: "1. First of its kind Industry Integrated Practical Management Program",
                content: (
                        <p>AIMS IBS is India’s First and only B school which offers Industry Integrated program. With 21 years of strong establishment, a legacy of 8000+ MBA students, Alumni working in 13 countries and 23 cities at Top MNC companies of India and Abroad comprise our rich heritage. A Small step taken each time contributes to Big changes leading to Bigger results. A motivation and a dream that leads to a Continuous hard work is nothing but ‘Quality’ at AIMS IBS.</p>
                    ),
                modalContent: (
                    <>
                        <p>AIMS IBS is India’s First and only B school which offers Industry Integrated program. With 21 years of strong establishment, a legacy of 8000+ MBA students, Alumni working in 13 countries and 23 cities at Top MNC companies of India and Abroad comprise our rich heritage. A Small step taken each time contributes to Big changes leading to Bigger results. A motivation and a dream that leads to a Continuous hard work is nothing but ‘Quality’ at AIMS IBS. Inorder to ensure future Managers getting future-ready AIMS IBS puts the best practices into action so that students graduate with successful MBA+PGPM in two years of study. As an exclusive advantage from AIMS IBS the students get a degree from a recognized university plus hands on industry endorsed training and certificate of PGPM. Industry Integrated training becomes an important thing which makes your resume the recruiters’ Favourite.</p>
                        <p>Industry Integrated concept is an edge over conventional Management Programmes. The program delivery with 70% practical approach sharply focuses on aspects like Profile Mapping, Skill-gap analysis and industry analysis which enables the students scale up to the industry demands. Students get global exposure through International exchange and internship programmes which form an integral part of the industry Integrated curriculum.</p>
                        <p>Theory is a mandatory aspect of University study. And the same classroom study is taken to better exposure in professional world through LIVE projects, Internship, Case Study, Industry visits, Projects, Seminars, Debates, Workshops etc. It aims giving a better mileage to study, understand and implement the concepts in virtual reality. Such an approach ensures that our students are already familiarized with the real industry working environment which makes them ‘apply’ and perform to the best of their abilities across any industry. Students get confident facing exams while writing papers and even in interacting with seasoned corporate across industry.</p>
                    </>
                ),
                img: KeyDifferentiators1
            },
            {
                heading: "2. Unique Induction Program for New Joinee’s - Roots to Fruits",
                content: (
                        <p>A 4 weeks Induction and orientation program for the Juniors’ who enter the campus from different states is to make their entry and journey a smooth takeoff. Getting Acquainted, Getting Ahead, Learnings in Management and so on are the key ingredients of the program. AIMS IBS believes in a life-long learning process. The major part of the program is executed by the corporate intervention so that Industry Integration starts deep rooted from Day one.</p>
                    ),
                modalContent: (
                    <>
                        <p>All we need to do is to instil the passion for learning from experiences. Our 4 weeks induction program is a students’ eye-opener for their future goals and pursuits. It’s a result of great efforts, magnanimous thinking, struggle to perfection and a lot of working and re-workings. It encourages the student to be an important part of a global community and expand their horizons. Our induction programme is always rated 10 on 10.</p>
                    </>
                ),
                img: KeyDifferentiators2
            },
            {
                heading: "3. Outbound & Adventure Learning Program",
                content: (
                        <p>Sky is the Limit for Anything under the Sun. Outbound learning is a part of induction program at AIMS IBS that focuses on intra and interpersonal rapports. It is a process for self-discovery, serious fun, making new friends, while living amidst serene nature, on the outskirts of Bangalore. The program is led by trained facilitators where series of increasingly difficult kinaesthetic and cognitive activities will be conducted which challenge personal and group limits within a supportive environment.</p>
                    ),
                modalContent: (
                    <>
                        <p>Sky is the Limit for Anything under the Sun. Outbound learning is a part of induction program at AIMS IBS that focuses on intra and interpersonal rapports. It is a process for self-discovery, serious fun, making new friends, while living amidst serene nature, on the outskirts of Bangalore. The program is led by trained facilitators where series of increasingly difficult kinaesthetic and cognitive activities will be conducted which challenge personal and group limits within a supportive environment.</p>
                        <p>The program will help participants to discover improved capabilities, life skills like Problem solving, Judgment, decision making, Leadership and Cooperation, Communication skills, Trust, Self-esteem and high confidence levels. The program helps us to spend quality time with future managers, understand the deciding parameters, gel-well techniques and thus also initiate the plan for a secured career. At AIMS IBS Outbound Learning is one of the nerve accelerating programs. It not only exposes the student to a different environment, trains to challenges, helps to excel skills but also teach life lessons of How to Win-over any situation with a concrete Plan B always. Its never about Loosing. Its always Think What Next..</p>
                    </>
                ),
                img: KeyDifferentiators3
            },
            {
                heading: "4. Faculty of National & International Repute",
                content: (
                        <p>Our Faculty of national and international repute comprise a strong Academic support who impart uncompromised knowledge flow to the students. At AIMS IBS we stretch ourselves to a great extent to bring you the best faculty members, best training, best support and the best mentoring. We scrupulously pick your mentors and no wonder, every team member here would have an illustrious track record in their own domain of expertise. With papers published in prestigious national, international publications and seminars, our faculty bring in a wealth of experience and diverse knowledge in the latest aspects of management in different industries.</p>
                    ),
                modalContent: (
                    <>
                        <p>Our Faculty of national and international repute comprise a strong Academic support who impart uncompromised knowledge flow to the students. At AIMS IBS we stretch ourselves to a great extent to bring you the best faculty members, best training, best support and the best mentoring. We scrupulously pick your mentors and no wonder, every team member here would have an illustrious track record in their own domain of expertise. With papers published in prestigious national, international publications and seminars, our faculty bring in a wealth of experience and diverse knowledge in the latest aspects of management in different industries.</p>
                        <p>Our faculty, in other words is a single window to ‘anything of moment’ in management. We also constantly invite acclaimed faculty and lecturers National and International from various streams to interact with our students which not only adds the knowledge base of our students but also gives them space for exposure and selecting the competent specialisation for themselves.</p>
                    </>
                ),
                img: KeyDifferentiators4
            },
            {
                heading: "5. Innovative & Contemporary Pedagogy",
                content: (
                        <p>Innovative Pedagogy followed at AIMS IBS is contemporary and well accepted by industries. The 70% Practical Integrated training methodology includes Live Projects, Idea Box, Management Fests, National Conferences, Emerging Business Concept Analysis, Industry experts Mentoring, Activities by Entrepreneurship Cell, CSR Activity, Certification Courses & skill based training, Comprehensive News Analysis, Case Study Sessions and discussions, Debates, Exclusive Presentations, Corporate Lecture Series, Company Visit & Team Projects.</p>
                    ),
                img: KeyDifferentiators5
            },
            {
                heading: "6. A Unique SWOT initiative",
                content: (
                        <p>SWOT analysis is a very important requirement for a management graduate. It enables the mentors to gauge the students Strengths / Weaknesses / Opportunities / Strengths. It is taken up in 3 levels by a team of Internal and a team of External members which aims to understand each individuals SWOT and measures to handle the challenges, manage the opportunity and deal with the threats. This activity is monitored by senior faculties and corporate executives to bring in an expected and creative value added output.</p>
                    ),
                modalContent: (
                    <>
                        <p>It is always observed that students without doing their SWOT, they jump into the job decision and it sometimes becomes decisive. Hence SWOT analysis is not only an opportunity to help decide their career avenues but also to self-assess themselves better and start their respective training accordingly.</p>
                    </>
                ),
                img: KeyDifferentiators6
            },
            {
                heading: "7. Mentoring Minds by Industry Experts",
                content: (
                    <>
                        <p>Build your expertise straight by the experts. AIMS IBS pools in a specialized team comprising of HR professionals. Pivotal members from the hiring department of various industries will address the students and mentor groups of students to perform up to latest industry demands and standards. Mentors personalize the knowledge transformation giving them different career alternatives and take the responsibility of grooming students until they are placed.</p>
                        <p>Few students under One mentor also gives an individual focus to students. Such a concept is unique at AIMS IBS where the students get mentored directly by industry experts and experienced faculty orientation. Mentoring by Corporate Council gives a better edge to the student's dimension towards studies and work life.</p>
                    </>
                ),
                img: KeyDifferentiators7
            },
            {
                heading: "8. Dual Specialisation",
                content: (
                    <>
                        <p>Todays students are very vibrant and their inquisitive levels are too high. Their perspective to learn, explore and experiment has made them more curious and energetic. We really cannot predict our future and sometimes it is difficult to decide on Cross roads. Hence an opportunity to select 2 specialisations is provided to the students so that they can learn the combination better.</p>
                        <p>Dual Specialisation plays an important role in Management studies and job. It makes them alternative ready, recession proof,...</p>
                    </>
                ),
                modalContent: (
                    <>
                        <p>Dual Specialisation plays an important role in Management studies and job. It makes them alternative ready, recession proof, and easy during competitions due to diversified skill sets. Also it increases their accept ance ability, knowledge base and parallel thinking to a greater extent. Dual Specialisation is a boon for students who believe in Multiskilling.</p>
                        <p>Organisations today need the marks cards only as a Hall ticket to enter the Interview premises. But all that matters is their researching skills, attitude, knowledge, decision and presentation skills etc. A student should know the art of switching over and continuing, as life doesn’t give a Halt and Stop option.</p>
                    </>
                ),
                img: KeyDifferentiators8
            },
            {
                heading: "9. Intense Live & capstone Projects",
                content: (
                        <p>LIVE projects are an integral part of Management studies. These projects create a different futuristic situation for the students and help them to face the job requirement. They give Hands on experience to students and showcase the real-time challenges that they might face while working. The prime objective is to groom students with unfamiliar situations, decision making ability, problem solving attitude, ability to deal with situations, face challenges, handle team spirit, anticipate contingencies, predict surprises, work with astonishing facts and encounter trouble shooting.</p>
                    ),
                modalContent: (
                    <>
                        <p>As an objective of practical studies AIMS IBS works on Intense LIVE project and capstone projects in every subject throughout the course for students. It leads to better fine-tuning skills interms of making them corporate ready which is mandatory for any student to make Management studies a remarkable learning experience. Experienced faculty, corporate Guru, Senior & Super Senior interactions, Study Circles, Mentors and each member put their complete expertise to make the capstone project a memorable and relished experience for the student</p>
                    </>
                ),
                img: KeyDifferentiators9
            },
            {
                heading: "10. C 2 C = Campus to Corporate Program",
                content: (
                        <p>C2C-Campus to Corporate is the biggest initiative of AIMS IBS wherein the students are confronting their dream companies and they are trained with a specific attention firstly on their list of Chosen companies. Blazing theirown trail without fail is the mantra. The C2C program is designed in such a way exclusively at AIMS IBS so that the students get trained and specialized as per the specific industry needs and demands considering their individual SWOT analysis. Students are oriented to choose their specialization and are guided by the expert team not only about the opportunities available in a particular specialisation but also way ahead.</p>
                    ),
                modalContent: (
                    <>
                        <p>C2C introduces students to the real world of work life and trains, leads, grooms and settles them with varied alternatives. Institute provides integrated additional certifications which will enhance the skills and opens up broad gateway of opportunities. The add-on certificate programs offered are assisted by industry partners like Google, Microsoft, CII,IBM SPSS,NSE,SAP,PMI.IIMM & NEN. The certificates offered will help to bridge SKILL GAP. Only an MBA or Only above certificates would not do a perfect job hence a combination of both becomes essential. These are mandatory requirements these days by corporate to be a right fit for the job. These courses bridged along with academia ensure students place themselves better than their peers, have a strong resume and increase their probability of a common question in interview “Why should we select U for this job”. Hence considering the need-of-the-hour today students should not only be good in academics or particular skills. It should be a combination of both with a right and perfect match. Our expertise should always be supported by certificates so that skill doesn’t become obsolete any point in time and we remain right projected in our jobs.</p>
                    </>
                ),
                img: KeyDifferentiators10
            },
            {
                heading: "11. Special orientation on how to choose specialization",
                content: (
                        <p>Be a specialist in specializing… Choosing a specialization has always been a matter of choice. The AIMS IBS orientation is conducted by stalwarts with over two decades of illustrious experience in varied industries helping students find the right specialization which matches their aptitude, aspirations and ambition. Good bye to influences., U be YOUR opinion-leader and take a well thought decision on what makes your career a perfect career in its true sense.</p>
                    ),
                modalContent: (
                    <>
                        <p>Be the choice maker! How do you choose your specialization in Management? HR, Marketing or Finance, IT & IB and many more in the list to choose. An orientation is given to students about the different specialisations available. In addition to that, students are encouraged to discuss their future planning with their specific choice of specialisation. A platform is created for students to discuss in detail about the different opportunities available and the growth avenues so that they can confidently select a particular specialisation from the box of emerging specialisations. Be it in Retail, Supply Chain Management, Banking & Insurance, Health Care Management, Travel & Tourism, International Business, Information System and what not. Specialization at AIMS IBS is a road map to actualize your ambitions, mobilise your dreams, socialise your aspirations.</p>
                    </>
                ),
                img: KeyDifferentiators11
            },
            {
                heading: "12. Global Exposure",
                content: (
                        <p>Global exposure is an intrinsic part of study at AIMS IBS. International Certifications and Exchange Program with a global exposure enable students getting mentored as future ‘Global Indian’. Management program at AIMS IBS exposes students to a global environment. Introducing students to a different country, their culture, strengths, GDP, Lifestyle, importance to time, Work-life balance etc induces a sense of responsibility and commitment in students. They initiate to look at a bigger picture of life. They expand their dreams and start looking at the world rather than their village, town, district, city, state and country.</p>
                    ),
                modalContent: (
                    <>
                        <p>Students can opt for a mere global visit, or an exchange program of studying there for a duration, or do their Internship in a different country, or they can also opt for foreign Placements. Certification & exchange programme with partner universities in UK, France, Singapore and other countries could give them a better edge towards opportunities. Internationally recognized certifications provided for the same would enable the students make the best out of such exchange programs to enhance their profile and career.</p>
                    </>
                ),
                img: KeyDifferentiators12
            },
            {
                heading: "13. Focus on Education 4.0 & Industry 4.0 requirements",
                content: (
                        <p>AIMS IBS focus and offers programs that match the requirements of Education 4.0 and Industry 4.0 norms. Thus enables students to be INDUSTRY FIT. Industrial Revolution 1 , 2, 3 are over. We are landing into IR 4. And it emphasise more on student to be equipped with Industry required skills which the Industry can really accept for the student have a stable career. The initiative is being very unique and bridges the Gap between Industry and Academia.</p>
                    ),
                modalContent: (
                    <>
                        <p>The courses are selected based on the recommendation of industry 4.0 and offered to the students by assessing the competencies. Students are trained to choose learning interests, stretch their performance criteria and work hard to achieve the desired goals. Right effort makes any task easier. So difficulties barge only when preparation is NOT 100%.</p>
                    </>
                ),
                img: KeyDifferentiators13
            },
            {
                heading: "14. Industry Expert Talks",
                content: (
                        <p>Industry Integrated MBA is all about a perfect blend of Theory and Practical sessions. AIMS IBS intents to connect students with Corporates on a regular basis so that students get a wave of how professionals act, react and pursue things. Students are given an ambience and atmosphere for them to see their tomorrow more clearly and work towards strengthening it. Once in a month Industry Experts are invited to the Campus for a Student Interaction. Objectively the session is planned to enable student confidence, out-of-the-box thinking and reassuring their expertise. Sessions are conducted on relevant themes like : Business Analytics, Artificial Intelligence, Data Sciences, Digital Marketing, 6 Sigma, Project Management etc</p>
                    ),
                img: KeyDifferentiators14
            },
            {
                heading: "15. Employability Assessment, Pre Placement, JD Analysis & Soft skills training",
                content: (
                        <p>AIMS IBS has clear outcomes and deliverables from the programs offered. Our expert team from industry and academia continuously work on bringing value addition to the student’s career development. Students are regularly assessed on attitude, aptitude, skills and soft skills through scientifically designed Employability Assessment tools. Based on the result of assessment every student will be offered pre placement and soft skills training which will enhance the success ratio of getting selected in top companies.</p>
                    ),
                modalContent: (
                    <>
                        <p>One of the most important things that are usually missed in most of the B-schools is orientation to Job descriptions. Placement department of AIMS IBS ensures orienting students and training them on various Job descriptions in specialisations like Marketing, Finance, HR & Operations etc. So from the semester 1 till students are placed, each student will undergo training on at least 150 plus JD’s. The rigorous training on JD’s by experts will lead to excellent success ration when companies conduct interviews.</p>
                        <p>The 3 M Program by Career Development Cell is a highly specialised 3 M (Mirror, Mapping & Mentoring) activity. It is a unique approach of AIMS IBS which helps students to understand themselves, map the skill gap and mentoring for a career and industry expectation. Workshops on personality development, soft skills and English language proficiency, professional etiquette are conducted regularly to help students add value to their profiles. Career Development Cell at AIMS IBS has an extra-ordinary record of placing students in prime positions with prestigious companies in India and abroad. The focused efforts made during the study period enables students to have a professional outlook and a clear view of the choice of career. With strong Industry networking, AIMS IBS gives an advantage to the students to step forth into the industry with confidence and purpose.</p>
                    </>
                ),
                img: KeyDifferentiators15
            },
            {
                heading: "16. Placement (An Opportunity to work and study)",
                content: (
                        <p>The Industry integrated MBA program offered by AIMS IBS is a rigorous 2 year program that offers immense value to aspi1rants through On-job Experience and potential to earn while studying. 70% practical study is all about Perfection and professionalism through Practice. Experience and only experience can guide you in your path to be a leader. The program is designed to offer hands on experience to the students on job so that they are equipped with Practical skills and insights</p>
                    ),
                modalContent: (
                    <>
                        <p>The program delivery includes 2 Minor projects and 1 Major project followed by Job Experience in final Sem. Work while study aims at making student gain real work experience. This also helps student to start earning even before they complete the program. The work timings give them a learning and confidence of their future growth performances. This initiative of placing students early has received good response from students and parents and given a better edge to Management studies. At the end of the day student will be able to earn while studying on the programme and be in a better position to decide his future growth.</p>
                    </>
                ),
                img: KeyDifferentiators16
            },
            {
                heading: "17. Strong Alumni Network",
                content: (
                        <p>AIMS IBS with a strong intent to support all students with Right placements has been proving its credentials by maintaining 100%* placement record. Students are given continuous placement opportunity unless they Opt-out-of-Placement activity to continue further studies, business option, health hazard etc. AIMS IBS always offers individualised support to all students based on their SWOT analysis and make sure every student gets the deserving career and job. Students will be mentored on the program so that they are skilled properly to get in to right career.</p>
                    ),
                modalContent: (
                    <>
                        <p> The college also considers students for multiple placement offers so that the student gives his best to the organisation where he works. Outstanding placements & Strong Alumni Network is a result of a historic relationship that the Institute maintains with the students. Today at AIMS IBS corporate network of our Alumni itself is with more than 8000+ students and the best of companies spread across India & Abroad. AIMS IBS alumini are placed in best of Indian and global corporate scripting their own success stories. We are proud about our large pool of alumni who have succeeded in their career in various companies across globe.. Today AIMS IBS has alumni working in more than 23 cities and 13 countries making us proud in the industry.</p>
                    </>
                ),
                img: KeyDifferentiators17
            },
            {
                heading: "18. Annual Events and EVENT of the Month",
                content: (
                        <p>When we talk about giving exposure, additional knowledge, creative thinking skills, managerial abilities, sportsmanship, a desire to achieve, a deserving attitude, a go-getter and above all a positive spirit in a student.. it is very essential that we give them such an environment to perform and get the ground realities. There are a number of events organised by the college across the year on a monthly basis for the students to make their choice first and give the best output.</p>
                    ),
                modalContent: (
                    <>
                        <p>The Event of the month is such an initiative which aims at giving opportunity and hands-on to the students with an enterprising activity every month which is a small step towards introducing him to the external world and making more competent. Its not about preparing for the contingencies but about building a better planned tomorrow.</p>
                    </>
                ),
                img: KeyDifferentiators18
            },
            {
                heading: "19. International Internships & Industry Visits & Exchange Programs",
                content: (
                        <p>AIMS IBS strives to be on the way to be a Global leader apart from globally acclaimed programs which instil an international perspective, AIMS IBS also has internship programs inbuilt in its curriculum which offer the student internships with leading MNCs worldwide. Global Exchange programs which value adds their experience and profile. This enables the students gain professional knowledge about changing work pattern in MNCs worldwide. AIMS IBS arranges industry visits and trips which provide a practical testing ground for students to apply, imbibe and push the frontiers of what they have acquired methodically and practically.</p>
                    ),
                modalContent: (
                    <>
                        <p>Adding on to the certificates and visit experiences, students show their transformation skills in terms of confidence, knowledge, ability to sustain, urge to learn etc. The hands-on-experience of Internships, projects and Industrial visits are an eye opener for students to draw a thin line difference in theory and practical. They start assessing the better ends of learning and diagnosing competition very closely.</p>
                    </>
                ),
                img: KeyDifferentiators19
            },
            {
                heading: "20. Scholarship and Special Recognition to Meritorious Students",
                content: (
                        <p>Recognising meritorious students is a strong initiative at AIMS IBS wherein students are supported financially, as well as they are given a platform and recognised by eminent personalities. Selected students also gain accommodation support from the management.This lays a strong foundation for them to excel further. With a good intent to support and promote students to perform better and an extension to the students who deserve a hand-hold is supported accordingly so that they don’t lose an opportunity to learn, exhibit and sustain due to any constraints or circumstances.</p>
                    ),
                img: KeyDifferentiators20
            },
            {
                heading: "21. Program with Best Return on Investment",
                content: (
                        <p>AIMS IBS being most innovative institute offering contemporary and professional programs along with MUST NEED certification courses and MUST HAVE industry Exposure and learning. We are one amongst those very fe institutes which are offering VALUE for investment made by students. Our program objective is to offer best value and best return on investment so that students are confident of gaining earning advantage while they are learning the program. This unique opportunity to work during last semester gives tremendous confidence to students and parents so that student s can repay their education loans easily without taking parents help.</p>
                    ),
                img: KeyDifferentiators21
            },
        ] as IReason[];
    }, []);

    const reasons = useMemo(() => {
        return reasonData.map((r, i)=> {
            return (
                <div className={"mb-col-24 t-col-24 d-col-12"} key={i}>
                    <Reason {...r} />
                </div>
            )
        })
    }, [reasonData])

    return (
        <>
            <Helmet>
                <title>Key Differentiators - AIMS IBS</title>
                <meta name="description" content="Key Differentiators"/>
            </Helmet>
            <PageLocation img={CommonWhyAimsIbsTwo} locations={["HOME", "KEY DIFFERENTIATORS"]} title={"KEY DIFFERENTIATORS"}/>
            <div className={"key-differentiators"}>
                <h5 className={"t-align-center"}>21 Reasons To Choose Our B School</h5>
                <div className={"col-wrapper-24"}>
                    {reasons}
                </div>
            </div>
        </>
    )
}

export default KeyDifferentiators;