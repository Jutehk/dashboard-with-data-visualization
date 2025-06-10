import React, { useEffect, useState } from 'react';
import { ChartDataPoint } from '../types/dashboard';

interface BarChartProps {
  data: ChartDataPoint[];
  title: string;
  height?: number;
}

export const BarChart: React.FC<BarChartProps> = ({ data, title, height = 300 }) => {
  const [animatedData, setAnimatedData] = useState<ChartDataPoint[]>([]);

  useEffect(() => {
    // Animate bars
    const timer = setTimeout(() => {
      setAnimatedData(data);
    }, 200);

    return () => clearTimeout(timer);
  }, [data]);

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Revenue</span>
        </div>
      </div>
      
      <div className="relative" style={{ height: `${height}px` }}>
        <div className="flex items-end justify-between h-full space-x-4">
          {data.map((item, index) => {
            const animatedItem = animatedData[index];
            const barHeight = animatedItem ? (animatedItem.value / maxValue) * (height - 40) : 0;
            
            return (
              <div key={item.name} className="flex flex-col items-center flex-1">
                <div className="w-full flex flex-col items-center">
                  <div className="relative w-full group">
                    <div
                      className="w-full rounded-t-lg transition-all duration-1000 ease-out cursor-pointer hover:opacity-80"
                      style={{
                        height: `${barHeight}px`,
                        backgroundColor: item.color,
                        transition: 'height 1s ease-out, opacity 0.2s ease-in-out'
                      }}
                    />
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      {item.value.toLocaleString()}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-600 mt-3">{item.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};