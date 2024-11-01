"use client"

import React from 'react';
import { ResponsivePie } from '@nivo/pie';

type OrderData = {
  id: string;
  label: string;
  value: number;
//   color: string;
};

const orderData: OrderData[] = [
  { id: 'completed', label: 'Completed', value: 400 },  // Tailwind green-500
  { id: 'pending', label: 'Pending', value: 300 },      // Tailwind amber-500
  { id: 'cancelled', label: 'Cancelled', value: 50 },  // Tailwind red-500
  { id: 'new', label: 'New', value: 250 },              // Tailwind blue-500
];

const MyResponsivePie: React.FC = () => (
  <div className="h-96"> {/* Tailwind for height */}
    <ResponsivePie
      data={orderData}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
    //   defs={[
    //     {
    //       id: 'dots',
    //       type: 'patternDots',
    //       background: 'inherit',
    //       color: 'rgba(255, 255, 255, 0.3)',
    //       size: 4,
    //       padding: 1,
    //       stagger: true,
    //     },
    //     {
    //       id: 'lines',
    //       type: 'patternLines',
    //       background: 'inherit',
    //       color: 'rgba(255, 255, 255, 0.3)',
    //       rotation: -45,
    //       lineWidth: 6,
    //       spacing: 10,
    //     },
    //   ]}
      fill={[
        { match: { id: 'completed' }, id: 'dots' },
        { match: { id: 'pending' }, id: 'dots' },
        { match: { id: 'cancelled' }, id: 'lines' },
        { match: { id: 'new' }, id: 'lines' },
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999999', // Tailwind gray-500
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000000', // Tailwind black
              },
            },
          ],
        },
      ]}
    />
  </div>
);

export default MyResponsivePie;
