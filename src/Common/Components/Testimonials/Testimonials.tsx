import { SplideOptions } from "@splidejs/splide";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { 
    TestimonialRangan, TestimonialAbhishekPrakash, TestimonialAbysonThomas, TestimonialAiligaShravanthi, 
    TestimonialAmruthaPawar, TestimonialAppthiriSasiKiran, TestimonialBaluMahendra, TestimonialChandraSekharKorapala,
    TestimonialChintanGoyal, TestimonialHarshalSonone, TestimonialIndranilGanguly, TestimonialJayeshLakhani,
    TestimonialKavyaShreeR, TestimonialMaheshDabhi, TestimonialManishKumar, TestimonialPrasanth,
    TestimonialRajeshBabuV, TestimonialSaakshiGupta, TestimonialSagarGadibidi, TestimonialSaiSandeepY, TestimonialSanaMerchant,
    TestimonialSashikanthNayak, TestimonialShashwat, TestimonialSreekanthReddy, TestimonialSumaAlapati, TestimonialTLMonica,
    TestimonialTVVSubramanyam, TestimonialTusharMistry, TestimonialVishnuTej, TestimonialZameer,

    GlobalExposureTestimonialAbhilash, GlobalExposureTestimonialRajgopalan, GlobalExposureTestimonialSamrain, GlobalExposureTestimonialShashank, GlobalExposureTestimonialShubham,
 } from "../../../Assets/Assets";
import { IImage, Portal } from "../../../Utils/js/Utils";
import { SplideSlide, SplideSlider } from "../SplideSlider/SplideSlider";
import "./Testimonials.scss";

interface ITestmonialModal {
    content: string,
    callback: () => void,
}
const TestimonialModal = ({content, callback}: ITestmonialModal) => {

    const overlayRef = useRef<HTMLDivElement>(null);
    const cardPanelRef = useRef<HTMLDivElement>(null);

    const handleResize = useCallback(() => {
        if (!overlayRef.current || !cardPanelRef.current) return;
        overlayRef.current.style.width = window.innerWidth + "px";
        overlayRef.current.style.height = window.innerHeight + "px";
        cardPanelRef.current.style.maxHeight = window.innerHeight * 80 / 100 + "px";
        cardPanelRef.current.style.marginTop = window.innerHeight * 10 / 100 + "px";
    }, [overlayRef, cardPanelRef])

    useEffect(() => {
        if (!overlayRef.current) return;
        handleResize();
        window.addEventListener("resize", handleResize);
        window.addEventListener("touchmove", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("touchmove", handleResize)
        };
    }, [overlayRef, handleResize]);

    return (
        <>
            <div className={"testimonial-modal"} ref={overlayRef} role={"dialog"}>
                <div className={"card-panel content-panel"} ref={cardPanelRef}>
                    <div className={"content-div"}>
                        <p>{content}</p>
                    </div>
                </div>
                <div className={"button-div t-align-right"}>
                    <button onClick={callback} className={"button bg-deep-orange-600"}>
                        {/* <i className={"material-icons"}>close</i> */}
                        CLOSE
                    </button>
                </div>
            </div>
        </>
    )
}
interface ITestmonialCard {
    img: IImage, content: string, name: string,
}
const TestimonialCard = ({img, name, content}: ITestmonialCard) => {

    const [isModelShown, setIsModelShown] = useState(false);
    // const [windowOffset, setWindowOffset] = useState(0);
    const cardRef = useRef<HTMLDivElement>(null);

    const toggleModel = useCallback(() => {
        /**
        if (!isModelShown){
            document.body.setAttribute("style", `position: fixed; top: -${window.scrollY}px; left: 0; right: 0;`);
        }
        else {
            document.body.setAttribute("style", "");

            if(cardRef.current) {
                cardRef.current.scrollIntoView();
            }
        }
        */
        setIsModelShown(!isModelShown);
    }, [isModelShown]);

    return (
        <>
            <div className={"testimonials-card"} ref={cardRef}>
                <div className={"card-panel"}>
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
                        <h5 className={"name"}>{name}</h5>
                        <p>{content}</p>
                        <div className={"t-align-center"}>
                            <button className={"button bg-deep-orange-600"} onClick={toggleModel}>KNOW MORE</button>
                        </div>
                    </div>
                </div>
                {
                    isModelShown &&
                        <Portal>
                            <TestimonialModal content={content} callback={toggleModel}/>
                        </Portal>
                }
            </div>
        </>
    )
}

