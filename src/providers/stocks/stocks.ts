import { Injectable } from '@angular/core';

import { Stock } from '../../models/stock';
import { Api } from '../api/api';

@Injectable()
export class Stocks {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/stocks', params);
  }

  add(stock: Stock) {
  }

  delete(stock: Stock) {
  }

}
