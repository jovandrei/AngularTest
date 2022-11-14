import { Injectable } from '@angular/core';
import { Expenses } from '../interfaces/expenses';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  categories:String[]=["Food","Clothing","Bills","Entertainment"]
  expensesArray:Expenses[] = []
  private _totalExpenses = new BehaviorSubject<number | null>(0)
  readonly totalExpenses:Observable<number| null>  = this._totalExpenses.asObservable();

  totalBudget:number = 1000

  constructor() { }

  addExpense(expense:Expenses) {
    this.expensesArray.push(expense)
    this._totalExpenses.next(Number(this._totalExpenses.value) + Number(expense.amount))
    this.totalBudget -= Number(expense.amount)
  }

  setBudget(newBudget:number) {
    this.totalBudget = newBudget
  }

  getCategory(index:number){
    return this.categories[index]
  }

  getTotalExpenses() {
    return this._totalExpenses.getValue()
  }


}
