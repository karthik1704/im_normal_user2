import { useMemo } from "react";
import Chart, { IChart } from "./Chart";

import "./InsightsChart.scss";

export interface IInsightsChart {
    chartData: IChart, heading: string, containerClassName?: string,
}
const InsightsChart = ({chartData, heading, containerClassName}: IInsightsChart) => {
    let _containerClassName = useMemo(() => {
        return (containerClassName)? containerClassName: "";
    }, [containerClassName])
    return (
        <>
            <div className={"insights-chart-container " + _containerClassName }>
                <h6 className={"t-align-center"}>{heading}</h6>
                <div className={"insights-chart"}>
                    <Chart {...chartData}/>
                </div>
            </div>
        </>
    )
}

export default InsightsChart;