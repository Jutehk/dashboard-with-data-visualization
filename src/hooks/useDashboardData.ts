import { useState, useEffect, useMemo } from 'react';
import { MetricData, ChartDataPoint, TimeSeriesPoint, DashboardFilters } from '../types/dashboard';

// Mock data generators
const generateMetrics = (): MetricData[] => [
  {
    id: '1',
    title: 'Total Revenue',
    value: 245680,
    change: 12.5,
    trend: 'up',
    icon: 'DollarSign',
    color: 'blue'
  },
  {
    id: '2',
    title: 'Active Users',
    value: 89432,
    change: -2.3,
    trend: 'down',
    icon: 'Users',
    color: 'green'
  },
  {
    id: '3',
    title: 'Conversion Rate',
    value: 3.47,
    change: 8.2,
    trend: 'up',
    icon: 'TrendingUp',
    color: 'purple'
  },
  {
    id: '4',
    title: 'Avg. Session',
    value: 4.32,
    change: 0.8,
    trend: 'up',
    icon: 'Clock',
    color: 'orange'
  }
];

const generateBarChartData = (): ChartDataPoint[] => [
  { name: 'Jan', value: 4000, color: '#3B82F6' },
  { name: 'Feb', value: 3000, color: '#8B5CF6' },
  { name: 'Mar', value: 5000, color: '#10B981' },
  { name: 'Apr', value: 4500, color: '#F59E0B' },
  { name: 'May', value: 6000, color: '#EF4444' },
  { name: 'Jun', value: 5500, color: '#06B6D4' }
];

const generateLineChartData = (): TimeSeriesPoint[] => {
  const data: TimeSeriesPoint[] = [];
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 30);
  
  for (let i = 0; i < 30; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    data.push({
      date: date.toISOString().split('T')[0],
      value: Math.floor(Math.random() * 1000) + 2000 + (i * 10)
    });
  }
  return data;
};

const generateDonutData = (): ChartDataPoint[] => [
  { name: 'Desktop', value: 45, color: '#3B82F6' },
  { name: 'Mobile', value: 35, color: '#8B5CF6' },
  { name: 'Tablet', value: 20, color: '#10B981' }
];

export const useDashboardData = () => {
  const [filters, setFilters] = useState<DashboardFilters>({
    timeRange: '30d',
    category: 'all',
    status: 'all'
  });
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [filters]);

  const data = useMemo(() => ({
    metrics: generateMetrics(),
    barChart: generateBarChartData(),
    lineChart: generateLineChartData(),
    donutChart: generateDonutData()
  }), [filters]);

  return {
    data,
    filters,
    setFilters,
    isLoading
  };
};