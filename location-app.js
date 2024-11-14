// location-app.js
const { useState, useEffect } = React;

// AQICard Component
const AQICard = ({ aqi, city, loading }) => {
  const getAQIColor = (aqi) => {
    if (aqi <= 50) return 'bg-green-100 text-green-800';
    if (aqi <= 100) return 'bg-yellow-100 text-yellow-800';
    if (aqi <= 150) return 'bg-orange-100 text-orange-800';
    if (aqi <= 200) return 'bg-red-100 text-red-800';
    return 'bg-purple-100 text-purple-800';
  };

  const getAQIStatus = (aqi) => {
    if (aqi <= 50) return 'Good';
    if (aqi <= 100) return 'Moderate';
    if (aqi <= 150) return 'Unhealthy for Sensitive Groups';
    if (aqi <= 200) return 'Unhealthy';
    return 'Very Unhealthy';
  };

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

// Chart Component
const Chart = ({ data }) => (
  <div className="bg-white p-4 rounded-xl shadow-lg">
    <h3 className="text-lg font-semibold mb-4">AQI Trend</h3>
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

// CitySearch Component
const CitySearch = ({ onCityChange, currentCity }) => {
  const [inputCity, setInputCity] = useState(currentCity);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCity.trim()) {
      onCityChange(inputCity.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="relative">
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Enter city name..."
          className="w-full px-4 py-2 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-green-600 transition-colors"
        >
          <span>Search</span>
        </button>
      </div>
    </form>
  );
};

// Main LocationApp Component
const LocationApp = () => {
  const [city, setCity] = useState('New York');
  const [aqi, setAqi] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Dummy data for chart
  const dummyData = [
    { time: '12:00', value: 30 },
    { time: '13:00', value: 50 },
    { time: '14:00', value: 40 },
  ];

  return (
    <div className="p-4">
      <CitySearch onCityChange={setCity} currentCity={city} />
      <AQICard aqi={aqi} city={city} loading={loading} />
      <Chart data={dummyData} />
    </div>
  );
};

// Render the React app
ReactDOM.render(<LocationApp />, document.getElementById('location-root'));
