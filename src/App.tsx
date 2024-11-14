import React from 'react';
import { AQICard } from './components/AQICard';
import { Chart } from './components/Chart';
import { SustainabilityTips } from './components/SustainabilityTips';
import { useAQIData, useAQIHistory } from './hooks/useAQIData';
import { Leaf } from 'lucide-react';

function App() {
  const { aqi, city, isLoading } = useAQIData();
  const { data: historyData } = useAQIHistory();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">EcoTrack Dashboard</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* AQI Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Air Quality</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AQICard aqi={aqi} city={city} loading={isLoading} />
              <div className="md:col-span-2">
                <Chart data={historyData} />
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Sustainability Tips</h2>
            <SustainabilityTips />
          </section>

          {/* Image Section */}
          <section className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=1800&q=80"
              alt="Environmental sustainability"
              className="w-full h-64 object-cover"
            />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            Data provided by World Air Quality Index Project. Updated every 5 minutes.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;