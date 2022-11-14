import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-total-expenses',
  templateUrl: './total-expenses.component.html',
  styleUrls: ['./total-expenses.component.css']
})
export class TotalExpensesComponent implements OnInit {

  expenses:number | null = null;

  constructor(private budgetService:BudgetService) { }

  ngOnInit(): void {

    this.budgetService.totalExpenses.subscribe(
      (res:number|null) => this.expenses = res
    )
  }

  getExpenses() {
    let val = this.budgetService.getTotalExpenses()
    if (val != null)
      return val + 1
    else
      return 0
  }

  getExpenses2() {
    let val = this.budgetService.getTotalExpenses()
    if (val != null)
      return val * 100 / (this.getBudget() + this.getExpenses())
    else
      return 0
  }

  getBudget() {
    return this.budgetService.totalBudget
  }

  value = this.getExpenses() * 100 / this.getBudget()
}
