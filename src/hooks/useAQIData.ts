import useSWR from 'swr';

const API_KEY = 'demo'; // Using demo key for demonstration
const CITY = 'london'; // Default city

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
};

export const useAQIData = () => {
  const { data, error, isLoading } = useSWR(
    `https://api.waqi.info/feed/${CITY}/?token=${API_KEY}`,
    fetcher,
    { refreshInterval: 300000 } // Refresh every 5 minutes
  );

  return {
    aqi: data?.data?.aqi ?? 0,
    city: data?.data?.city?.name ?? CITY,
    isLoading,
    isError: error,
  };
};

// Mock data for the chart
export const useAQIHistory = () => {
  const hours = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, '0') + ':00';
    const value = Math.floor(Math.random() * 100) + 20;
    return { time: hour, value };
  });

  return { data: hours };
};