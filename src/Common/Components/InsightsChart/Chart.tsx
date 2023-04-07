 
import { SvgFillMatcher } from '@nivo/core';
import { ComputedDatum, ResponsivePie } from '@nivo/pie'

export interface IChart {
    data: any,
    fill?: {
        id: string;
        match: Record<string, unknown> | "*" | SvgFillMatcher<ComputedDatum<unknown>>;
    }[] | undefined,
}
const Chart = ({ data, fill }: IChart) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        startAngle={-180}
        cornerRadius={8}
        colors={{ scheme: 'blues' }}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsTextXOffset={8}
        radialLabelsTextColor="#000000"
        radialLabelsLinkOffset={2}
        radialLabelsLinkDiagonalLength={13}
        radialLabelsLinkHorizontalLength={15}
        radialLabelsLinkColor="black"
        sliceLabelsRadiusOffset={0.65}
        sliceLabelsTextColor="#000000"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        // valueFormat={">-0,.2%"}
        fill={fill}
        // legends={[
        //     {
        //         anchor: 'bottom-right',
        //         direction: 'column',
        //         justify: false,
        //         translateX: 0,
        //         translateY: 56,
        //         itemsSpacing: 10,
        //         itemWidth: 107,
        //         itemHeight: 25,
        //         itemTextColor: '#999',
        //         itemDirection: 'left-to-right',
        //         itemOpacity: 1,
        //         symbolSize: 21,
        //         symbolShape: 'circle',
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemTextColor: '#000'
        //                 }
        //             }
        //         ]
        //     }
        // ]}
        sliceLabel={(item) => `${item.value}%`}
    />
)

export default Chart;