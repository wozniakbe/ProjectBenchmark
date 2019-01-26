import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { StockDetailPage } from './stock-detail';

@NgModule({
  declarations: [
    StockDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(StockDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    StockDetailPage
  ]
})
export class ItemDetailPageModule { }
