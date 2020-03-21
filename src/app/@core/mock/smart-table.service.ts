import { Injectable } from '@angular/core';
import { SmartTableData, Ticker } from '../data/smart-table';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

// tslint:disable-next-line: max-line-length
const apiUrl = 'https://api.polygon.io/v2/reference/tickers?sort=ticker&perpage=50&page=1&apiKey=o4_IJF5hOb_mu_0vyYP91FErRzISAsEY9sFB_m';

@Injectable()
export class SmartTableService extends SmartTableData {

  constructor(private http: HttpClient) {
    super();
    this.getTickers();
  }

  getTickers() {
    return this.http.get(apiUrl);
  }
}
