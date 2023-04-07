import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import { IRequestForm } from "../Common/Api/Form/Types/Form/Form";
import { BLOG_FILTER_URL, NEWS_AND_EVENTS_FILTER_URL, ROUTES } from "../Common/Globals";
import { hideAllPagePopupForm, IApp, unhideAllPagePopupForm } from "../Store/Slices/App/AppSlice";

const Home = lazy(() => import('./Home/Home'));
const ContactUs = lazy(() => import('./ContactUs/ContactUs'));
const OurBSchool = lazy(() => import('./OurBSchool/OurBSchool'));
const WelcomeNote = lazy(() => import('./WelcomeNote/WelcomeNote'));
const RankingCrendentials = lazy(() => import('./RankingCrendentials/RankingCrendentials'));
const IndustryKnowledgePartners = lazy(() => import('./IndustryKnowledgePartners/IndustryKnowledgePartners'));
const IndustryIntegratedProgram = lazy(() => import('./IndustryIntegratedProgram/IndustryIntegratedProgram'));
const MBABangaloreUniversity = lazy(() => import('./MBABangaloreUniversity/MBABangaloreUniversity'));
const PGPM = lazy(() => import('./PGPM/PGPM'));
const PGDM = lazy(() => import('./PGDM/PGDM'));
const CertificationCourses = lazy(() => import('./CertificationCourses/CertificationCourses'));
const BCOMPP = lazy(() => import('./BCOMPP/BCOMPP'));
const BCOMAcceleratorPlus = lazy(() => import('./BCOMAcceleratorPlus/BCOMAcceleratorPlus'));
const Gallery = lazy(() => import('./Gallery/Gallery'));
const PlacementInsights = lazy(() => import('./PlacementInsights/PlacementInsights'));
const PlacementRecords = lazy(() => import('./PlacementRecords/PlacementRecords'));
const PlacementRecruiters = lazy(() => import('./PlacementRecruiters/PlacementRecruiters'));
const AdmissionProcess = lazy(() => import('./AdmissionProcess/AdmissionProcess'));
const PayOnline = lazy(() => import('./PayOnline/PayOnline'));
const KeyDifferentiators = lazy(() => import('./KeyDifferentiators/KeyDifferentiators'));
const RankingsCredentialsOurStrengths = lazy(() => import('./RankingsCredentialsOurStrengths/RankingsCredentialsOurStrengths'));
const IndustryRelevantCertifications = lazy(() => import('./IndustryRelevantCertifications/IndustryRelevantCertifications'));
const ValueAddedPrograms = lazy(() => import('./ValueAddedPrograms/ValueAddedPrograms'));
const AlumniTestimonials = lazy(() => import('./AlumniTestimonials/AlumniTestimonials'));
const InternshipRecruiters = lazy(() => import('./InternshipRecruiters/InternshipRecruiters'));
const InternshipInsights = lazy(() => import('./InternshipInsights/InternshipInsights'));
const InternshipRecords = lazy(() => import('./InternshipRecords/InternshipRecords'));
const Faculty = lazy(() => import('./Faculty/Faculty'));
const GlobalExposure = lazy(() => import('./GlobalExposure/GlobalExposure'));
const InternationalAssociations = lazy(() => import('./InternationalAssociations/InternationalAssociations'));
const FAQs = lazy(() => import('./FAQs/FAQs'));
const ExperienceAimsIbs = lazy(() => import('./ExperienceAimsIbs/ExperienceAimsIbs'));
const BlogListPage = lazy(() => import('./BlogListPage/BlogListPage'));
const SingleBlog = lazy(() => import('./SingleBlog/SingleBlog'));
const Downloads = lazy(() => import('./Downloads/Downloads'));
const NotFound404 = lazy(() => import('./Error/NotFound404/NotFound404'));

const Grievance = lazy(() => import('./Grievance/Grievance'));
const Feedback = lazy(() => import('./Feedback/Feedback'));
const LOAandEOA = lazy(() => import('./LOAandEOA/LOAandEOA'));


const dontShowPopupOnTheseRoutes = [
    // ROUTES["FAQS"],
    "", // do not use this feature for now... causes bug in pages listed here... causes user to trigger the popup form twice in these pages
];

