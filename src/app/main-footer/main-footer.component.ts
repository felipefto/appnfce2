import { Component } from '@angular/core';
import * as moment from 'moment'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.css']
})
export class MainFooterComponent {

  now: any;
  data: any;
  constructor(){
    this.updateTime();
    const interval = Observable.interval(1000);
    interval
      .do(i => this.updateTime())
      .subscribe();

  }
  
  updateTime(){
    this.now = moment().format('HH:mm:ss');
    this.data = moment().format('DD/MM/YYYY');    
  }

}
