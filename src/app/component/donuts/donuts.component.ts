import { Component, OnInit } from '@angular/core';
import { DonutsAPIInterface } from 'src/app/models/donuts-apiinterface';
import { DonutsAPIService } from 'src/app/services/donuts-api.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {

  donuts:DonutsAPIInterface = {} as DonutsAPIInterface;
  constructor(private donutsAPIService:DonutsAPIService) { }

  ngOnInit(): void {
    this.donutsAPIService.getDonuts().subscribe(
      (response:DonutsAPIInterface) => {
        this.donuts = response
      }
    );
  }

}
