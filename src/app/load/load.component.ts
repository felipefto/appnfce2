import { Component, AfterContentChecked } from '@angular/core';
import {Router} from '@angular/router';
import { ElectronService } from 'ngx-electron';


@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements AfterContentChecked {

  router : Router
  
  electronService : ElectronService
  constructor(private _router: Router, private _electronService: ElectronService) {
    this.router = _router
    this.electronService = _electronService;
    
   }

   ngAfterContentChecked (){

    setTimeout(() => {

      this.electronService.ipcRenderer.send('createWindowLogin', this.electronService.remote.getCurrentWindow().id)   

    },2000)
    
/*
    localStorage.setItem('loaded', 'true');
    if(localStorage.getItem('logado')==="true"){
      this.electronService.ipcRenderer.send('createWindowMain', this.electronService.remote.getCurrentWindow())   
    }else{
      this.electronService.ipcRenderer.send('createWindowLogin', this.electronService.remote.getCurrentWindow())   
    }*/
     

  }
  
    
}
