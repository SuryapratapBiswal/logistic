// ResponsiveBar.tsx (Ensure this component uses Tailwind's `h-full` for height control)
"use client";

import React from "react";
import { ResponsiveBar } from "@nivo/bar";

type LogisticsData = {
    month: string;
    shipments: number;
    returns: number;
    inTransit: number;
    deliveries: number;
};

const data: LogisticsData[] = [
    { month: "Jan", shipments: 120, returns: 10, inTransit: 40, deliveries: 70 },
    { month: "Feb", shipments: 140, returns: 15, inTransit: 35, deliveries: 90 },
    { month: "Mar", shipments: 130, returns: 20, inTransit: 50, deliveries: 60 },
    { month: "Apr", shipments: 160, returns: 10, inTransit: 45, deliveries: 105 },
    { month: "May", shipments: 180, returns: 25, inTransit: 55, deliveries: 100 },
    { month: "Jun", shipments: 200, returns: 20, inTransit: 60, deliveries: 120 },
    { month: "Jul", shipments: 170, returns: 18, inTransit: 50, deliveries: 102 },
    { month: "Aug", shipments: 160, returns: 15, inTransit: 45, deliveries: 100 },
    { month: "Sep", shipments: 150, returns: 12, inTransit: 48, deliveries: 90 },
    { month: "Oct", shipments: 190, returns: 22, inTransit: 60, deliveries: 108 },
    { month: "Nov", shipments: 180, returns: 18, inTransit: 50, deliveries: 112 },
    { month: "Dec", shipments: 210, returns: 20, inTransit: 55, deliveries: 135 },
];

const MyResponsiveBar: React.FC = () => (
    <div className="h-full w-full p-4"> {/* Responsive container for bar chart */}
        <ResponsiveBar
            data={data}
            keys={["shipments", "returns", "inTransit", "deliveries"]}
            indexBy="month"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: "linear", min: 0, max: 450 }} // Set max to suit data range
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "nivo" }}
            fill={[
                { match: { id: "returns" }, id: "dots" },
                { match: { id: "inTransit" }, id: "lines" },
            ]}
            borderColor={{
                from: "color",
                modifiers: [["darker", 1.6]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Month",
                legendPosition: "middle",
                legendOffset: 32,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Count",
                legendPosition: "middle",
                legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: "color",
                modifiers: [["darker", 1.6]],
            }}
            legends={[
                {
                    dataFrom: "keys",
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={(e) => `${e.id}: ${e.formattedValue} in month: ${e.indexValue}`}
        />

    </div>
);

export default MyResponsiveBar;


