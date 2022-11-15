import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.css']
})
export class ExpensesTableComponent implements OnInit {

  constructor(private budgetService:BudgetService) { }

  ngOnInit(): void {
  }

  getExpensesArray() {
    return this.budgetService.expensesArray
  }

  getCategory(i:number){
    return this.budgetService.getCategory(i)
  }

  removeExpense(i:number){
    this.budgetService.removeExpense(i)
  }

}
