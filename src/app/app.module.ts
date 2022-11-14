import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesTableComponent } from './components/expenses-table/expenses-table.component';
import { AddExpensesComponent } from './components/add-expenses/add-expenses.component';
import { TotalExpensesComponent } from './components/total-expenses/total-expenses.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SetBudgetComponent } from './components/set-budget/set-budget.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesTableComponent,
    AddExpensesComponent,
    TotalExpensesComponent,
    SetBudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
