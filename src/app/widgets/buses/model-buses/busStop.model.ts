export interface busStop {
  id: string;
  alt_id: string;
  name: string;
  address: string;
  lat: number;
  lon: number;
}

export interface busStopName {
  id: string;
  name: string;
}

export type busStopNames = busStopName[];

export type busArrival = {
  time: string;
  line: string;
  destination: string;
  stop: string;
};

export type busArrivals = {
  [key: string]: busArrival;
};
