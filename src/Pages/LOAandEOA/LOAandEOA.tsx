import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { CommonGlobalExposure } from "../../Assets/Assets";
import { IPdf } from "../../Common/Api/PdfApi/Types";
import { PageLocation } from "../../Common/Components/Components";
import { LOAEOA_DOWNLOADS_FILTER_URL,  } from "../../Common/Globals";
import { useFetchPdfList } from "../../Common/Hooks/Hooks";
import LoadingScreenUI, { LOADING_SCREEN } from "../../LoadingScreenUI/LoadingScreenUI";

import "./LOAandEOA.scss";

interface IDownloadButton {
    pdf: IPdf,
}
const DownloadButton = ({pdf}: IDownloadButton) => {
    const downloadLinkRef = useRef<HTMLAnchorElement>(null);

    const dispatch = useDispatch();
   
    const triggerDownload = () => {
        if (!downloadLinkRef.current) return;
        downloadLinkRef.current.click();
    }


    

    return (
        <>
            <a href={"#!"} onClick={triggerDownload} className={"button bg-deep-orange-600"}>
                <span className={"icon"}><FontAwesomeIcon icon={faFilePdf}/></span>
                <span className={"text"}>{pdf.description}</span>
            </a>
            <a ref={downloadLinkRef} href={pdf.pdf} className={"download-link"} download={pdf.description}>
                <span className={"text"}>{pdf.description}</span>
            </a>
        </>
    )
}

const LOAandEOA = () => {

    const  list = useFetchPdfList({url: LOAEOA_DOWNLOADS_FILTER_URL});

    const listJSX = useMemo(() => {
        if (! list.pdfList) return;
        return  list.pdfList.results.map((d, i) => {
            return (
                <div className={"mb-col-24 t-col-12 d-col-8"} key={d.id}>
                    <div className={"t-align-center btn-w"}>
                        <DownloadButton pdf={d}/>
                    </div>
                </div>
            )
        }, []);
    }, [list]);
    
   

    return (
        <>
            <Helmet>
                <title>Downloads - AIMS IBS</title>
                <meta name="description" content="LOA & EOA"/>
            </Helmet>
            <PageLocation  locations={["HOME", "LOA & EOA"]} title={"LOA & EOA"}/>
            <div className={"downloads"}>
                {
                    list.reqStates.pending ? (
                        <LoadingScreenUI name={LOADING_SCREEN["LOADING"]}/>
                    ): (
                        <div className={"col-wrapper-24"}>

                       
                            {listJSX}
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default LOAandEOA;