import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { DonutsComponent } from './component/donuts/donuts.component';
import { DonutsDetailComponent } from './component/donuts-detail/donuts-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';

const appRoutes: Routes = [
  { path: 'donuts', component: DonutsComponent},
  { path: 'donuts/:id', component: DonutsDetailComponent},
  { path: 'shoppingCart', component: ShoppingCartComponent},
  { path: '', redirectTo: '/donuts', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DonutsComponent,
    DonutsDetailComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
