export interface MetricData {
  id: string;
  title: string;
  value: number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  icon: string;
  color: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  color?: string;
}

export interface TimeSeriesPoint {
  date: string;
  value: number;
  category?: string;
}

export interface DashboardFilters {
  timeRange: '7d' | '30d' | '90d' | '1y';
  category: string;
  status: string;
}