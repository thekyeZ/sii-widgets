export interface ExchangeResult {
  message: string;
  supportedPairs: string[];
  code: number;
}

export interface Exchange {
  currencyFrom: string;
  currencyTo: string;
}

export interface Rates {
  rates: {
    [key: string]: Rate;
  };
  code: number;
}

export interface Rate {
  rate: number;
  timestamp: number;
}

// https://www.freeforexapi.com/api/live?pairs=AUDUSD,EURGBP,EURUSD,GBPUSD,NZDUSD,USDAED,USDAFN,USDALL,USDAMD,USDANG
