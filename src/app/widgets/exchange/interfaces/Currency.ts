export interface ExchangeResult {
  message: string;
  supportedPairs: string[];
  code: number;
}

export interface Exchange {
  currencyFirst: string;
  currencySecond: string;
}
