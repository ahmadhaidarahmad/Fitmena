import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData, Ticker } from '../../../@core/data/smart-table';
import { SmartTableService } from '../../../@core/mock/smart-table.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      ticker: {
        title: 'Ticker',
        type: 'string',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      market: {
        title: 'Market',
        type: 'string',
      },
      locale: {
        title: 'Locale',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
      },
      currency: {
        title: 'Currency',
        type: 'string',
      },
      active: {
        title: 'Active',
        type: 'string',
      },
      primaryExch: {
        title: 'Primary Exchange',
        type: 'string',
      },
      updated: {
        title: 'Updated At',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  tickers: Ticker[] = [];

  constructor(private service: SmartTableService) {
    //const data: Ticker[] = this.service.getTickers();
  }

  ngOnInit() {
    this.service.getTickers().subscribe(data => {
          this.tickers = data['tickers'];
          // tslint:disable-next-line: no-console
          console.log(this.tickers);
          this.source.load(this.tickers);
        });



  }
/*   onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  } */
}
