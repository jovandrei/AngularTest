import { Component, OnInit } from '@angular/core';
import { SpecificDonutAPIInterface } from 'src/app/models/specific-donut-apiinterface';
import { DonutsAPIService } from 'src/app/services/donuts-api.service';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-donuts-detail',
  templateUrl: './donuts-detail.component.html',
  styleUrls: ['./donuts-detail.component.css']
})
export class DonutsDetailComponent implements OnInit {


  donut:SpecificDonutAPIInterface = {} as SpecificDonutAPIInterface
  constructor(private donutsAPIService:DonutsAPIService, private route:ActivatedRoute, private appComponent:AppComponent) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let id:number = Number(routeParams.get("id"))
    this.donutsAPIService.getDonut(id).subscribe(
      (response:SpecificDonutAPIInterface) => {
        this.donut = response
      }
    );
  }

  addDonut() {
    this.donutsAPIService.addDonut(this.donut)
  }

}