const PagesRoutes = () => {
    const dispatch = useDispatch();
    const requestForm = useSelector((state: { requestForm: IRequestForm }) => state.requestForm);
    const app = useSelector((state: { app: IApp }) => state.app);

    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (requestForm.request_states.post.fulfilled) {
            /** DO NOT SHOW THE POPUP FORM AGAIN ONCE FILLED */
            return;
        }

        if (dontShowPopupOnTheseRoutes.includes(pathname))
            dispatch(hideAllPagePopupForm());
        else if (app.allPagePopupForm.isHiddenPermanent)
            dispatch(hideAllPagePopupForm());
        else
            dispatch(unhideAllPagePopupForm());
    }, [pathname, dispatch, app.allPagePopupForm.isHiddenPermanent, requestForm.request_states.post.fulfilled]);

    useEffect(() => {
        if (hash === "") {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash])

    // use this in components with id targets to deal with hash links e.g.: /faculty#international-bla-bla-bla
    // const {hash} = useLocation();
    // useEffect(() => {
    //     if (hash === "") {
    //         window.scrollTo(0, 0);
    //     }
    //     else {
    //         setTimeout(() => {
    //             const id = hash.replace("#", '');
    //             const elem = document.getElementById(id);
    //             if (elem) {
    //                 // elem.scrollIntoView({behavior: "smooth"});
    //                 const topPos = elem.getBoundingClientRect().top * window.devicePixelRatio
    //                 window.scrollTo({
    //                     top: topPos, // scroll so that the element is at the top of the view
    //                     behavior: 'smooth' // smooth scroll
    //                 })                      
    //             }
    //         }, 5000); // initally was zero(0ms), so change it back to 0 if 200 causes problems
    //     }
    // }, [hash]);

    return (
        <Switch>
            <Route exact path={ROUTES["HOMEPAGE"]} component={Home} />
            <Route exact path={ROUTES["CONTACT US"]} component={ContactUs} />
            <Route exact path={ROUTES["OUR B SCHOOL"]} component={OurBSchool} />
            <Route exact path={ROUTES["WELCOME NOTE"]} component={WelcomeNote} />
            <Route exact path={ROUTES["RANKINGS CREDENTIALS"]} component={RankingCrendentials} />
            <Route exact path={ROUTES["INDUSTRY/KNOWLEDGE PARTNERS"]} component={IndustryKnowledgePartners} />
            <Route exact path={ROUTES["INDUSTRY INTEGRATED PROGRAM"]} component={IndustryIntegratedProgram} />
            <Route exact path={ROUTES["MBA (BANGALORE UNIVERSITY)"]} component={MBABangaloreUniversity} />
            <Route exact path={ROUTES["PGDM"]} component={PGDM} />
            <Route exact path={ROUTES["PGPM"]} component={PGPM} />
            <Route exact path={ROUTES["CERTIFICATION COURSES"]} component={CertificationCourses} />
            {/* <Route exact path={ROUTES["B. COM++ (BANGALORE UNIVERSITY)"]} component={BCOMPP} /> */}
            <Route exact path={ROUTES["B. COM Accelerator +"]} component={BCOMAcceleratorPlus} />
            <Route exact path={ROUTES["GALLERY"]} component={Gallery} />
            <Route exact path={ROUTES["PLACEMENT INSIGHTS"]} component={PlacementInsights} />
            <Route exact path={ROUTES["PLACEMENT RECORDS"]} component={PlacementRecords} />
            <Route exact path={ROUTES["PLACEMENT RECRUITERS"]} component={PlacementRecruiters} />
            <Route exact path={ROUTES["ADMISSION PROCESS"]} component={AdmissionProcess} />
            <Route exact path={ROUTES["PAY ONLINE"]} component={PayOnline} />
            <Route exact path={ROUTES["KEY DIFFERENTIATORS"]} component={KeyDifferentiators} />
            <Route exact path={ROUTES["RANKINGS CREDENTIALS OUR STRENGHTS"]} component={RankingsCredentialsOurStrengths} />
            <Route exact path={ROUTES["INDUSTRY RELEVANT CERTIFICATIONS"]} component={IndustryRelevantCertifications} />
            <Route exact path={ROUTES["VALUE ADDED PROGRAMS AND PEDAGOGY"]} component={ValueAddedPrograms} />
            <Route exact path={ROUTES["TESTIMONIALS"]} component={AlumniTestimonials} />
            <Route exact path={ROUTES["INTERNSHIP RECRUITERS"]} component={InternshipRecruiters} />
            <Route exact path={ROUTES["INTERNSHIP INSIGHTS"]} component={InternshipInsights} />
            <Route exact path={ROUTES["INTERNSHIPS RECORDS"]} component={InternshipRecords} />
            <Route exact path={ROUTES["GLOBAL EXPOSURE"]} component={GlobalExposure} />
            <Route exact path={ROUTES["INTERNATIONAL ASSOCIATIONS"]} component={InternationalAssociations} />
            <Route exact path={ROUTES["FACULTY"]} component={Faculty} />
            <Route exact path={ROUTES["FAQS"]} component={FAQs} />
            <Route exact path={ROUTES["EXPERIENCE AIMS IBS"]} component={ExperienceAimsIbs} />
            <Route exact path={ROUTES["BLOG"]} component={(props: any) => <BlogListPage {...props} baseRoute={ROUTES["BLOG"]} reqId={ROUTES["BLOG"]} defaultFetchUrl={BLOG_FILTER_URL} title={"BLOGS"} description={"Blogs"} />} />
            <Route exact path={ROUTES["BLOG_WITH_PARAMS"]} component={SingleBlog} />
            <Route exact path={ROUTES["NEWS_AND_EVENTS"]} component={(props: any) => <BlogListPage {...props} baseRoute={ROUTES["NEWS_AND_EVENTS"]} reqId={ROUTES["NEWS_AND_EVENTS"]} defaultFetchUrl={NEWS_AND_EVENTS_FILTER_URL} title={"NEWS AND EVENTS"} description={"News And Events"} />} />
            <Route exact path={ROUTES["NEWS_AND_EVENTS_WITH_PARAMS"]} component={SingleBlog} />
            <Route exact path={ROUTES["DOWNLOADS"]} component={Downloads} />
            <Route exact path={ROUTES["GRIEVANCE"]} component={Grievance} />
            <Route exact path={ROUTES["FEEDBACK"]} component={Feedback} />
            <Route exact path={ROUTES["LOAANDEOA"]} component={LOAandEOA} />
            <Route component={NotFound404} />
        </Switch>
    )
}

export default PagesRoutes;