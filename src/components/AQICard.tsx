import React from 'react';
import { Wind } from 'lucide-react';

type AQICardProps = {
  aqi: number;
  city: string;
  loading?: boolean;
};

const getAQIColor = (aqi: number) => {
  if (aqi <= 50) return 'bg-green-100 text-green-800';
  if (aqi <= 100) return 'bg-yellow-100 text-yellow-800';
  if (aqi <= 150) return 'bg-orange-100 text-orange-800';
  if (aqi <= 200) return 'bg-red-100 text-red-800';
  return 'bg-purple-100 text-purple-800';
};

const getAQIStatus = (aqi: number) => {
  if (aqi <= 50) return 'Good';
  if (aqi <= 100) return 'Moderate';
  if (aqi <= 150) return 'Unhealthy for Sensitive Groups';
  if (aqi <= 200) return 'Unhealthy';
  return 'Very Unhealthy';
};

export const AQICard: React.FC<AQICardProps> = ({ aqi, city, loading }) => {
  const colorClass = getAQIColor(aqi);
  const status = getAQIStatus(aqi);

  if (loading) {
    return (
      <div className="animate-pulse bg-white rounded-xl p-6 shadow-lg">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-8 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  return (
    <div className={`rounded-xl p-6 shadow-lg ${colorClass} transition-all duration-300`}>
      <div className="flex items-center justify-between mb-4">
        <Wind className="w-8 h-8" />
        <span className="text-sm font-medium">{city}</span>
      </div>
      <div className="space-y-2">
        <div className="text-3xl font-bold">{aqi}</div>
        <div className="text-sm font-medium">Air Quality Index</div>
        <div className="text-xs">{status}</div>
      </div>
    </div>
  );
};