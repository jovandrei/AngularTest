import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketMasterFormComponent } from './Component/ticket-master-form/ticket-master-form.component';
import { ResultsOfEventsComponent } from './Component/results-of-events/results-of-events.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EventDetailsComponent } from './Component/event-details/event-details.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { BucketListComponent } from './Component/bucket-list/bucket-list.component';


const appRoutes:Routes=[
  { path:'ticketMaster', component:TicketMasterFormComponent},
  { path:'ticketMaster/:keyword', component:ResultsOfEventsComponent},
  { path:'ticketMaster/:id', component:EventDetailsComponent},
  { path:'bucket', component:BucketListComponent},
  { path:'',redirectTo:'/ticketMaster', pathMatch:'full'},
  { path:'**', component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TicketMasterFormComponent,
    ResultsOfEventsComponent,
    EventDetailsComponent,
    BucketListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
