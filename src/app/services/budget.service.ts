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
  remainingBudget:number = 1000

  constructor() { }

  addExpense(expense:Expenses) {
    this.expensesArray.push(expense)
    this._totalExpenses.next(Number(this._totalExpenses.value) + Number(expense.amount))
    this.remainingBudget -= Number(expense.amount)
  }

  setBudget(newBudget:number) {
    this.remainingBudget = newBudget - (this.totalBudget - this.remainingBudget)
    this.totalBudget = newBudget
  }

  getCategory(index:number){
    return this.categories[index]
  }

  getTotalExpenses() {
    return this._totalExpenses.getValue()
  }

  removeExpense(i:number){
    this._totalExpenses.next(Number(this._totalExpenses.value) - this.expensesArray[i].amount)
    this.remainingBudget += Number(this.expensesArray[i].amount)
    this.expensesArray.splice(i,1)
  }

  getExpensesPerCategory(categoryIndex:number){
    var sum = this.expensesArray.filter(item => item.category == categoryIndex)
                                .reduce((sum, current) => sum + current.amount, 0)
    return sum
  }


}
