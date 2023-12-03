import { Component } from '@angular/core';
import { IStockDetails } from 'src/app/models/stock.model';

@Component({
  selector: 'app-stock-records2',
  templateUrl: './stock-records2.component.html',
  styleUrls: ['./stock-records2.component.css']
})
export class StockRecords2Component {
  public stock2Records: IStockDetails[];
  constructor() {
    this.stock2Records = [];
  }

  public ngOnInit(): void {
    this.stock2Records = [
      {
        id: 1,
        stockName: 'BioScrip, Inc.',
        stockMarketCap: 306.888888888888809,
        stockMSector: 'Health Care',
        releaseDate: '01/06/2021',
        symbol: 'BIOS',
      },
      {
        id: 2,
        stockName: 'RiceBran Technologies',
        stockMarketCap: 9.62,
        stockMSector: 'Consumer Non-Durables',
        releaseDate: '11/05/2021',
        symbol: 'RIBT',
      },
      {
        id: 3,
        stockName: 'John Hancock Investors Trust',
        stockMarketCap: 152.46,
        stockMSector: 'Health Care',
        releaseDate: '12/05/2021',
        symbol: 'JHI',
      },
      {
        id: 4,
        stockName: 'Yatra Online, Inc.',
        stockMarketCap: 398.74,
        stockMSector: 'Consumer Services',
        releaseDate: '10/03/2021',
        symbol: 'YTRA',
      },
      {
        id: 5,
        stockName: 'Restaurant Brands International Inc.',
        stockMarketCap: 14.34,
        stockMSector: 'Consumer Services',
        releaseDate: '06/07/2021',
        symbol: 'QSR',
      },
    ];
  }
}
