import './App.scss';

import { Suspense, useEffect } from 'react';

import { Helmet } from 'react-helmet-async';

import Routes from './Common/Routes';
import Header from './Common/Header/Header';
import Footer from './Common/Footer/Footer';

import LoadingScreenUI, { LOADING_SCREEN } from './LoadingScreenUI/LoadingScreenUI';
import { PopupForm } from './Common/Components/PopupForm/PopupForm';
import { getCourseList } from './Store/Slices/CourseList/CourseListSlice';
import { getProgramList } from './Store/Slices/ProgramList/ProgramListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { hideAllPagePopupForm, unhideAllPagePopupForm } from './Store/Slices/App/AppSlice';
import { useState } from 'react';
import { ICourseList } from './Common/Api/CourseApi/Interfaces/Course';
import { IProgramList } from './Common/Api/ProgramApi/Interfaces/Program';
import { FloatingBtns, SocialFloatingBtns } from './Common/Components/Components';
import { usePageTracking } from './Utils/js/Utils';

function App() {

    usePageTracking({trackingCode: "UA-171457236-1"}); // comment this line when testing

    // useEffect(() => {
    //     const description = document.querySelector('meta[name="description"]');
    //     if (description) {
    //       description.remove();
    //     }
    // }, [])
    const dispatch = useDispatch();
    const [fetchedOnce, setFetchedOnce] = useState(false);
    const courseList = useSelector((state: {courseList: ICourseList}) => state.courseList);
    const programList = useSelector((state: {programList: IProgramList}) => state.programList);
    useEffect(() => {
        dispatch(hideAllPagePopupForm())
        dispatch(getCourseList());
        dispatch(getProgramList());
    }, [dispatch]);

    useEffect(() => {
        if (!fetchedOnce && courseList.request_states.get.fulfilled && programList.request_states.get.fulfilled) {
            setFetchedOnce(true);
        }
        if (!fetchedOnce && courseList.request_states.get.rejected && programList.request_states.get.rejected) {
            setFetchedOnce(true);
        }
    }, [
        fetchedOnce, courseList.request_states.get.fulfilled, programList.request_states.get.fulfilled,
        courseList.request_states.get.rejected, programList.request_states.get.rejected
    ]);

    useEffect(() => {
        if (fetchedOnce) {
            dispatch(unhideAllPagePopupForm());
        }
    }, [dispatch, fetchedOnce]);
    
    return (
        <>
        <div className="App">
            <Helmet>
                <title>Homepage</title>
                <meta name="description" content="Homepage"/>
            </Helmet>
            <Suspense fallback={<LoadingScreenUI name={LOADING_SCREEN["LOADING"]}/>}>
                {
                    fetchedOnce ? (
                            <>
                                <PopupForm />
                                <FloatingBtns />
                                <SocialFloatingBtns />
                                <Header />
                                <div className={"main"} id={"main"}>
                                    <Routes />
                                </div>
                                <Footer />
                            </>
                        ) : (
                            <>
                                <LoadingScreenUI name={LOADING_SCREEN["LOADING"]}/>
                            </>
                        )
                }
            </Suspense>
        </div>
        </>
    );
}

export default App;
