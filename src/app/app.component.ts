import { Component} from '@angular/core';
import { DonutsAPIService } from './services/donuts-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'lab7';

  constructor(private donutsAPIService:DonutsAPIService){}

  getQuantity() {
    return this.donutsAPIService.getQuantity()

  }

}
