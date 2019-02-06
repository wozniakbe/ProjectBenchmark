import { Injectable } from '@angular/core';

import { Stock } from '../../models/stock';

@Injectable()
export class Stocks {
  stocks: Stock[] = [];

  defaultStock: any = {
    "name": "Chicago Bears",
    "profilePic": "assets/img/speakers/bear.jpg",
    "price": "50",
  };


  constructor() {
    let stocks = [
      {
        "name": "Chicago Bears",
        "profilePic": "assets/img/speakers/bear.jpg",
        "price": "50",
      },
      {
        "name": "Cleveland Browns",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "price": "20"
      },
      {
        "name": "Buffalo Bills",
        "profilePic": "assets/img/speakers/duck.jpg",
        "price": "1"
      },
      {
        "name": "Philadelphia Eagles",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "price": "30"
      },
      {
        "name": "New England Patriots",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "price": "65"
      },
      {
        "name": "Kansas City Chiefs",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "price": "70"
      },
      {
        "name": "Miami Dolphins",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "price": "0.5"
      }
    ];

    for (let stock of stocks) {
      this.stocks.push(new Stock(stock));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.stocks;
    }

    return this.stocks.filter((stock) => {
      for (let key in params) {
        let field = stock[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return stock;
        } else if (field == params[key]) {
          return stock;
        }
      }
      return null;
    });
  }

  add(stock: Stock) {
    this.stocks.push(stock);
  }

  delete(stock: Stock) {
    this.stocks.splice(this.stocks.indexOf(stock), 1);
  }
}
