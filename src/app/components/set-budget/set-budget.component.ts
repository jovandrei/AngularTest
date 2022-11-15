import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-set-budget',
  templateUrl: './set-budget.component.html',
  styleUrls: ['./set-budget.component.css']
})
export class SetBudgetComponent implements OnInit {

  toDate:Date = new Date()
  budgetAmount = 0
  constructor( private budgetService:BudgetService) {
    this.budgetAmount = budgetService.totalBudget
  }

  ngOnInit(): void {
  }

  setBudget(f: NgForm) {
    this.budgetService.setBudget( this.budgetAmount )
  }

}
