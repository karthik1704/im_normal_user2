import { useMemo } from "react";
import {
    TestimonialRangan, TestimonialAbhishekPrakash, TestimonialAbysonThomas, TestimonialAiligaShravanthi, 
    TestimonialAmruthaPawar, TestimonialAppthiriSasiKiran, TestimonialBaluMahendra, TestimonialChandraSekharKorapala,
    TestimonialChintanGoyal, TestimonialHarshalSonone, TestimonialIndranilGanguly, TestimonialJayeshLakhani,
    TestimonialKavyaShreeR, TestimonialMaheshDabhi, TestimonialManishKumar, TestimonialPrasanth,
    TestimonialRajeshBabuV, TestimonialSaakshiGupta, TestimonialSagarGadibidi, TestimonialSaiSandeepY, TestimonialSanaMerchant,
    TestimonialSashikanthNayak, TestimonialShashwat, TestimonialSreekanthReddy, TestimonialSumaAlapati, TestimonialTLMonica,
    TestimonialTVVSubramanyam, TestimonialTusharMistry, TestimonialVishnuTej, TestimonialZameer, CommonTestimonials, 
} from "../../Assets/Assets";
import { PageLocation } from "../../Common/Components/Components";
import AlumniTestimonialCard, { IAlumniTestimonialCard } from "./AlumniTestimonialCard";

import { BoxedJSXCards, IBoxedJSXCard, IBoxedJSXCards } from "../../Utils/js/Utils";

import "./AlumniTestimonials.scss";
import { Helmet } from "react-helmet-async";

