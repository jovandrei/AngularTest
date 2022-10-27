//import { MenuItem } from './models/menu-item';
import { MenuItem } from '../models/MenuItem';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chirpus Pizza!';
  totalPrice = 0.0;

  menuItemsArray:MenuItem[] = [
    { item:"Chicken Fingers", category:"dinner", price:11.99},
    { item:"Pizza", category:"dinner", price:11.99},
    { item:"Wings", category:"sides", price:8.99},
    { item:"Breadsticks", category:"sides", price:4.99},
    { item:"Ceasar Salad", category:"salads", price:5.99},
    { item:"Cinnamon Roll", category:"dessert", price:8.99}
  ]

  menuItemsPurchasedItems:MenuItem[] = []


  buyItem(menuItem:MenuItem):void{
    this.menuItemsPurchasedItems.push(menuItem);
    this.totalPrice += menuItem.price;
  }

}
