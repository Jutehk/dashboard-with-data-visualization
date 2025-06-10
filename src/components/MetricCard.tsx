import React, { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Users, Clock } from 'lucide-react';
import { MetricData } from '../types/dashboard';

interface MetricCardProps {
  metric: MetricData;
  delay?: number;
}

const iconMap = {
  DollarSign,
  Users,
  TrendingUp,
  Clock
};

const colorMap = {
  blue: 'from-blue-500 to-blue-600',
  green: 'from-green-500 to-green-600',
  purple: 'from-purple-500 to-purple-600',
  orange: 'from-orange-500 to-orange-600'
};

export const MetricCard: React.FC<MetricCardProps> = ({ metric, delay = 0 }) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const Icon = iconMap[metric.icon as keyof typeof iconMap] || DollarSign;
  const gradientClass = colorMap[metric.color as keyof typeof colorMap] || colorMap.blue;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Animate the value
      const duration = 1000;
      const steps = 50;
      const stepValue = metric.value / steps;
      
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        setAnimatedValue(Math.min(currentStep * stepValue, metric.value));
        
        if (currentStep >= steps) {
          clearInterval(interval);
          setAnimatedValue(metric.value);
        }
      }, duration / steps);
      
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [metric.value, delay]);

  const formatValue = (value: number) => {
    if (metric.title.includes('Rate') || metric.title.includes('Session')) {
      return value.toFixed(2) + (metric.title.includes('Rate') ? '%' : 'min');
    }
    return value.toLocaleString();
  };

  return (
    <div className={`
      bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100
      transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
    `}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-2">{metric.title}</p>
          <p className="text-3xl font-bold text-gray-900 mb-2">
            {formatValue(animatedValue)}
          </p>
          <div className="flex items-center space-x-1">
            {metric.trend === 'up' ? (
              <TrendingUp className="w-4 h-4 text-green-500" />
            ) : metric.trend === 'down' ? (
              <TrendingDown className="w-4 h-4 text-red-500" />
            ) : null}
            <span className={`text-sm font-medium ${
              metric.trend === 'up' ? 'text-green-500' : 
              metric.trend === 'down' ? 'text-red-500' : 'text-gray-500'
            }`}>
              {metric.change > 0 ? '+' : ''}{metric.change}%
            </span>
            <span className="text-sm text-gray-500">vs last month</span>
          </div>
        </div>
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${gradientClass} flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};