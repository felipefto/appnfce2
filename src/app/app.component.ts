import { Component, OnInit } from '@angular/core';
import { app } from 'electron';
import { ElectronService } from 'ngx-electron';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  electronService: ElectronService;
  router: Router;
  constructor(private _router: Router, private _electronService: ElectronService) {   
    this.router = _router;
    this.electronService = _electronService;
  }

  ngOnInit() {
     var pagina = this.electronService.remote.getGlobal('pagina') ;
     if(pagina !== 'load'){
       this.router.navigate([pagina]);
     }
  }

}
