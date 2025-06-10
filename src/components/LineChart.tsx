import React, { useEffect, useState } from 'react';
import { TimeSeriesPoint } from '../types/dashboard';

interface LineChartProps {
  data: TimeSeriesPoint[];
  title: string;
  height?: number;
}

export const LineChart: React.FC<LineChartProps> = ({ data, title, height = 300 }) => {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationProgress(1);
    }, 200);

    return () => clearTimeout(timer);
  }, [data]);

  if (data.length === 0) return null;

  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const valueRange = maxValue - minValue;

  const getPoint = (index: number, value: number) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((value - minValue) / valueRange) * 80;
    return `${x},${y}`;
  };

  const pathData = data.map((point, index) => getPoint(index, point.value)).join(' ');
  const animatedPathData = data
    .slice(0, Math.floor(data.length * animationProgress))
    .map((point, index) => getPoint(index, point.value))
    .join(' ');

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Trend</span>
          </div>
        </div>
      </div>
      
      <div className="relative" style={{ height: `${height}px` }}>
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="overflow-visible">
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f3f4f6" strokeWidth="0.5"/>
            </pattern>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          
          <rect width="100" height="100" fill="url(#grid)" />
          
          {/* Area under the curve */}
          <path
            d={`M 0,100 L ${animatedPathData} L ${data.length > 0 ? getPoint(Math.floor((data.length - 1) * animationProgress), 0).split(',')[0] : 0},100 Z`}
            fill="url(#lineGradient)"
            fillOpacity="0.1"
            className="transition-all duration-2000 ease-out"
          />
          
          {/* Main line */}
          <polyline
            points={animatedPathData}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-2000 ease-out"
          />
          
          {/* Data points */}
          {data.slice(0, Math.floor(data.length * animationProgress)).map((point, index) => {
            const [x, y] = getPoint(index, point.value).split(',').map(Number);
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="2"
                fill="#3B82F6"
                className="hover:r-3 transition-all duration-200 cursor-pointer"
              >
                <title>{`${point.date}: ${point.value.toLocaleString()}`}</title>
              </circle>
            );
          })}
        </svg>
      </div>
      
      {/* Labels */}
      <div className="flex justify-between mt-4 text-xs text-gray-500">
        <span>{data[0]?.date}</span>
        <span>{data[Math.floor(data.length / 2)]?.date}</span>
        <span>{data[data.length - 1]?.date}</span>
      </div>
    </div>
  );
};