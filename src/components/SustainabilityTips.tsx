import React from 'react';
import { Leaf, Droplets, Car, Lightbulb } from 'lucide-react';

const tips = [
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'Plant More Trees',
    description: 'Trees absorb pollutants and provide clean air.',
  },
  {
    icon: <Car className="w-6 h-6" />,
    title: 'Reduce Car Usage',
    description: 'Use public transport or bike when possible.',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Save Energy',
    description: 'Switch to LED bulbs and turn off unused devices.',
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    title: 'Conserve Water',
    description: 'Fix leaks and use water-efficient appliances.',
  },
];

export const SustainabilityTips: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tips.map((tip, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
              {tip.icon}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{tip.title}</h3>
              <p className="text-sm text-gray-600">{tip.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};