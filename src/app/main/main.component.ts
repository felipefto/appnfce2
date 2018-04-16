import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  electronService: ElectronService;
  constructor(private router:Router) { }

  
  ngOnInit() {
      
  }

}
