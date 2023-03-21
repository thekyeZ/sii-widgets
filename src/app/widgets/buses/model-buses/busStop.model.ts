export interface BusStop {
  id: string;
  alt_id: string;
  name: string;
  address: string;
  lat: number;
  lon: number;
}

export interface BusStopName {
  id: string;
  name: string;
}

export type BusStopNames = BusStopName[];

export type BusArrival = {
  time: string;
  line: string;
  destination: string;
  stop: string;
};

export type BusArrivals = {
  [key: string]: BusArrival;
};
