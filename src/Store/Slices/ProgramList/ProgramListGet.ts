import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { getAsync } from "../../../Common/Api/CommonGet";
import { IProgramList, IProgramListErrorResponse, IProgramListRequest } from "../../../Common/Api/ProgramApi/Interfaces/Program";
import { PROGRAM_URL } from "../../../Common/Globals";

export const getProgramList = createAsyncThunk
<IProgramList, IProgramListRequest | undefined, {rejectValue: IProgramListErrorResponse}>(
    "program-list/get", async (req, thunkAPI) => {
        const programResponse = await getAsync({url: (req)?req.url:PROGRAM_URL["URL"], cache: "default", credentials: "include"});
        
        if (programResponse.responseStatus === 200) {
            return {
                ...programResponse.responseJson
            } as IProgramList;
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
            return thunkAPI.rejectWithValue((response) as IProgramListErrorResponse)
        }
    }
)

export const getProgramListBuilder = (builder: ActionReducerMapBuilder<IProgramList>) => {
    builder.addCase(getProgramList.pending, (state) => {
        return {
            ...state,
            request_states: {
                ...state.request_states,
                get: {
                    ...state.request_states.get,
                    pending: true, fulfilled: false, rejected: false,
                }
            },
        }
    })
    builder.addCase(getProgramList.fulfilled, (state, action) => {
        return {
            ...state,
            ...action.payload,
            // append to the existing list to reduce network usage
            results: [ ...state.results, ...action.payload.results ],
            request_states: {
                ...state.request_states,
                get: {
                    ...state.request_states.get,
                    pending: false, fulfilled: true, rejected: false,
                }
            },
        };
    })
    builder.addCase(getProgramList.rejected, (state, action) => {
        return {
            ...state,
            request_states: {
                ...state.request_states,
                get: {
                    ...state.request_states.get,
                    pending: false, fulfilled: false, rejected: true,
                    error_description: action.payload?.error_description,
                }
            },
        };
    })
}