import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { StocksService } from '../../providers';
import { Stock } from '../../models/stock';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentStocks: Stock[];

  constructor(public navCtrl: NavController, public stocksService: StocksService, public modalCtrl: ModalController) {
    this.stocksService.getStocks().subscribe(res => {
      this.currentStocks = res;
    });
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addStock() {
    // TODO: Buy instead of add
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(stock => {
      if (stock) {
        //this.stocks.add(stock);
      }
    })
    addModal.present();
  }

  /**
   * Delete a stock from the list of stocks.
   */
  deleteStock(stock) {
    // Cannot delete stocks
    //this.stocks.delete(stock);
  }

  /**
   * Navigate to the detail page for this stock.
   */
  openStock(stock: Stock) {
    this.navCtrl.push('StockDetailPage', {
      stock: stock
    });
  }
}
