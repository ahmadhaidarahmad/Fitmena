import { Observable } from 'rxjs';

export abstract class SmartTableData {
  abstract getTickers(): Observable<Object>;
}

export interface Ticker {
  ticker: string;
  name: string;
  market: string;
  locale: string;
  type: string;
  currency: string;
  active: string;
  primaryExch: string;
  updated: string;
}
