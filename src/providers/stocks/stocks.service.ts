import { Injectable } from '@angular/core';

import { Stock } from '../../models/stock';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/map';

@Injectable()
export class StocksService {

  private stocksCollection: AngularFirestoreCollection<Stock>;
  private stocks: Observable<Stock[]>;

  constructor(db: AngularFirestore) {
    this.stocksCollection = db.collection<Stock>('stocks');
 
    // TODO: See comment on line 31
    this.stocks = this.stocksCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getStocks() {
    // TODO: Should snapshotChanges() be moved to this method for data efficiency?
    return this.stocks;
  }
 
  getStock(id) {
    return this.stocksCollection.doc<Stock>(id).valueChanges();
  }
 
  updateStock(todo: Stock, id: string) {
    return this.stocksCollection.doc(id).update(todo);
  }
 
  addStock(todo: Stock) {
    // TODO: Probably should remove this
    return this.stocksCollection.add(todo);
  }
 
  removeStock(id) {
    // TODO: Probably should remove this
    return this.stocksCollection.doc(id).delete();
  }

}
