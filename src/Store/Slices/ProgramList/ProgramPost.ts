import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { postProgramAsyc } from "../../../Common/Api/ProgramApi/ProgramApi";
import { IProgramErrorResponse, IProgramData, IProgramList, IProgramPostData } from "../../../Common/Api/ProgramApi/Interfaces/Program";

export const postProgram = createAsyncThunk
<IProgramData, IProgramPostData, {rejectValue: IProgramErrorResponse}>(
    "program-programs-list/post", async (programData, thunkAPI) => {
        const {...data} = programData;
        const programResponse = await postProgramAsyc(data);

        if (programResponse.responseStatus === 201) {
            return {
                ...programResponse.responseJson,
                ...data, // store the submitted data directly, since only success msg is received from api
            } as IProgramData;
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
            }
            return thunkAPI.rejectWithValue((response) as IProgramErrorResponse)
        }
        else {
            let err_msg = "";
            if (programResponse.responseJson["detail"])
                err_msg = programResponse.responseJson["detail"]
            else if (programResponse.responseJson["message"])
                err_msg = programResponse.responseJson["message"]
            let response = {
                error_description: err_msg,
            }
            return thunkAPI.rejectWithValue((response) as IProgramErrorResponse)
        }
    }
)

export const postProgramBuilder = (builder: ActionReducerMapBuilder<IProgramList>) => {
    builder.addCase(postProgram.pending, (state) => {
        state.request_states.post = { pending: true, fulfilled: false, rejected: false };
        return state;
    })
    builder.addCase(postProgram.fulfilled, (state, action) => {
        state.results.unshift(action.payload);
        state.request_states.post = { pending: false, fulfilled: true, rejected: false };
        return state;
    })
    builder.addCase(postProgram.rejected, (state, action) => {
        if (action.payload) {
            state.validation_errors = action.payload.validation_errors;
            state.error_description = action.payload.error_description;
        }
        state.request_states.post = { pending: false, fulfilled: false, rejected: true };
        return state;
    })
}