const AlumniTestimonials = () => {
    const testimonialCardsData = useMemo(() => {
        let _testimonialCardsData = [
            {
                img: TestimonialZameer, name: "Zameer", companyName: "Northen Trust Bank",
                content: "It has been my pleasure and luck that I was part of this college which helped me in every way to improve and gave me every opportunity to use my potential in order to overcome my weaknesses. In today’s materialistic world it is good to have such institution which focuses on student’s development rather than having business motive. It is the Institute which believes in Symbiotic relationship having win- win motive. At last I am obliged and thankful to the entire college for placing me in one of the TOP MNC.",
            },
            {
                img: TestimonialVishnuTej, name: "Vishnu Tej", companyName: "Wipro",
                content: "I had a very good Experience, Exposure and Memories in my two year of MBA at this college Right from the beginning of the Ice breaker session on the first week of college to End of Placements session, fortunate enough to get trained and motivated by experienced professionals. I was provided an excellent opportunity to work with well know organizations like DTDC Express Limited and LnT Infotech for my internship which finally carved the path to get placed in a well known organisation.",
            },
            {
                img: TestimonialTVVSubramanyam, name: "TVV Subramanyam", companyName: "Concorde",
                content: " My experience at my college was like a great milestone for me, through which I got an opportunity to enter Corporate World. Learning here was diverse, value adding and enriching to survive in life. Thanks to the college for giving me the great opportunity and making me realise my potential to be a good manager and a leader.",
            },
            {
                img: TestimonialTusharMistry,
                name: "Tushar Mistry", companyName: "MFI group in Uganda, Africa",
                content: "I have completed MBA in 2016 from this college.  have always guided and shared my experience with people to walk on the right path. As i have tasted both (sweetness and bitterness) of various path walked on. I must say joining this college and walking through this smooth/sweet journey was life changing. Always remember, Institutes will be successful with students giving their best and students can only be successful when they have chosen right institute. I choose the right one.",
            },
            {
                companyName: "Dellas",
                img: TestimonialTLMonica, name: "T L Monica",
                content: "Right from the time I started searching for B schools, I heard about this college. The key points that caught my attention about the college are it’s reputation and it’s position among top B schools. The college  has been nothing less than what I had hoped for. Supportive seniors and faculty, quality education, real world experiences, and amazing friends. The growth I have seen in myself due to this college, is amazing. My sincere thanks to all the Faculty members, mentors and everyone of this big family for their support. I'm carrying along with me beautiful memories of this place and will always cherish them. Thank you everyone for making this journey so pleasant.",
            },
            {
                companyName: "PWC",
                img: TestimonialSumaAlapati, name: "Suma Alapati",
                content: "Education is the most powerful weapon which you can use to change the world and I am proud to say that such education is provided by our college. My college helps in utilising the opportunities in the best way possible. My experience at my college helped me in identifying my strengths and focus on the areas of improvements which helped in getting the best opportunity during placements. Journey here was the best part and the best step of my career. I am proud to be a part of this college.",
            },

            {
                companyName: "L&T Technology Services",
                img: TestimonialShashwat, name: "Shashwat Chhetry",
                content: "My college is a place where it all began. Feels like yesterday that I became a part of something that would stay with me for eternity and every time I think of it, brings a pleasant smile. Everything that I am today, owes a major part of it to this place. Right from the very beginning, we were taught to dream big and always aim for the stars. The best part about being a part here is that by the time curriculum starts, we tend to know everyone so well that the learning experience eliminates the fear of losing. The ice breaking program “Roots to fruits” is designed in a way that makes us familiar of our surroundings, our peers, our guides and support in a manner that we begin to feel for one another like one big family. I have earned my friends here, I have earned my passion here and most of all I have earned my dream here. My college  is a place that teaches life lessons through management principles and places the stearing on your hands, it will then depend on you how and where to steer your life to. I would like to thank Directors and my batch mates, a big shout out to all of you for making my time here a wonderful one.",
            },
            {
                companyName: "Vodafone",
                img: TestimonialAppthiriSasiKiran, name: "Appthiri Sasi Kiran",
                content: "I am very much happy to be a student of this college. I was blessed with rich experienced Professors. Great support from Management in every situation. They provided good orientation towards the market opportunities available in job market in different sectors. I'm very much satisfied with the MBA program. With this great support, I became an entrepreneur and achieved my dream and started my own Vodafone Mini store in Tirupathi. Thank you to my college.",
            },
            {
                companyName: "TCS",
                img: TestimonialSashikanthNayak, name: "Sashikanth Nayak",
                content: "I‘m very fortunate to be the alumni of this college. The Institute has provided me the immense growth opportunity to excel in my professional life. College has played a vital role in churning out professionals from aspirants.. I would like to share the uniqueness of the college to the world so that other students like me can make the most of it. Management and the faculty commitment to the students development is commendable and dependable. Industry aligned training program here  makes us to be competitive and employable. Multiple opportunities for placements till the student gets satisfaction & best results.",
            },
            {
                companyName: "Entrepreneur & Corporate Trainer",
                img: TestimonialSanaMerchant, name: "Sana Merchant",
                content: "I consider that joining this college for MBA was one of the best decisions of my life. After graduation, I had clarity on doing my Masters to provide me the foundation for entering the corporate world. However, the journey throughout the course gave me the right focus and enabled me to become an Entrepreneur. Highly motivated Professors and Faculty taught us not only the Syllabus but also soft skills and ethics that have direct application in our professional lives. I accepted the offer from Finnastra after completing my internship and eventually handled a responsibility of Client Engagement at US and Pan-India as my last role before moving on to having my own Start-up. My message to fellow juniors is that a plethora of opportunities will be available at your disposal, which you may not realize now, but try to utilize them to your max benefits.",
            },
            {
                companyName: "PWC",
                img: TestimonialSaiSandeepY, name: "Sai Sandeep Y",
                content: "I'm greatfull to be a student of th which s college which provided me a great platform for knowledge and skills development. Management support was amazing which helped me to build my attitude and confidence level. The placements were offered from top companies and capable students got a well-defined opportunity to attend for the job interviews. Thanks for everything which my college has offered to me and is one of my Unforgettable places in my life because if I wouldn't have joined here I would've missed a lot in my life. I look-forward to support and serve the college in future too.",
            },
            {
                companyName: "Maxim Integrated",
                img: TestimonialSagarGadibidi, name: "Sagar Gadibidi",
                content: "Journey of thousand miles begins with a single step. Likewise was my decision of pursuing master's. This journey of 2 years will always be cherished. The learning here started right from the induction program & never ended till my placement. Opportunities here were from the best of the best faculties, Corporate exposure through industrial visits & Internships, On-Campus & Off-Campus trainings by industry experts, opportunities to work on different corporate projects along with studies and lot more. Finally to say, If it is to Be, It is upto ME, Grabbing the right opportunity that we dreamt of & working on those will definitely lead us to a successful career ahead.",
            },

            {
                companyName: "Northern Trust Bank",
                img: TestimonialSaakshiGupta, name: "Saakshi Gupta",
                content: "It was a great Journey at my college. 2 years gave me a lot of exposure and opportunities to discover my hidden talents and excel in them. I am proud to be a part of this esteemed institution. Thanks for everything !",
            },
            {
                companyName: "Delloite",
                img: TestimonialRangan, name: "Rangan",
                content: "My experience with the college is a bag full of fond memories. It certainly is one of the best years of my academic life. When I look back I see those years, where I developed a lot as an individual and discovered new horizons of my capabilities. I found a new level of self belief. All these were a result of the continuous encouragement and support shown by the faculty members. There was always a very honest and warm feeling at my college which is a very closely knit family. I would like to thank my batchmates and faculty for giving me a very memorable experience which I will cherish always.",
            },
            {
                companyName: "Govt Job",
                img: TestimonialRajeshBabuV, name: "Rajesh Babu V",
                content: "My college gives a safe, Professional and friendly Learning Environment which inspired me to think differently. Institute offered high Quality Teaching, assessment and management learning. Frankly speaking the most I have enjoyed in my educational career is in this college. Most of my friends succeeded in getting their dream jobs through Campus interviews. Thanks to the Team!",
            },
            {
                companyName: "Kotak Mahindra Bank",
                img: TestimonialPrasanth, name: "Prasanth",
                content: " I had great experience studying here. I must say, my college has best faculty who are always ready to help you to come out from any problem. Almost all the faculty members are from the corporate. So they always map the subject to the corporate. It was all practical study. I never had faculty like I had in this college. They are very supportive and kind.",
            },
            {
                companyName: "Epson",
                img: TestimonialManishKumar, name: "Manish Kumar",
                content: "This college has been instrumental in fulfilling my dream of being with Best B School and transforming my career with the right set of industry required skills. I spent valuable time in selecting the right B School and ultimately my decision was Just Right for me as it is the only institute to offer Industry Aligned program. During my tenure, I was mentored by senior professors and industry experts which was a great experience and which made me more confident. I also had very good experience during my internship which was offered by institute. I am proud and thankful to the college for all the support and guidance offered",
            },
            {
                companyName: "Thomas Cook",
                img: TestimonialMaheshDabhi, name: "Mahesh Dabhi",
                content: "My college offered me a lot of opportunities for career advancement. I have improved my communication, lifestyle, personality, etc. after joining the institute. Special thanks to all the Faculty who have mentored me. Institute gave an excellent internship and placement opportunity with Thomas Cook. Proud to be part of this great college",
            },

            {
                companyName: "PWC",
                img: TestimonialKavyaShreeR, name: "Kavya Shree R",
                content: " I am glad to inform you that I got placed in one of the Big-4 companies i.e. PWC-SDC (Price Waterhouse Coopers Service Delivery Centre) as Associate tax consultant. It is because of support from my college team and all the encouragement. Training offered here helped me to overcome my fears, breakthrough for the unexpected, crave to achieve and push myself to conquer my Big Dream. A big Thank you to my college.",
            },
            {
                companyName: "Global Mergers",
                img: TestimonialJayeshLakhani, name: "Jayesh Lakhani",
                content: "It was nice to be a student here. I must say, days at my management college were the best days of my life. Apart from academic I had a great industry exposure. We visited Infosys, Jindal and many more companies. It was great experience to visit these companies and knowing actual industry work. These visits helped me a lot to connect me with the actual corporate work. Team at my college was always helpful to me in building my career. I really want to thank all members of my college ever.",
            },
            {
                companyName: "Kone Elevator India Pvt. Ltd",
                img: TestimonialIndranilGanguly, name: "Indranil Ganguly",
                content: "It had been a great journey with my college which gave me a platform to understand my strengths and harness it to my potential. My college also pointed out my areas of improvements and gave ample opportunities to convert it to my strengths. I thank my college for placing me in Jayem Logistics. I thank the Management and Faculty team of IBMR-IBS for being supportive to me and to help me realize my dreams.",
            },
            {
                companyName: "NO Broker.com",
                img: TestimonialHarshalSonone, name: "Harshal Sonone",
                content: "It has been an amazing journey at my college. With its Industry Aligned Program I have got the experience & learning of the Industry inside my classroom. The Faculty here are from the Industry who are Experts in their Field. You always get that helping hand & boost from the Staff & Faculty here which builds you in to a “Go Getter”. Thank You my collee for Everything!! All the best always.",
            },
            {
                companyName: "IFB Industries, Goa",
                img: TestimonialSreekanthReddy, name: "G Sreekanth Reddy",
                content: " I couldn't be happier to graduate from this College. I don't know how much I contributed to the college but the college contributed to me a lot. My college  helped me to grow both professionally and personally. Undoubtedly, the best practical industrial exposure like workshops, internships, industrial trips, projects, Mock Interviews I have ever experienced before helped me to get into a real job. I seized each and every opportunity provided by the college in terms of the entrepreneurial club, cultural activities. Special thanks to Directors and the faculty for inspiring me to be a marketing professional and an entrepreneur. Their encouragement motivated me to get into good companies like Nilkamal and Byju's Classes as an Intern and currently, working as a Digital Marketing Strategist in IFB Industries, Goa. The best job I have ever wanted. I will always be my college Gladiator and contribute my best to the welfare.",
            },
            {
                companyName: "Syngene- A Biocon Company",
                img: TestimonialChandraSekharKorapala, name: "Dr. Chandra Sekhar Korapala",
                content: "In spite of having a Doctorate Degree in scientific field and having vast experience in research and development, I thought something is not complete in my profile and I realized that was my very little knowledge about the business management. Joining MBA here has helped me lot to build on my current knowledge and expertise by learning the latest business management, finance and marketing strategies that are being applied in the corporate sector. More importantly the course faculty and the management here is outstanding in imparting the basics as well as the recent developments in the respective field. Now I can steer my career wheel and change the direction towards business leadership and more. Thanks to Faculty and Management of my college.",
            },

            {
                companyName: "TVS Logistics",
                img: TestimonialChintanGoyal, name: "Chintan Goyal",
                content: "My college groomed me not only academically but also imbibed other soft skills, corporate training, SAP module, practical exposure to industry in course duration which plays key role for job search today. Support from faculty, placement team, Director was a turning point for me which helped me even today in workplace & in daily routine. Thank you to my college and the entire team.",
            },
            {
                companyName: "Microsoft",
                img: TestimonialBaluMahendra, name: "Balu Mahendra Narahari",
                content: "My College is one stop solution for Gen Next Managers. It transformed me into a professional from a student. Two years is a very short time to learn everything that is bestowed on you. Support from my lecturers and love from my friends made it even more special.",
            },
            {
                companyName: "Future Retail",
                img: TestimonialAmruthaPawar, name: "Amrutha pawar",
                content: "I am extremely delightful as I was a part of this  and Big group where my college its teachings and my learning was truly valuable. The support from all the lecturers and staff was immeasurable. They guided me to work on my weakness and helped to strengthen my positives. I am thankful for the industry exposure and the internship and placement opportunities provided to me. All in all my decision was right and I am proud to be alumni of of this college. Thank you to the entire Team",
            },
            {
                companyName: "Future Retail",
                img: TestimonialAiligaShravanthi, name: "Ailiga Shravanthi",
                content: "My Life at my college made me stronger and helped me to take a step ahead as an independent woman. These two years have been well spent and a memory to cherish for a lifetime with full of learning opportunities which were funfilled and frolic. Everyone here works hard to train and place the students in best companies and I am one of the luckiest to get placed with Big Players like Future Retail Ltd. From an introvert, timid person to a key employee in the organisation, my college helped me in fuelling confidence in me. I am thankful to the management for the placement opportunity and helping me develop all the necessary skills for life.",
            },
            {
                companyName: "AON",
                img: TestimonialAbysonThomas, name: "Abyson Thomas",
                content: "I got a privilege to study in this College. I will always Cherish my experiences as a student throughout my life. Now I am working with AON in Finance domain. This opportunity I got from My college Campus. Things are made so simpler, lucrative, positive, achievable and spirited that nothing looks difficult to peruse. Thanks to God and my college, I got very good support from everyone.",
            },
            {
                
                img: TestimonialAbhishekPrakash, name: "Abhishek Prakash", companyName: "L&T Technology & Services",
                content: "My College gave me learning about how a corporate life is. To be frank the life here was full of cherishment & excitement. Now I am working in L&T Technology & Services which is a new platform & journey to begin with. I am really proud about My College which haion of any execucessfue sus is instilled a confidence to execute any task successfully. .I thank the college for making me think as an intellectual & performer.",
            },
        ] as IAlumniTestimonialCard[];

        return _testimonialCardsData.reverse();
    }, []);

    const testimonialCardsBoxData = useMemo(() => {

        let cards = testimonialCardsData.map((t, i) => {
            return {
                children: <AlumniTestimonialCard {...t} key={i}/>,
            } as IBoxedJSXCard;
        });

        return {
            cards: cards,
        } as IBoxedJSXCards ;
    }, [testimonialCardsData])

    return (
        <>
            <Helmet>
                <title>Alumni Testimonials - AIMS IBS</title>
                <meta name="description" content="Alumni Testimonials"/>
            </Helmet>
            <PageLocation img={CommonTestimonials} locations={["HOME", "ALUMNI TESTIMONIALS"]} title={"ALUMNI TESTIMONIALS"}/>
            <div className={"alumni-testimonials"}>
                {/* <div className={"col-wrapper-24"}>
                    {testimonialCardsJSX}
                </div> */}
                <BoxedJSXCards {...testimonialCardsBoxData}/>
            </div>
        </>
    )
}

export default AlumniTestimonials;