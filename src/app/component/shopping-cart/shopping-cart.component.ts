import { Component} from '@angular/core';
import { DonutsReducedCart } from 'src/app/models/donuts-reduced-cart';
import { SpecificDonutAPIInterface } from 'src/app/models/specific-donut-apiinterface';
import { DonutsAPIService } from 'src/app/services/donuts-api.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent{

  donutArray:SpecificDonutAPIInterface[] = []
  constructor( private donutsAPIService:DonutsAPIService) { }

  remove(donut:DonutsReducedCart) {
    this.donutsAPIService.removeDonut(donut.specificDonutAPIInterface)
  }

  getDonutShoppingCartArray(){
    return this.donutsAPIService.donutShoppingCartArray
  }

  getTotalPrice() {
    return this.donutsAPIService.totalPrice
  }

  getTotalPriceByDonut(donut_id:number) {
    return this.donutsAPIService.totalPrice
  }

  getTotalCalories() {
    return this.donutsAPIService.totalCalories
  }

  getTotalCaloriesByDonut(donut_id:number) {
    return this.donutsAPIService.totalCalories
  }

  getReducedDonutShoppingCartArray() {
    return this.donutsAPIService.donutsReducedCartArray
  }

}
