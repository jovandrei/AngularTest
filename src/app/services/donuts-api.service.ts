import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from '@angular/core';
import { DonutsAPIInterface } from "../models/donuts-apiinterface";
import { Observable } from 'rxjs';
import { SpecificDonutAPIInterface } from "../models/specific-donut-apiinterface";
import { DonutsReducedCart } from "../models/donuts-reduced-cart";

@Injectable({
  providedIn: 'root'
})
export class DonutsAPIService implements OnInit {
  url: String = 'https://grandcircusco.github.io/demo-apis/donuts'
  constructor(private http: HttpClient) { }

  totalPrice = 0
  totalCalories = 0
  donutsList: DonutsAPIInterface = {} as DonutsAPIInterface;
  donutShoppingCartArray: SpecificDonutAPIInterface[] = []
  donutsReducedCartArray: DonutsReducedCart[] = []


  ngOnInit(): void {
    this.getDonuts().subscribe(
      (response: DonutsAPIInterface) => {
        this.donutsList = response
      }
    );
  }

  getDonuts(): Observable<DonutsAPIInterface> {
    return this.http.get<DonutsAPIInterface>(`${this.url}` + ".json");
  }

  getDonut(id: number): Observable<SpecificDonutAPIInterface> {
    return this.http.get<SpecificDonutAPIInterface>(`${this.url}` + "/" + id + ".json");
  }

  addDonut(donut: SpecificDonutAPIInterface) {
    this.totalPrice += 1
    this.totalCalories += donut.calories

    let matchingDonutIndex = this.donutsReducedCartArray.findIndex(({ id }) => id === donut.id)
    if (matchingDonutIndex == -1) {
      this.donutsReducedCartArray.push({ id: donut.id, count: 1, total_price: 1, total_calories: donut.calories, specificDonutAPIInterface: donut })
    } else {
      this.donutsReducedCartArray[matchingDonutIndex].count++
      this.donutsReducedCartArray[matchingDonutIndex].total_price += 1
      this.donutsReducedCartArray[matchingDonutIndex].total_calories += donut.calories
    }
  }

  removeDonut(donut: SpecificDonutAPIInterface) {
    this.totalPrice -= 1
    this.totalCalories -= donut.calories

    let matchingDonutIndex = this.donutsReducedCartArray.findIndex(({ id }) => id === donut.id)
    this.donutsReducedCartArray[matchingDonutIndex].count--
    this.donutsReducedCartArray[matchingDonutIndex].total_price -= 1
    this.donutsReducedCartArray[matchingDonutIndex].total_calories -= donut.calories
    if (this.donutsReducedCartArray[matchingDonutIndex].count == 0) {
      this.donutsReducedCartArray.splice(matchingDonutIndex, 1)
    }
  }

  getQuantity() {
    let sum = 0
    this.donutsReducedCartArray.forEach((obj) => {
      sum += obj.count
    })
    return sum
  }



}
