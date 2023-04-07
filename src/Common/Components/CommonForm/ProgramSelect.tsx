import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProgramList } from "../../../Store/Slices/ProgramList/ProgramListGet";
import { SelectSingle } from "../../../Utils/js/Utils";
import { IProgramList } from "../../Api/ProgramApi/Interfaces/Program";

export const ProgramSelect = ({program, handleProgramChange}: {program: string, handleProgramChange: (e: React.ChangeEvent<HTMLSelectElement>) => void}) => {
    const GO_NEXT_KEY = "go_next";
    const dispatch = useDispatch();
    const programList = useSelector((state: {programList: IProgramList}) => state.programList);

    const ProgramListJSX = useMemo(() => {
        return programList.results.map((c, i) => {
            return (
                <option value={c.url} key={i}>{c.name}</option>
            );
        });
    }, [programList.results]);

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === GO_NEXT_KEY) {
            dispatch(getProgramList({url: programList.next}));
            return;
        }
        handleProgramChange(e);
    }

    return (
        <>
            <SelectSingle value={program} label={"Select Program *"} icon={"school"} onChange={onChange} name="program" className={"program-select border-white"} divClassName={"footer-form-input"} id="program" required>
                {ProgramListJSX}
                {
                    programList.next && (
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
        <ErrorDiv errors={request.detail.validation_errors.program}/>
    )} 
    <ProgramSelect program={program} handleProgramChange={handleProgramChange}/>
 */