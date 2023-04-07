import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { patchProgramAsyc } from "../../../Common/Api/ProgramApi/ProgramApi";
import { IProgramInListErrorResponse, IProgramInListResponse, IProgramList, IProgramPatchRequest } from "../../../Common/Api/ProgramApi/Interfaces/Program";

export const patchProgram = createAsyncThunk
<IProgramInListResponse, IProgramPatchRequest, {rejectValue: IProgramInListErrorResponse}>(
    "program-programs-list/patch", async (programData, thunkAPI) => {
        const {url, idInState, ...data} = programData;
        const programResponse = await patchProgramAsyc(data, url);

        if (programResponse.responseStatus === 200) {
            return {
                ...programResponse.responseJson,
                idInState: idInState,
            } as IProgramInListResponse;
        }
        // else if error in input
        else if (programResponse.responseStatus === 400) {
            let err_msg = "";
            if (programResponse.responseJson["detail"])
                err_msg = programResponse.responseJson["detail"]
            else if (programResponse.responseJson["message"])
                err_msg = programResponse.responseJson["message"]
            let response = {
                validation_errors: {
                    ...programResponse.responseJson,
                },
                error_description: err_msg,
                idInState: idInState,
            }
            return thunkAPI.rejectWithValue((response) as IProgramInListErrorResponse)
        }
        else {
            let err_msg = "";
            if (programResponse.responseJson["detail"])
                err_msg = programResponse.responseJson["detail"]
            else if (programResponse.responseJson["message"])
                err_msg = programResponse.responseJson["message"]
            let response = {
                error_description: err_msg,
                idInState: idInState,
            }
            return thunkAPI.rejectWithValue((response) as IProgramInListErrorResponse)
        }
    }
)

export const patchProgramBuilder = (builder: ActionReducerMapBuilder<IProgramList>) => {
    builder.addCase(patchProgram.pending, (state) => {
        state.request_states.patch = { pending: true, fulfilled: false, rejected: false };
        return state;
    })
    builder.addCase(patchProgram.fulfilled, (state, action) => {
        const {idInState, ...payload} = action.payload;
        state.results[idInState] = {
            ...state.results[idInState],
            ...payload
        }
        state.request_states.patch = { pending: false, fulfilled: true, rejected: false };
        return state;
    })
    builder.addCase(patchProgram.rejected, (state, action) => {
        if (action.payload) {
            const {idInState, ...payload} = action.payload;
            state.results[idInState].validation_errors = payload.validation_errors;
            state.results[idInState].error_description = payload.error_description;
        }
        state.request_states.patch = { pending: false, fulfilled: false, rejected: true };
        return state;
    })
}