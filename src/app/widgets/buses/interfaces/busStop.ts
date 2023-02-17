export interface busStop {
  id: string;
  alt_id: string;
  name: string;
  address: string;
  lat: number;
  lon: number;
}

export interface busStopName {
  name: string;
}

export type busStopNames = busStopName[];