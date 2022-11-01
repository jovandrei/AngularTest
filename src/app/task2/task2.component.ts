import { Component } from '@angular/core';
import { Coin } from '../../models/coin';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {

  title = 'lab3-b';
  newCoinsCount=1;
  coinType=0;
  totalSum=0;
  coinArray:Coin[]=[
    {name:"Penny", value:0.01, size:100},
    {name:"Nickel", value:0.05, size:111.33},
    {name:"Dime", value:0.10, size:94},
    {name:"Quarter", value:0.25, size:127.33}];
  wallet:Coin[] = [];

  walletElement = document.getElementById("walletElement");

  makeMoney(){
    for (let i = 0; i < this.newCoinsCount; i++) {
      this.wallet.push(this.coinArray[this.coinType]);
      this.totalSum += this.coinArray[this.coinType].value;
    }
  }

  removeCoin(indexToRemove:number){
    this.totalSum -= this.wallet[indexToRemove].value;
    this.wallet.splice(indexToRemove,1)
  }

}
