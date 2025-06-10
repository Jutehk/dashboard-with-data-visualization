import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MetricCard } from './components/MetricCard';
import { BarChart } from './components/BarChart';
import { LineChart } from './components/LineChart';
import { DonutChart } from './components/DonutChart';
import { FilterControls } from './components/FilterControls';
import { LoadingSpinner } from './components/LoadingSpinner';
import { useDashboardData } from './hooks/useDashboardData';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data, filters, setFilters, isLoading } = useDashboardData();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Header */}
        <Header onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />
        
        {/* Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          {/* Filters */}
          <FilterControls filters={filters} onFiltersChange={setFilters} />
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {data.metrics.map((metric, index) => (
              <MetricCard 
                key={metric.id} 
                metric={metric} 
                delay={index * 100}
              />
            ))}
          </div>
          
          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="lg:col-span-1">
              <BarChart data={data.barChart} title="Monthly Revenue" />
            </div>
            <div className="lg:col-span-1">
              <DonutChart data={data.donutChart} title="Traffic Sources" />
            </div>
          </div>
          
          {/* Full-width chart */}
          <div className="mb-8">
            <LineChart data={data.lineChart} title="User Engagement Trend" height={400} />
          </div>
          
          {/* Additional content area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">U{item}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">User activity update</p>
                        <p className="text-xs text-gray-500">2 minutes ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Bounce Rate</span>
                    <span className="text-sm font-bold text-gray-900">23.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Page Views</span>
                    <span className="text-sm font-bold text-gray-900">1.2M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Session Duration</span>
                    <span className="text-sm font-bold text-gray-900">4m 32s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">New Users</span>
                    <span className="text-sm font-bold text-gray-900">12,847</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;