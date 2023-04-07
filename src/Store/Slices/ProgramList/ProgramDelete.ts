import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteAsync } from "../../../Common/Api/CommonDelete";
import { IProgramList, IProgramDeleteRequest, IProgramDeleteErrorResponse, IProgramDeleteResponse } from "../../../Common/Api/ProgramApi/Interfaces/Program";

export const deleteProgram = createAsyncThunk
<IProgramDeleteResponse, IProgramDeleteRequest, {rejectValue: IProgramDeleteErrorResponse}>(
    "program-programs-list/delete", async (programData, thunkAPI) => {
        const {url, idInIndex} = programData;
        const programResponse = await deleteAsync({url: url, credentials: 'include', cache: 'no-cache'});

        if (programResponse.responseStatus === 204) {
            return {idInIndex: idInIndex};
        }
        // else if error in deletion
        let err_msg = "";
        if (programResponse.responseJson["detail"])
            err_msg = programResponse.responseJson["detail"]
        else if (programResponse.responseJson["message"])
            err_msg = programResponse.responseJson["message"]
        let response = {
            error_description: err_msg,
            idInIndex: idInIndex,
        } as IProgramDeleteErrorResponse;
        return thunkAPI.rejectWithValue(response)
    }
)

export const deleteProgramBuilder = (builder: ActionReducerMapBuilder<IProgramList>) => {
    builder.addCase(deleteProgram.pending, (state) => {
        state.request_states.delete = { pending: true, fulfilled: false, rejected: false };
        return state;
    })
    builder.addCase(deleteProgram.fulfilled, (state, action) => {
        state.results = state.results.filter((d, i)=> i !== action.payload.idInIndex);
        state.request_states.delete = { pending: false, fulfilled: true, rejected: false };
        return state;
    })
    builder.addCase(deleteProgram.rejected, (state, action) => {
        if (action.payload) {
            state.results[action.payload.idInIndex].error_description = action.payload.error_description;
        }
        state.request_states.delete = { pending: false, fulfilled: false, rejected: true };
        return state;
    })
}