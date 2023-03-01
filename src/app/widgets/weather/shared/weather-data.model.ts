export interface WeatherData {
    latitude: number
    longitude: number
    generationtime_ms: number
    utc_offset_seconds: number
    timezone: string
    timezone_abbreviation: string
    elevation: number
    daily_units: DailyUnits
    daily: Daily
  }
  
  export interface DailyUnits {
    time: string
    temperature_2m_max: string
    temperature_2m_min: string
    sunrise: string
    sunset: string
    precipitation_sum: string
  }
  
  export interface Daily {
    time: string[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
    sunrise: string[]
    sunset: string[]
    precipitation_sum: number[]
  }