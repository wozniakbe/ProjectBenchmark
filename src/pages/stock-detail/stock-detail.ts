import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StocksService } from '../../providers';



@IonicPage()
@Component({
  selector: 'page-stock-detail',
  templateUrl: 'stock-detail.html'
})
export class StockDetailPage {
  stock: any;

  constructor(public navCtrl: NavController, navParams: NavParams, stocksService: StocksService) {
    this.stock = navParams.get('stock');
  }

}
