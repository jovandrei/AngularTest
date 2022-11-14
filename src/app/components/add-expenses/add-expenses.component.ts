import { Component, OnInit, ViewChild } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';
import { Expenses } from 'src/app/interfaces/expenses';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.css']
})
export class AddExpensesComponent implements OnInit {

  expenses:Expenses = {
    amount:NaN,
    description:"",
    category:-1
  }

  constructor( private budgetService:BudgetService) { }

  ngOnInit(): void {
  }

  addExpense(f: NgForm) {
    this.budgetService.addExpense( {...this.expenses} )
    f.resetForm()
  }

  getCategories() {
    return this.budgetService.categories
  }

}
