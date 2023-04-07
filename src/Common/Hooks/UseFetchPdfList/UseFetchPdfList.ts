import { useCallback, useEffect, useState } from "react";
import { getAsync } from "../../Api/CommonGet";
import { IPdfList } from "../../Api/PdfApi/Types";

export interface IUseFetchPdfList {
    url: string,
}
const PENDING_STATE = { pending: true, rejected: false, fulfilled: false };
const REJECTED_STATE = { pending: false, rejected: true, fulfilled: false };
const FULFILLED_STATE = { pending: false, rejected: false, fulfilled: true };

export const useFetchPdfList = ({url}: IUseFetchPdfList) => {
    const [pdfList, setPdfList] = useState<IPdfList>();
    const [reqStates, setReqStates] = useState({
        pending: false, fulfilled: false, rejected: false,
    });

    const handleGetResponse = useCallback(async (res: {
        responseJson: any, responseStatus: number,
    }) => {
        if (res.responseStatus === 200) {
            let pdfListRes: IPdfList = res.responseJson;
            setPdfList(pdfListRes);
            setReqStates(FULFILLED_STATE);
        }
        else setReqStates(REJECTED_STATE);
    }, []);

    useEffect(() => {
        setReqStates(PENDING_STATE);
        getAsync({url: url, cache: "default", credentials: "include"})
            .then(handleGetResponse)
            .catch(() => {
                setReqStates(REJECTED_STATE);
            });
    }, [url, handleGetResponse]);

    return {pdfList, reqStates};
}