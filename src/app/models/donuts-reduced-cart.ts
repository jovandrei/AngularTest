import { SpecificDonutAPIInterface } from "./specific-donut-apiinterface";

export interface DonutsReducedCart {
  id:number,
  count:number,
  total_price:number,
  total_calories:number,
  specificDonutAPIInterface:SpecificDonutAPIInterface
}