interface ITestimonials {
    mode?: "NORMAL" | "GLOBAL_EXPOSURE",
}
const Testimonials = ({mode = "NORMAL"}: ITestimonials) => {
    const globalExposureTestimonialCardsData = useMemo(() => {
        return [
            {
                img: GlobalExposureTestimonialShashank, name: "Shashank",
                content: "We had a wonderful experience in Singapore which is all about our GLOBAL EXPOSURE and EXCHANGE PROGRAM. The humid climate and tiredness after travelling for long couldn’t overcome our excitement to explore Singapore. We had our lunch, got ready and left for our very first adventure i.e. to the “NIGHT SAFARI” where the animals and humans both were free. It was a very different experience as we saw animals in the dark shade of forest at night carried on with a show – creatures of night. The next day, we went for our educational exposure to SIM(Singapore Institute of Management) where we spent a good day by learning some important life lessons on ‘Creative Leadership Driving to Change’ by a renown personality- Mr.Francis Tan. We also visited the campus which was so mesmerizing to our eyes. We also felt the difference of education culture over there. We were finished for that day, left for hotel and excitedly waited for the very next morning. The third day was full of adventure, fun and joy. We left in the morning, visited Little India, China Town ,The Monk Street, Bank Street, etc where people from different religions and backgrounds were enjoying eachother’s company. We had our lunch and the went to Singapore Flyer from where we could see a top view of Singapore. Then we went to Merlion Park-one of the famous visiting point over there. We also enjoyed moving onto the boat, getting to know the place, its history, etc. we explored the under water acquarium, Universal studio, clicked as many as pictures that could never satisfy us though. Then we continued with our next beloved adventure i.e.cablecar ride, gokarting and sky luge ride. The day beautifully ended with cool breezes on Borabora Beach and the light show “Wings of Time”. We went to JCU(James Cook University) on the last day. There we were acknowledged with vital issues, information and their way of teaching or I must say educating students. We all were provided lunch there and then left back to our stay. We then left for shopping in the malls exploring something different over there. We boarded our return flight to India and landed in india with lot of learning and value addition. It was not only a fun part but also a part of memorable instances, drive, values and energy in us to do something great in our lives, for the society and our country.",
            },
            {
                img: GlobalExposureTestimonialRajgopalan, name: "Raj Gopalan",
                content: "I am happy to say that we had a very wonderful Global Exposure Trip to Singapore which was conducted... I am happy to say that we had a very wonderful Global Exposure Trip to Singapore which was conducted by the college to gain knowledge about international educational system and have a hands on experience on how the global people work with respect to time and resources. We had a University visit at Singapore Institute of Management which is one of the leading universities in Singapore. There we had an interactive session on “Creative Leadership- a drive to change” which was very well handled by “Charles Tan” a professor at SIM and we learned how to become a creative leader in by developing our skill sets and utilizing the resources efficiently in the respective domain. We also visited James Cook University for a session mentoring about management and technology. For the next few days of our visit to Singapore, we had a very fun day enjoying the city downtown, Marina- bay sands and Universal studios. There are a lot of things to do in Singapore, which was possible by our guide, who guided the tour in the right manner for us to enjoy and have a memorable trip.",
            },
            {
                img: GlobalExposureTestimonialAbhilash, name: "Abhilash",
                content: "Wonderful global exposure and lifetime learning.. We are the lucky batch to attend the international tour in 1st semester. As we all gathered at the Bangalore airport to board flight with lot of excitement and mixed feeling. As we landed in Singapore airport, we entered the city and led by tour guide. We reached the little India and checked in at hotel and later we visited night safari. Next day we went to SIM (Singapore Institute of Management), attended a certified session held by Dr. Francis Tan on creative leadership to drive change. It was a great experience. We were excited to visit the whole city at first, we visited Buddhist Monastery at china town and visited Merilon statue which is famous in Singapore. The best place we visited was the marina bay sands at night. It was a nice place to be visited at the night. The next day we visited Sentosa island, there we went on cable car ride, sky ride. We ended with a wonderful carver show wings of time. It was an eye feast. On the fourth day we visited James Cook University, it was a wonderful experience. We learned many things. We sincerely thank institute for giving this great opportunity and to learn a lot of things and life lessons and importance of time management.",
            },
            {
                img: GlobalExposureTestimonialShubham, name: "Shubham. R. Abhangrao",
                content: "Global trip was a great experience. Our college conducted a Global Exposure Trip to Singapore for we 60 students. We had a great time there. We all were excited for Singapore trip. Other than Chinatown, Marina bay, Downtown, Aquarium, Night Safari, nocturnal zoo which is an open air zoo mimicking a humid tropical rainforest climate opens only in the night, Explored Singapore City, Sentosa Island, . and many other places. The important learning for us was their Hard work, dedication, commitment, following the rules, Time Management, Sincerity and above all belongingness towards the country. From educational point of view, we went SIM (Singapore Institute Of Management) and James Cook University where we had a learning programme on Leadership through which we came to know about how we can be a effective leaders, what are all the qualities that we should have. We all went to Singapore tour and Sentosa Island. On that day we went to and them Santosa Island. We did Luge ride, Cable car ride. We had lots of fun over there, especially when we did cable car ride. Best experience till now. One thing of the trip that tantalizes me still today is Singapore is a forensic country. Singapore does not have a separate or an original race by its origin. There were Chinese, Malayans, Indians, Australians, etc. But to my surprise none among them seems to have noticed that when it comes to the Dignity for the country. When we asked the question which race they belong to, everyone would say “I am a Singaporean”. They do clearly know the meaning of “Unity and Integrity”. Singapore has no real estate resources. It even imports water from the nearby countries like Indonesia and Malaysia. They recycle it and use it. There is a water recycling centre and there were also three types of dustbins. Dustbins for papers, plastics and glasses. Government sends them for recycling. They make complete utilisation of everything to the best. There are still many wonders yet to be mentioned but for that I will need pages on again. Never the less like the howling wings, the lovely memories flash tearing back, pulling at me the way we always were inured to. I became anew. Singapore has really made a difference in my life.",
            },
            {
                img: GlobalExposureTestimonialSamrain, name: "Samrain Midhat Khan",
                content: "On the Global Orientation Trip to Singapore, we came to know about many new things, apart from being in... On the Global Orientation Trip to Singapore, we came to know about many new things, apart from being in Indian culture we were exposed to be in different culture. Where time is very fast, if you don’t catch up you will lack behind. SIM (Singapore Institute of Management), Starting with the educational point of view us first one to SIM. Which is considered as one of the best universities of the world. There we had a training programme on Leadership, through which we came to know about how we can be an effective leader and what are all those qualities that we should possess to fulfil today leaders requirements. We had a wonderful experience. We went to James Cook University and attended session on learning opportunities and options from MBA graduates and session was very useful. Apart from educational tour we enjoyed Singapore trip with our friends and teachers. First day after landing in Singapore, we went to Night Safari, our tour guide told us about Safari and also instructed what we need to do. We went inside the night zoo with tram we saw many species of animals, approximately 2500 animals are there representing 130 species. It is a place where humans are bounded to be at one place not the animals, they are free to move wherever they want. So quiet and peaceful place to visit in Singapore. It is one of favourite place. After that we went to animal show where Snake, Owls, Fox, Cheetah, Mongoose were shown. Mongoose shared a very short play by putting tin, plastic and disposable item in their respective dustbins.",
            },
        ] as ITestmonialCard[];
    }, []);

    const normalTestimonialCardsData = useMemo(() => {
        return [
            {
                
                img: TestimonialZameer, name: "Zameer",
                content: "It has been my pleasure and luck that I was part of this college which helped me in every way to improve and gave me every opportunity to use my potential in order to overcome my weaknesses. In today’s materialistic world it is good to have such institution which focuses on student’s development rather than having business motive. It is the Institute which believes in Symbiotic relationship having win- win motive. At last I am obliged and thankful to the entire college for placing me in one of the TOP MNC.",
            },
            {
                
                img: TestimonialVishnuTej, name: "Vishnu Tej",
                content: "I had a very good Experience, Exposure and Memories in my two year of MBA at this college Right from the beginning of the Ice breaker session on the first week of college to End of Placements session, fortunate enough to get trained and motivated by experienced professionals. I was provided an excellent opportunity to work with well know organizations like DTDC Express Limited and LnT Infotech for my internship which finally carved the path to get placed in a well known organisation.",
            },
            {
                
                img: TestimonialTVVSubramanyam, name: "TVV Subramanyam",
                content: " My experience at my college was like a great milestone for me, through which I got an opportunity to enter Corporate World. Learning here was diverse, value adding and enriching to survive in life. Thanks to the college for giving me the great opportunity and making me realise my potential to be a good manager and a leader.",
            },
            {
                
                img: TestimonialTusharMistry, name: "Tushar Mistry",
                content: "I have completed MBA in 2016 from this college.  have always guided and shared my experience with people to walk on the right path. As i have tasted both (sweetness and bitterness) of various path walked on. I must say joining this college and walking through this smooth/sweet journey was life changing. Always remember, Institutes will be successful with students giving their best and students can only be successful when they have chosen right institute. I choose the right one.",
            },
            {
                
                img: TestimonialTLMonica, name: "T L Monica",
                content: "Right from the time I started searching for B schools, I heard about this college. The key points that caught my attention about the college are it’s reputation and it’s position among top B schools. The college  has been nothing less than what I had hoped for. Supportive seniors and faculty, quality education, real world experiences, and amazing friends. The growth I have seen in myself due to this college, is amazing. My sincere thanks to all the Faculty members, mentors and everyone of this big family for their support. I'm carrying along with me beautiful memories of this place and will always cherish them. Thank you everyone for making this journey so pleasant.",
            },
            {
                
                img: TestimonialSumaAlapati, name: "Suma Alapati",
                content: "Education is the most powerful weapon which you can use to change the world and I am proud to say that such education is provided by our college. My college helps in utilising the opportunities in the best way possible. My experience at my college helped me in identifying my strengths and focus on the areas of improvements which helped in getting the best opportunity during placements. Journey here was the best part and the best step of my career. I am proud to be a part of this college.",
            },

            {
                
                img: TestimonialShashwat, name: "Shashwat Chhetry",
                content: "My college is a place where it all began. Feels like yesterday that I became a part of something that would stay with me for eternity and every time I think of it, brings a pleasant smile. Everything that I am today, owes a major part of it to this place. Right from the very beginning, we were taught to dream big and always aim for the stars. The best part about being a part here is that by the time curriculum starts, we tend to know everyone so well that the learning experience eliminates the fear of losing. The ice breaking program “Roots to fruits” is designed in a way that makes us familiar of our surroundings, our peers, our guides and support in a manner that we begin to feel for one another like one big family. I have earned my friends here, I have earned my passion here and most of all I have earned my dream here. My college  is a place that teaches life lessons through management principles and places the stearing on your hands, it will then depend on you how and where to steer your life to. I would like to thank Directors and my batch mates, a big shout out to all of you for making my time here a wonderful one.",
            },
            {
                
                img: TestimonialAppthiriSasiKiran, name: "Appthiri Sasi Kiran",
                content: "I am very much happy to be a student of this college. I was blessed with rich experienced Professors. Great support from Management in every situation. They provided good orientation towards the market opportunities available in job market in different sectors. I'm very much satisfied with the MBA program. With this great support, I became an entrepreneur and achieved my dream and started my own Vodafone Mini store in Tirupathi. Thank you to my college.",
            },
            {
                
                img: TestimonialSashikanthNayak, name: "Sashikanth Nayak",
                content: "I‘m very fortunate to be the alumni of this college. The Institute has provided me the immense growth opportunity to excel in my professional life. College has played a vital role in churning out professionals from aspirants.. I would like to share the uniqueness of the college to the world so that other students like me can make the most of it. Management and the faculty commitment to the students development is commendable and dependable. Industry aligned training program here  makes us to be competitive and employable. Multiple opportunities for placements till the student gets satisfaction & best results.",
            },
            {
                
                img: TestimonialSanaMerchant, name: "Sana Merchant",
                content: "I consider that joining this college for MBA was one of the best decisions of my life. After graduation, I had clarity on doing my Masters to provide me the foundation for entering the corporate world. However, the journey throughout the course gave me the right focus and enabled me to become an Entrepreneur. Highly motivated Professors and Faculty taught us not only the Syllabus but also soft skills and ethics that have direct application in our professional lives. I accepted the offer from Finnastra after completing my internship and eventually handled a responsibility of Client Engagement at US and Pan-India as my last role before moving on to having my own Start-up. My message to fellow juniors is that a plethora of opportunities will be available at your disposal, which you may not realize now, but try to utilize them to your max benefits.",
            },
            {
                
                img: TestimonialSaiSandeepY, name: "Sai Sandeep Y",
                content: "I'm greatfull to be a student of th which s college which provided me a great platform for knowledge and skills development. Management support was amazing which helped me to build my attitude and confidence level. The placements were offered from top companies and capable students got a well-defined opportunity to attend for the job interviews. Thanks for everything which my college has offered to me and is one of my Unforgettable places in my life because if I wouldn't have joined here I would've missed a lot in my life. I look-forward to support and serve the college in future too.",
            },
            {
                
                img: TestimonialSagarGadibidi, name: "Sagar Gadibidi",
                content: "Journey of thousand miles begins with a single step. Likewise was my decision of pursuing master's. This journey of 2 years will always be cherished. The learning here started right from the induction program & never ended till my placement. Opportunities here were from the best of the best faculties, Corporate exposure through industrial visits & Internships, On-Campus & Off-Campus trainings by industry experts, opportunities to work on different corporate projects along with studies and lot more. Finally to say, If it is to Be, It is upto ME, Grabbing the right opportunity that we dreamt of & working on those will definitely lead us to a successful career ahead.",
            },

            {
                
                img: TestimonialSaakshiGupta, name: "Saakshi Gupta",
                content: "It was a great Journey at my college. 2 years gave me a lot of exposure and opportunities to discover my hidden talents and excel in them. I am proud to be a part of this esteemed institution. Thanks for everything !",
            },
            {
                
                img: TestimonialRangan, name: "Rangan",
                content: "My experience with the college is a bag full of fond memories. It certainly is one of the best years of my academic life. When I look back I see those years, where I developed a lot as an individual and discovered new horizons of my capabilities. I found a new level of self belief. All these were a result of the continuous encouragement and support shown by the faculty members. There was always a very honest and warm feeling at my college which is a very closely knit family. I would like to thank my batchmates and faculty for giving me a very memorable experience which I will cherish always.",
            },
            {
                
                img: TestimonialRajeshBabuV, name: "Rajesh Babu V",
                content: "My college gives a safe, Professional and friendly Learning Environment which inspired me to think differently. Institute offered high Quality Teaching, assessment and management learning. Frankly speaking the most I have enjoyed in my educational career is in this college. Most of my friends succeeded in getting their dream jobs through Campus interviews. Thanks to the Team!",
            },
            {
                
                img: TestimonialPrasanth, name: "Prasanth",
                content: " I had great experience studying here. I must say, my college has best faculty who are always ready to help you to come out from any problem. Almost all the faculty members are from the corporate. So they always map the subject to the corporate. It was all practical study. I never had faculty like I had in this college. They are very supportive and kind.",
            },
            {
                
                img: TestimonialManishKumar, name: "Manish Kumar",
                content: "This college has been instrumental in fulfilling my dream of being with Best B School and transforming my career with the right set of industry required skills. I spent valuable time in selecting the right B School and ultimately my decision was Just Right for me as it is the only institute to offer Industry Aligned program. During my tenure, I was mentored by senior professors and industry experts which was a great experience and which made me more confident. I also had very good experience during my internship which was offered by institute. I am proud and thankful to the college for all the support and guidance offered",
            },
            {
                
                img: TestimonialMaheshDabhi, name: "Mahesh Dabhi",
                content: "My college offered me a lot of opportunities for career advancement. I have improved my communication, lifestyle, personality, etc. after joining the institute. Special thanks to all the Faculty who have mentored me. Institute gave an excellent internship and placement opportunity with Thomas Cook. Proud to be part of this great college",
            },

            {
                
                img: TestimonialKavyaShreeR, name: "Kavya Shree R",
                content: " I am glad to inform you that I got placed in one of the Big-4 companies i.e. PWC-SDC (Price Waterhouse Coopers Service Delivery Centre) as Associate tax consultant. It is because of support from my college team and all the encouragement. Training offered here helped me to overcome my fears, breakthrough for the unexpected, crave to achieve and push myself to conquer my Big Dream. A big Thank you to my college.",
            },
            {
                
                img: TestimonialJayeshLakhani, name: "Jayesh Lakhani",
                content: "It was nice to be a student here. I must say, days at my management college were the best days of my life. Apart from academic I had a great industry exposure. We visited Infosys, Jindal and many more companies. It was great experience to visit these companies and knowing actual industry work. These visits helped me a lot to connect me with the actual corporate work. Team at my college was always helpful to me in building my career. I really want to thank all members of my college ever.",
            },
            {
                
                img: TestimonialIndranilGanguly, name: "Indranil Ganguly",
                content: "It had been a great journey with my college which gave me a platform to understand my strengths and harness it to my potential. My college also pointed out my areas of improvements and gave ample opportunities to convert it to my strengths. I thank my college for placing me in Jayem Logistics. I thank the Management and Faculty team of IBMR-IBS for being supportive to me and to help me realize my dreams.",
            },
            {
                
                img: TestimonialHarshalSonone, name: "Harshal Sonone",
                content: "It has been an amazing journey at my college. With its Industry Aligned Program I have got the experience & learning of the Industry inside my classroom. The Faculty here are from the Industry who are Experts in their Field. You always get that helping hand & boost from the Staff & Faculty here which builds you in to a “Go Getter”. Thank You my collee for Everything!! All the best always.",
            },
            {
                
                img: TestimonialSreekanthReddy, name: "G Sreekanth Reddy",
                content: " I couldn't be happier to graduate from this College. I don't know how much I contributed to the college but the college contributed to me a lot. My college  helped me to grow both professionally and personally. Undoubtedly, the best practical industrial exposure like workshops, internships, industrial trips, projects, Mock Interviews I have ever experienced before helped me to get into a real job. I seized each and every opportunity provided by the college in terms of the entrepreneurial club, cultural activities. Special thanks to Directors and the faculty for inspiring me to be a marketing professional and an entrepreneur. Their encouragement motivated me to get into good companies like Nilkamal and Byju's Classes as an Intern and currently, working as a Digital Marketing Strategist in IFB Industries, Goa. The best job I have ever wanted. I will always be my college Gladiator and contribute my best to the welfare.",
            },
            {
                
                img: TestimonialChandraSekharKorapala, name: "Dr. Chandra Sekhar Korapala",
                content: "In spite of having a Doctorate Degree in scientific field and having vast experience in research and development, I thought something is not complete in my profile and I realized that was my very little knowledge about the business management. Joining MBA here has helped me lot to build on my current knowledge and expertise by learning the latest business management, finance and marketing strategies that are being applied in the corporate sector. More importantly the course faculty and the management here is outstanding in imparting the basics as well as the recent developments in the respective field. Now I can steer my career wheel and change the direction towards business leadership and more. Thanks to Faculty and Management of my college.",
            },

            {
                
                img: TestimonialChintanGoyal, name: "Chintan Goyal",
                content: "My college groomed me not only academically but also imbibed other soft skills, corporate training, SAP module, practical exposure to industry in course duration which plays key role for job search today. Support from faculty, placement team, Director was a turning point for me which helped me even today in workplace & in daily routine. Thank you to my college and the entire team.",
            },
            {
                
                img: TestimonialBaluMahendra, name: "Balu Mahendra Narahari",
                content: "My College is one stop solution for Gen Next Managers. It transformed me into a professional from a student. Two years is a very short time to learn everything that is bestowed on you. Support from my lecturers and love from my friends made it even more special.",
            },
            {
                
                img: TestimonialAmruthaPawar, name: "Amrutha pawar",
                content: "I am extremely delightful as I was a part of this  and Big group where my college its teachings and my learning was truly valuable. The support from all the lecturers and staff was immeasurable. They guided me to work on my weakness and helped to strengthen my positives. I am thankful for the industry exposure and the internship and placement opportunities provided to me. All in all my decision was right and I am proud to be alumni of of this college. Thank you to the entire Team",
            },
            {
                
                img: TestimonialAiligaShravanthi, name: "Ailiga Shravanthi",
                content: "My Life at my college made me stronger and helped me to take a step ahead as an independent woman. These two years have been well spent and a memory to cherish for a lifetime with full of learning opportunities which were funfilled and frolic. Everyone here works hard to train and place the students in best companies and I am one of the luckiest to get placed with Big Players like Future Retail Ltd. From an introvert, timid person to a key employee in the organisation, my college helped me in fuelling confidence in me. I am thankful to the management for the placement opportunity and helping me develop all the necessary skills for life.",
            },
            {
                
                img: TestimonialAbysonThomas, name: "Abyson Thomas",
                content: "I got a privilege to study in this College. I will always Cherish my experiences as a student throughout my life. Now I am working with AON in Finance domain. This opportunity I got from My college Campus. Things are made so simpler, lucrative, positive, achievable and spirited that nothing looks difficult to peruse. Thanks to God and my college, I got very good support from everyone.",
            },
            {
                
                img: TestimonialAbhishekPrakash, name: "Abhishek Prakash",
                content: "My College gave me learning about how a corporate life is. To be frank the life here was full of cherishment & excitement. Now I am working in L&T Technology & Services which is a new platform & journey to begin with. I am really proud about My College which haion of any execucessfue sus is instilled a confidence to execute any task successfully. .I thank the college for making me think as an intellectual & performer.",
            },
        ] as ITestmonialCard[];
    }, []);

    const tJSX = useMemo(() => {
        if (mode === "GLOBAL_EXPOSURE") {
            return globalExposureTestimonialCardsData.map((testimonialCard, index) => {
                return (
                    <SplideSlide key={index}>
                        <TestimonialCard {...testimonialCard}/>
                    </SplideSlide>
                );
            })
        }

        return normalTestimonialCardsData.map((testimonialCard, index) => {
            return (
                <SplideSlide key={index}>
                    <TestimonialCard {...testimonialCard}/>
                </SplideSlide>
            );
        })
    }, [globalExposureTestimonialCardsData, normalTestimonialCardsData, mode]);

    const sliderOptions = useMemo(() => {
        return {
            type : 'loop',
            perPage: 3,
            gap: 10,
            focus  : 'center',
            autoplay: true,
            interval: 5000,
            breakpoints: {
                767: {
                    perPage: 1
                },
                991: {
                    perPage: 2
                }
            }
        } as SplideOptions;
    }, []);

    return (
        <>
            <div className={"testimonials"}>
                <SplideSlider options={sliderOptions}>
                    {tJSX}
                </SplideSlider>
            </div>
        </>
    )
}

export default Testimonials;