import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseList } from "../../../Store/Slices/CourseList/CourseListGet";
import { SelectSingle } from "../../../Utils/js/Utils";
import { ICourseList } from "../../Api/CourseApi/Interfaces/Course";

export const CourseSelect = ({course, handleCourseChange}: {course: string, handleCourseChange: (e: React.ChangeEvent<HTMLSelectElement>) => void}) => {
    const GO_NEXT_KEY = "go_next";
    const dispatch = useDispatch();
    const courseList = useSelector((state: {courseList: ICourseList}) => state.courseList);

    const CourseListJSX = useMemo(() => {
        return courseList.results.map((c, i) => {
            return (
                <option value={c.url} key={i}>{c.name}</option>
            );
        });
    }, [courseList.results]);

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === GO_NEXT_KEY) {
            dispatch(getCourseList({url: courseList.next}));
            return;
        }
        handleCourseChange(e);
    }

    return (
        <>
            <SelectSingle value={course} label={"Select Course *"} icon={"school"} onChange={onChange} name="course" className={"course-select border-white"} divClassName={"footer-form-input"} id="course" required>
                {CourseListJSX}
                {
                    courseList.next && (
                        <option value={GO_NEXT_KEY}>{"--- SHOW MORE ---"}</option>
                    )
                }
            </SelectSingle>
        </>
    )
}

/**
 * usage:
 *  { formId === request.request_states.post.formId && (
        <ErrorDiv errors={request.detail.validation_errors.course}/>
    )} 
    <CourseSelect course={course} handleCourseChange={handleCourseChange}/>
 */