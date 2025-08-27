export const weatherBackgrounds = {
  clear:'https://images.unsplash.com/photo-1501973801540-537f08ccae7c?auto=format&fit=crop&w=1350&q=80',
  snow: 'https://images.unsplash.com/photo-1606788075767-380a7b1e6f91?auto=format&fit=crop&w=1350&q=80',
  thunderstorms: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1350&q=80',
  mist: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80',
  rain: 'https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=1350&q=80',
  drizzle: 'https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=1350&q=80',
  clouds: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80',
  default: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80'
}


export const getWeatherBackground = (weatherMain) => {
  const condition = weatherMain.toLowerCase()

  if (condition.includes('rain')) return weatherBackgrounds.rain
  if (condition.includes('clouds')) return weatherBackgrounds.clouds
  if (condition.includes('snow')) return weatherBackgrounds.snow
  if (condition.includes('thunderstorm') || condition.includes('storm')) return weatherBackgrounds.thunderstorms
  if (condition.includes('clear')) return weatherBackgrounds.clear
  if (condition.includes('drizzle')) return weatherBackgrounds.drizzle
  if (condition.includes('mist') || condition.includes('fog')) return weatherBackgrounds.mist

  return weatherBackgrounds.default
}

export const popularCities = [
  'Nairobi',
  'Helsinki',
  'Rio',
  'Berlin',
  'Tokyo',
  'Denver',
  'Moscow'
]
